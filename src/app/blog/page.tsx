import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogSearchList from "@/components/BlogSearchList";
import BlogSidebar from "@/components/BlogSidebar";
import { getSortedPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog & Ratgeber | PLAMAR Bauunternehmung UG",
  description:
    "Ratgeber und Tipps rund um Bau, Sanierung und Modernisierung: Gerüstbau, Dach, Fassade, Bad, Elektro, Heizung und mehr vom Bauunternehmen PLAMAR aus Uhingen.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog & Ratgeber | PLAMAR-BAU",
    description:
      "Ratgeber rund um Bau, Sanierung und Modernisierung vom Bauunternehmen PLAMAR aus Uhingen.",
    type: "website",
    url: "/blog",
    images: ["/images/blog-hero.jpg"],
  },
};

export default function BlogPage() {
  const posts = getSortedPosts();

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-brand-darker text-white">
          <img
            src="/images/blog-hero.jpg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-darker via-brand-darker/92 to-brand-darker/70" />
          <div
            className="absolute inset-0 opacity-[0.10]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand/40 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
            <nav className="flex items-center gap-1.5 text-sm text-white/70">
              <Link href="/" className="transition hover:text-white">
                Startseite
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-accent">Blog</span>
            </nav>
            <h1 className="mt-6 font-heading text-4xl font-extrabold uppercase leading-[1.05] sm:text-5xl">
              Blog &amp; Ratgeber
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/80">
              Wissenswertes rund um Bau, Sanierung und Modernisierung, von
              Gerüstbau und Dach über Fassade bis zur Komplettsanierung.
            </p>
          </div>
        </section>

        {/* Content + sidebar */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-6">
            <BlogSearchList posts={posts} sidebar={<BlogSidebar />} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
