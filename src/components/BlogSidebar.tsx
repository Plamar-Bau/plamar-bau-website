import Link from "next/link";
import { Folder, Clock, Tag } from "lucide-react";
import {
  getCategories,
  getLatest,
  getTags,
  slugify,
} from "@/lib/blog";

export default function BlogSidebar({
  currentSlug,
}: {
  currentSlug?: string;
}) {
  const categories = getCategories();
  const latest = getLatest(5, currentSlug);
  const tags = getTags();

  return (
    <aside className="space-y-8">
      {/* Kategorien */}
      <div className="rounded-2xl border border-line bg-white p-6">
        <h3 className="flex items-center gap-2 font-heading text-lg font-bold text-brand-dark">
          <Folder className="h-5 w-5 text-brand" />
          Kategorien
        </h3>
        <ul className="mt-4 space-y-1">
          {categories.map((c) => (
            <li key={c.name}>
              <Link
                href={`/blog/kategorie/${slugify(c.name)}`}
                className="flex items-center justify-between rounded-lg px-3 py-2 text-slate-600 transition hover:bg-surface hover:text-brand"
              >
                <span className="font-medium">{c.name}</span>
                <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-surface-2 px-2 text-xs font-bold text-brand">
                  {c.count}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Letzte Beiträge */}
      <div className="rounded-2xl border border-line bg-white p-6">
        <h3 className="flex items-center gap-2 font-heading text-lg font-bold text-brand-dark">
          <Clock className="h-5 w-5 text-brand" />
          Letzte Beiträge
        </h3>
        <ul className="mt-4 space-y-4">
          {latest.map((p) => (
            <li key={p.slug}>
              <Link href={`/blog/${p.slug}`} className="group flex gap-3">
                <span className="h-14 w-14 shrink-0 overflow-hidden rounded-lg">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition group-hover:scale-105"
                  />
                </span>
                <span>
                  <span className="line-clamp-2 font-heading text-sm font-semibold text-brand-dark transition group-hover:text-brand">
                    {p.title}
                  </span>
                  <span className="mt-0.5 block text-xs text-muted">
                    {p.dateLabel}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Etiketten / Tags */}
      <div className="rounded-2xl border border-line bg-white p-6">
        <h3 className="flex items-center gap-2 font-heading text-lg font-bold text-brand-dark">
          <Tag className="h-5 w-5 text-brand" />
          Etiketten
        </h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.slice(0, 16).map((t) => (
            <Link
              key={t}
              href={`/blog/tag/${slugify(t)}`}
              className="rounded-full border border-line bg-surface px-3 py-1.5 text-sm font-medium text-slate-600 transition hover:border-brand/40 hover:bg-white hover:text-brand"
            >
              {t}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
