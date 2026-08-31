import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import BlogSidebar from "@/components/BlogSidebar";
import { getCategories, getByCategorySlug, slugify } from "@/lib/blog";

type Params = { params: Promise<{ kategorie: string }> };

export function generateStaticParams() {
  return getCategories().map((c) => ({ kategorie: slugify(c.name) }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { kategorie } = await params;
  const cat = getCategories().find((c) => slugify(c.name) === kategorie);
  if (!cat) return { title: "Kategorie nicht gefunden | PLAMAR Blog" };
  return {
    title: `Beiträge zu ${cat.name} | PLAMAR Blog`,
    description: `Alle Blog-Beiträge in der Kategorie ${cat.name} von PLAMAR Bauunternehmung UG.`,
  };
}

export default async function CategoryPage({ params }: Params) {
  const { kategorie } = await params;
  const cat = getCategories().find((c) => slugify(c.name) === kategorie);
  if (!cat) notFound();
  const list = getByCategorySlug(kategorie);

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-brand-darker text-white">
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand/40 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-6 py-16">
            <nav className="flex flex-wrap items-center gap-1.5 text-sm text-white/70">
              <Link href="/" className="transition hover:text-white">
                Startseite
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/blog" className="transition hover:text-white">
                Blog
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-accent">Kategorie</span>
            </nav>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Kategorie
            </p>
            <h1 className="mt-2 font-heading text-4xl font-extrabold uppercase leading-tight sm:text-5xl">
              {cat.name}
            </h1>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_320px]">
            <div className="grid gap-8 sm:grid-cols-2">
              {list.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
            <BlogSidebar />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
