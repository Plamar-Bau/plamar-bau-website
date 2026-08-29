"use client";

import { useEffect, useRef, useState } from "react";
import { ImagePlus, MoveHorizontal } from "lucide-react";
import Reveal from "./Reveal";

// Bildunterschriften der Vorher/Nachher-Vergleiche (frei anpassbar).
const pairs = ["Komplettsanierung", "Fassade & Dach"];

function Layer({
  src,
  label,
  tone,
}: {
  src: string;
  label: string;
  tone: "before" | "after";
}) {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  if (failed) {
    return (
      <div
        className={`flex h-full w-full flex-col items-center justify-center p-4 text-center ${
          tone === "before" ? "bg-slate-700 text-white" : "bg-brand text-white"
        }`}
      >
        <ImagePlus className="h-8 w-8 opacity-90" />
        <p className="mt-2 font-heading text-xs font-bold uppercase tracking-wide">
          {label}
        </p>
        <p className="mt-0.5 text-[11px] text-white/80">Ihr Foto hier</p>
      </div>
    );
  }

  return (
    <img
      ref={ref}
      src={src}
      alt={label}
      onError={() => setFailed(true)}
      className="h-full w-full object-cover"
      draggable={false}
    />
  );
}

function Comparison({ index, caption }: { index: number; caption: string }) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const dragging = useRef(false);

  function setFromClientX(clientX: number) {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  }

  useEffect(() => {
    const move = (e: PointerEvent) => {
      if (dragging.current) setFromClientX(e.clientX);
    };
    const up = () => {
      dragging.current = false;
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, []);

  return (
    <figure className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_18px_50px_rgba(0,0,0,0.3)]">
      <div
        ref={containerRef}
        onPointerDown={(e) => {
          dragging.current = true;
          setFromClientX(e.clientX);
        }}
        className="relative aspect-[4/3] w-full cursor-ew-resize touch-none select-none overflow-hidden"
      >
        {/* After (base) */}
        <div className="absolute inset-0">
          <Layer
            src={`/images/nachher-${index}.jpg`}
            label="Nachher"
            tone="after"
          />
        </div>
        <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-brand-darker/70 px-2.5 py-1 font-heading text-[11px] font-bold uppercase tracking-wide text-white backdrop-blur">
          Nachher
        </span>

        {/* Before (clipped) */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <Layer
            src={`/images/vorher-${index}.jpg`}
            label="Vorher"
            tone="before"
          />
          <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-brand-darker/70 px-2.5 py-1 font-heading text-[11px] font-bold uppercase tracking-wide text-white backdrop-blur">
            Vorher
          </span>
        </div>

        {/* Handle */}
        <div
          className="pointer-events-none absolute inset-y-0"
          style={{ left: `${pos}%` }}
        >
          <div className="absolute inset-y-0 -ml-px w-0.5 bg-white/90" />
          <div className="absolute top-1/2 -ml-4 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white text-brand shadow-lg">
            <MoveHorizontal className="h-4 w-4" />
          </div>
        </div>
      </div>
      <figcaption className="px-5 py-4 font-heading text-sm font-semibold text-white">
        {caption}
      </figcaption>
    </figure>
  );
}

export default function BeforeAfter() {
  return (
    <section className="bg-brand-darker py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Vorher / Nachher
          </p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold uppercase leading-tight sm:text-4xl">
            Sehen Sie den Unterschied
          </h2>
          <p className="mt-4 text-white/75">
            Ziehen Sie den Regler nach links und rechts, um den Zustand vor und
            nach unserer Arbeit zu vergleichen.
          </p>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2">
          {pairs.map((caption, i) => (
            <Reveal key={caption} delay={(i % 2) * 90}>
              <Comparison index={i + 1} caption={caption} />
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
