import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  CalendarDays,
  Clock,
  ChevronRight,
  ArrowRight,
  ArrowLeft,
  Tag,
  Phone,
  CheckCircle2,
  Building2,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Accordion from "@/components/Accordion";
import BlogSidebar from "@/components/BlogSidebar";
import BlogCard from "@/components/BlogCard";
import { posts, getPost, getPrevNext, getRelated, slugify } from "@/lib/blog";
import { company } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Beitrag nicht gefunden | PLAMAR" };
  return {
    title: `${post.title} | PLAMAR Blog`,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const { prev, next } = getPrevNext(slug);
  const related = getRelated(slug, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        image: post.image,
        datePublished: post.date,
        articleSection: post.category,
        keywords: post.tags.join(", "),
        author: { "@type": "Organization", name: company.legalName },
        publisher: { "@type": "Organization", name: company.legalName },
      },
      {
        "@type": "FAQPage",
        mainEntity: post.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-1">
        {/* Hero header */}
        <section className="relative overflow-hidden bg-brand-darker text-white">
          <img
            src={post.image}
            alt={post.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-brand-darker/90 to-brand-darker/70" />
          <div className="relative mx-auto max-w-4xl px-6 py-16 md:py-20">
            <nav className="flex flex-wrap items-center gap-1.5 text-sm text-white/70">
              <Link href="/" className="transition hover:text-white">
                Startseite
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/blog" className="transition hover:text-white">
                Blog
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-accent">{post.category}</span>
            </nav>

            <span className="mt-6 inline-block rounded-full bg-accent px-3 py-1 font-heading text-xs font-bold uppercase tracking-wide text-brand-darker">
              {post.category}
            </span>
            <h1 className="mt-4 font-heading text-3xl font-extrabold uppercase leading-tight sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-5 text-sm text-white/80">
              <span className="flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4" />
                {post.dateLabel}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {post.readMinutes} Min. Lesezeit
              </span>
            </div>
          </div>
        </section>

        {/* Body + sidebar */}
        <section className="bg-white py-16">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_320px]">
            {/* Article */}
            <article>
              {post.intro.map((p) => (
                <p
                  key={p}
                  className="mb-5 text-lg leading-relaxed text-slate-700"
                >
                  {p}
                </p>
              ))}

              {/* In diesem Beitrag */}
              <div className="my-8 rounded-2xl border-l-4 border-brand bg-surface p-6">
                <h2 className="font-heading text-lg font-bold text-brand-dark">
                  In diesem Beitrag
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {post.sections.map((s) => (
                    <li key={s.heading} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                      <span className="text-slate-700">{s.heading}</span>
                    </li>
                  ))}
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                    <span className="text-slate-700">Häufige Fragen &amp; Antworten</span>
                  </li>
                </ul>
              </div>

              {post.sections.map((s) => (
                <div key={s.heading} className="mt-8">
                  <h2 className="font-heading text-2xl font-bold text-brand-dark">
                    {s.heading}
                  </h2>
                  {s.body.map((b) => (
                    <p key={b} className="mt-3 leading-relaxed text-slate-600">
                      {b}
                    </p>
                  ))}
                </div>
              ))}

              {/* Fazit */}
              {post.conclusion && (
                <div className="mt-10 rounded-2xl bg-brand-darker p-7 text-white">
                  <h2 className="font-heading text-xl font-bold text-accent">
                    Fazit
                  </h2>
                  <p className="mt-3 leading-relaxed text-white/85">
                    {post.conclusion}
                  </p>
                </div>
              )}

              {/* FAQ, dropdowns */}
              <div className="mt-12">
                <h2 className="font-heading text-2xl font-bold text-brand-dark">
                  Häufige Fragen
                </h2>
                <div className="mt-6">
                  <Accordion items={post.faqs} />
                </div>
              </div>

              {/* Tags */}
              <div className="mt-10 flex flex-wrap items-center gap-2 border-t border-line pt-8">
                <span className="flex items-center gap-1.5 font-heading text-sm font-bold text-brand-dark">
                  <Tag className="h-4 w-4" />
                  Etiketten:
                </span>
                {post.tags.map((t) => (
                  <Link
                    key={t}
                    href={`/blog/tag/${slugify(t)}`}
                    className="rounded-full border border-line bg-surface px-3 py-1.5 text-sm font-medium text-slate-600 transition hover:border-brand/40 hover:text-brand"
                  >
                    {t}
                  </Link>
                ))}
              </div>

              {/* Über PLAMAR-BAU */}
              <div className="mt-10 flex flex-col gap-5 rounded-3xl border border-line bg-white p-7 sm:flex-row sm:items-center">
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-brand text-white">
                  <Building2 className="h-8 w-8" />
                </span>
                <div>
                  <h3 className="font-heading text-lg font-bold text-brand-dark">
                    PLAMAR-BAU · Ihr Bauunternehmen aus Uhingen
                  </h3>
                  <p className="mt-1.5 leading-relaxed text-slate-600">
                    Wir übernehmen Gerüstbau, Sanierung, Elektro, HWS,
                    Innenausbau, Fassade, Dach und Badsanierung, auf Wunsch
                    alles koordiniert aus einer Hand. Fragen zu diesem Thema? Wir
                    beraten Sie gern.
                  </p>
                </div>
              </div>

              {/* Unique CTA */}
              <div className="mt-10 overflow-hidden rounded-3xl bg-surface p-8 text-center sm:p-10">
                <h2 className="font-heading text-2xl font-extrabold uppercase text-brand-dark sm:text-3xl">
                  {post.cta.title}
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-slate-600">
                  {post.cta.text}
                </p>
                <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row">
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 font-heading font-bold text-white transition hover:bg-brand-dark"
                  >
                    Kostenloses Angebot
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  <a
                    href={company.phoneHref}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-7 py-3.5 font-heading font-bold text-brand-dark transition hover:bg-white"
                  >
                    <Phone className="h-5 w-5" />
                    {company.phone}
                  </a>
                </div>
              </div>

              {/* Prev / Next */}
              <nav className="mt-10 grid gap-4 border-t border-line pt-8 sm:grid-cols-2">
                {prev ? (
                  <Link
                    href={`/blog/${prev.slug}`}
                    className="group flex items-center gap-4 rounded-2xl border border-line bg-white p-4 transition hover:border-brand/40 hover:shadow-sm"
                  >
                    <img
                      src={prev.image}
                      alt={prev.title}
                      className="h-16 w-16 shrink-0 rounded-lg object-cover"
                    />
                    <span className="min-w-0">
                      <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted">
                        <ArrowLeft className="h-4 w-4" />
                        Vorheriger Beitrag
                      </span>
                      <span className="mt-1 line-clamp-2 font-heading font-bold text-brand-dark transition group-hover:text-brand">
                        {prev.title}
                      </span>
                    </span>
                  </Link>
                ) : (
                  <span />
                )}
                {next ? (
                  <Link
                    href={`/blog/${next.slug}`}
                    className="group flex items-center gap-4 rounded-2xl border border-line bg-white p-4 text-right transition hover:border-brand/40 hover:shadow-sm"
                  >
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center justify-end gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted">
                        Nächster Beitrag
                        <ArrowRight className="h-4 w-4" />
                      </span>
                      <span className="mt-1 line-clamp-2 font-heading font-bold text-brand-dark transition group-hover:text-brand">
                        {next.title}
                      </span>
                    </span>
                    <img
                      src={next.image}
                      alt={next.title}
                      className="h-16 w-16 shrink-0 rounded-lg object-cover"
                    />
                  </Link>
                ) : (
                  <span />
                )}
              </nav>
            </article>

            {/* Sidebar */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <BlogSidebar currentSlug={post.slug} />
            </div>
          </div>
        </section>

        {/* More from the blog */}
        <section className="bg-surface py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
                Mehr aus dem Blog
              </p>
              <h2 className="mt-2 font-heading text-3xl font-extrabold uppercase leading-tight text-brand-dark sm:text-4xl">
                Weitere Beiträge
              </h2>
            </div>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 font-heading font-bold text-white transition hover:bg-brand-dark"
              >
                Alle Beiträge
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
