import Link from "next/link";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(9,51,101,0.12)]">
      <Link href={`/blog/${post.slug}`} className="relative block h-52 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 font-heading text-xs font-bold uppercase tracking-wide text-brand-darker">
          {post.category}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-4 text-xs text-muted">
          <span className="flex items-center gap-1.5">
            <CalendarDays className="h-4 w-4" />
            {post.dateLabel}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            {post.readMinutes} Min.
          </span>
        </div>
        <h3 className="mt-3 font-heading text-xl font-bold leading-snug text-brand-dark">
          <Link href={`/blog/${post.slug}`} className="transition hover:text-brand">
            {post.title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 leading-relaxed text-slate-600">
          {post.excerpt}
        </p>
        <Link
          href={`/blog/${post.slug}`}
          className="mt-5 inline-flex items-center gap-1.5 font-heading text-sm font-bold text-brand"
        >
          Weiterlesen
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
