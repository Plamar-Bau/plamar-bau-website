import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { company } from "@/lib/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Grenzen für Datei-Uploads
const MAX_FILES = 6;
const MAX_TOTAL_BYTES = 4 * 1024 * 1024; // ~4 MB gesamt (Vercel Request-Limit)
const ALLOWED_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/heic",
  "image/heif",
  "image/gif",
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Ungültige Anfrage." },
      { status: 400 }
    );
  }

  const name = String(form.get("name") || "").trim();
  const phone = String(form.get("phone") || "").trim();
  const email = String(form.get("email") || "").trim();
  const leistung = String(form.get("service") || "").trim();
  const zeit = String(form.get("timeframe") || "").trim();
  const message = String(form.get("message") || "").trim();
  // Honeypot gegen Spam-Bots
  const honey = String(form.get("company_website") || "").trim();

  if (honey) {
    // Bot erkannt – wir tun so, als wäre alles in Ordnung.
    return NextResponse.json({ ok: true });
  }

  // Pflichtfelder: Name, Telefon und E-Mail
  if (!name || !phone || !email) {
    return NextResponse.json(
      { ok: false, error: "Bitte Name, Telefon und E-Mail ausfüllen." },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Bitte eine gültige E-Mail-Adresse angeben." },
      { status: 400 }
    );
  }

  // Anhänge sammeln und validieren
  const files = form.getAll("attachments").filter((f): f is File => f instanceof File && f.size > 0);
  if (files.length > MAX_FILES) {
    return NextResponse.json(
      { ok: false, error: `Bitte maximal ${MAX_FILES} Dateien anhängen.` },
      { status: 400 }
    );
  }

  let totalBytes = 0;
  const attachments: { filename: string; content: Buffer; contentType: string }[] = [];
  for (const file of files) {
    if (file.type && !ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json(
        { ok: false, error: `Dateityp nicht erlaubt: ${file.name}` },
        { status: 400 }
      );
    }
    totalBytes += file.size;
    if (totalBytes > MAX_TOTAL_BYTES) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Die Anhänge sind zu groß (max. 4 MB gesamt). Bitte kleinere Dateien senden.",
        },
        { status: 413 }
      );
    }
    const buffer = Buffer.from(await file.arrayBuffer());
    attachments.push({
      filename: file.name || "anhang",
      content: buffer,
      contentType: file.type || "application/octet-stream",
    });
  }

  // SMTP-Konfiguration aus Umgebungsvariablen
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 465);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_TO || company.email;

  if (!host || !user || !pass) {
    console.error("SMTP-Konfiguration fehlt (SMTP_HOST/SMTP_USER/SMTP_PASS).");
    return NextResponse.json(
      {
        ok: false,
        error:
          "Der E-Mail-Versand ist noch nicht konfiguriert. Bitte kontaktieren Sie uns telefonisch.",
      },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // 465 = SSL, 587 = STARTTLS
    auth: { user, pass },
  });

  const subject = `Neue Anfrage über die Website – ${name}`;
  const lines = [
    ["Name", name],
    ["Telefon", phone],
    ["E-Mail", email],
    ["Leistung", leistung || "—"],
    ["Gewünschter Zeitrahmen", zeit || "—"],
  ];

  const text =
    lines.map(([k, v]) => `${k}: ${v}`).join("\n") +
    `\n\nNachricht:\n${message || "—"}` +
    (attachments.length ? `\n\nAnhänge: ${attachments.length}` : "");

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;color:#0f172a;max-width:640px">
      <h2 style="color:#093365;margin:0 0 16px">Neue Anfrage über plamar-bau.de</h2>
      <table style="border-collapse:collapse;width:100%">
        ${lines
          .map(
            ([k, v]) =>
              `<tr>
                 <td style="padding:8px 12px;background:#f1f5f9;font-weight:bold;border:1px solid #e2e8f0;white-space:nowrap">${escapeHtml(
                   k
                 )}</td>
                 <td style="padding:8px 12px;border:1px solid #e2e8f0">${escapeHtml(
                   v
                 )}</td>
               </tr>`
          )
          .join("")}
      </table>
      <h3 style="color:#093365;margin:20px 0 8px">Nachricht</h3>
      <p style="white-space:pre-wrap;line-height:1.6;margin:0">${escapeHtml(
        message || "—"
      )}</p>
      ${
        attachments.length
          ? `<p style="margin-top:16px;color:#475569">📎 ${attachments.length} Datei(en) im Anhang</p>`
          : ""
      }
    </div>`;

  try {
    await transporter.sendMail({
      from: `"PLAMAR-BAU Website" <${user}>`,
      to,
      replyTo: `${name} <${email}>`,
      subject,
      text,
      html,
      attachments,
    });
  } catch (err) {
    console.error("E-Mail-Versand fehlgeschlagen:", err);
    return NextResponse.json(
      {
        ok: false,
        error:
          "Der Versand ist fehlgeschlagen. Bitte versuchen Sie es später erneut oder rufen Sie uns an.",
      },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
