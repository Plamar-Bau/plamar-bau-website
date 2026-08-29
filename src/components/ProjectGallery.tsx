"use client";

import { useEffect, useRef, useState } from "react";
import { ImagePlus } from "lucide-react";

function Slot({ src, caption }: { src: string; caption: string }) {
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  // Fängt auch Fehler ab, die vor der Hydration passieren (fehlende Datei).
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) {
      setFailed(true);
    }
  }, []);

  if (failed) {
    // Platzhalter: erscheint, solange noch kein Foto hochgeladen wurde.
    return (
      <figure className="flex aspect-[4/3] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-brand/30 bg-surface-2/60 p-6 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-brand shadow-sm">
          <ImagePlus className="h-7 w-7" />
        </span>
        <figcaption className="mt-4 font-heading text-sm font-semibold text-brand-dark">
          {caption}
        </figcaption>
        <span className="mt-1 text-xs text-muted">Foto folgt</span>
      </figure>
    );
  }

  return (
    <figure className="group relative overflow-hidden rounded-2xl shadow-[0_16px_44px_rgba(9,51,101,0.12)]">
      <img
        ref={imgRef}
        src={src}
        alt={caption}
        onError={() => setFailed(true)}
        className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-darker/80 via-transparent to-transparent" />
      <figcaption className="absolute inset-x-0 bottom-0 p-4 font-medium text-white">
        {caption}
      </figcaption>
    </figure>
  );
}

export default function ProjectGallery({
  slug,
  captions,
}: {
  slug: string;
  captions: string[];
}) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {captions.map((caption, i) => (
        <Slot
          key={i}
          src={`/images/leistungen/${slug}-${i + 1}.jpg`}
          caption={caption}
        />
      ))}
    </div>
  );
}
