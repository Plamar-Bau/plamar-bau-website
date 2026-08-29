"use client";

import { useEffect, useState } from "react";
import { Search, X, SearchX, ChevronLeft, ChevronRight } from "lucide-react";
import BlogCard from "./BlogCard";
import type { BlogPost } from "@/lib/blog";

const PAGE_SIZE = 6;

export default function BlogSearchList({
  posts,
  sidebar,
}: {
  posts: BlogPost[];
  sidebar: React.ReactNode;
}) {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const q = query.trim().toLowerCase();

  const filtered = q
    ? posts.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      )
    : posts;

  // Bei neuer Suche zur ersten Seite springen
  useEffect(() => {
    setPage(1);
  }, [q]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const paged = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  function goTo(p: number) {
    setPage(p);
    if (typeof window !== "undefined")
      window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div>
      {/* Prominente Suchleiste */}
      <div className="mb-10 rounded-3xl border border-line bg-surface p-6 shadow-[0_10px_40px_rgba(9,51,101,0.06)] sm:p-8">
        <label
          htmlFor="blog-search"
          className="mb-3 block text-center font-heading text-lg font-bold text-brand-dark"
        >
          Beitrag suchen
        </label>
        <div className="relative mx-auto max-w-2xl">
          <Search className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-brand" />
          <input
            id="blog-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Nach Titel, Thema oder Stichwort suchen …"
            aria-label="Beiträge durchsuchen"
            className="w-full rounded-full border border-line bg-white py-4 pl-14 pr-12 text-base text-slate-800 shadow-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Suche zurücksetzen"
              className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-muted transition hover:bg-surface hover:text-brand"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
        {q && (
          <p className="mt-3 text-center text-sm text-muted">
            {filtered.length}{" "}
            {filtered.length === 1 ? "Beitrag" : "Beiträge"} für „{query}"
          </p>
        )}
      </div>

      {/* Inhalt + Sidebar */}
      <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
        <div>
          {filtered.length > 0 ? (
            <>
              <div className="grid gap-8 sm:grid-cols-2">
                {paged.map((p) => (
                  <BlogCard key={p.slug} post={p} />
                ))}
              </div>

              {/* Seitennummerierung */}
              {totalPages > 1 && (
                <nav className="mt-12 flex items-center justify-center gap-2">
                  <button
                    type="button"
                    onClick={() => goTo(currentPage - 1)}
                    disabled={currentPage === 1}
                    aria-label="Vorherige Seite"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-brand-dark transition hover:border-brand/40 hover:text-brand disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (n) => (
                      <button
                        key={n}
                        type="button"
                        onClick={() => goTo(n)}
                        aria-current={n === currentPage ? "page" : undefined}
                        className={`h-11 w-11 rounded-full font-heading text-sm font-bold transition ${
                          n === currentPage
                            ? "bg-brand text-white"
                            : "border border-line bg-white text-brand-dark hover:border-brand/40 hover:text-brand"
                        }`}
                      >
                        {n}
                      </button>
                    )
                  )}
                  <button
                    type="button"
                    onClick={() => goTo(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    aria-label="Nächste Seite"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-brand-dark transition hover:border-brand/40 hover:text-brand disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </nav>
              )}
            </>
          ) : (
            <div className="flex flex-col items-center rounded-2xl border border-line bg-surface p-12 text-center">
              <SearchX className="h-10 w-10 text-muted" />
              <p className="mt-4 font-heading text-lg font-bold text-brand-dark">
                Keine Beiträge gefunden
              </p>
              <p className="mt-1 text-slate-600">
                Für „{query}" haben wir nichts gefunden. Versuchen Sie einen
                anderen Suchbegriff.
              </p>
            </div>
          )}
        </div>
        {sidebar}
      </div>
    </div>
  );
}
