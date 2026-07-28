export interface ImgMeta { w: number; h: number; widths: number[] }

export const IMG: Record<string, ImgMeta> = {
  hero: { w: 2048, h: 1095, widths: [768, 1280, 2048] },
  'dest-usa': { w: 2048, h: 1095, widths: [768, 1280, 2048] },
  'dest-turkey': { w: 2048, h: 1095, widths: [768, 1280, 2048] },
  'dest-lebanon': { w: 2048, h: 1095, widths: [768, 1280, 2048] },
  about: { w: 1536, h: 973, widths: [768, 1280, 1536] },
  clinic: { w: 1536, h: 973, widths: [768, 1280, 1536] },
  consult: { w: 1536, h: 973, widths: [768, 1280, 1536] },
  'journal-1': { w: 1536, h: 973, widths: [768, 1280, 1536] },
  journey: { w: 1536, h: 973, widths: [768, 1280, 1536] },
  recovery: { w: 1536, h: 972, widths: [768, 1280, 1536] },
  silhouette: { w: 1536, h: 973, widths: [768, 1280, 1536] },
  'texture-marble': { w: 1536, h: 973, widths: [768, 1280, 1536] },
  'texture-silk': { w: 1536, h: 973, widths: [768, 1280, 1536] },
  'portrait-1': { w: 1024, h: 1460, widths: [640, 1024] },
  'portrait-2': { w: 1024, h: 1460, widths: [640, 1024] },
  'portrait-3': { w: 1024, h: 1460, widths: [640, 1024] },
};

interface LuxImgProps {
  /** Image base name, e.g. 'dest-usa' (files live at /images/{base}-{w}.{webp,jpg}) */
  base: string;
  alt: string;
  className?: string;
  sizes?: string;
  eager?: boolean;
  fetchHigh?: boolean;
}

/** Responsive <picture> with WebP srcset, JPG fallback, explicit dimensions, lazy by default. */
export function LuxImg({ base, alt, className, sizes = '100vw', eager = false, fetchHigh = false }: LuxImgProps) {
  const meta = IMG[base];
  if (!meta) return null;
  const srcSet = (ext: string) => meta.widths.map((w) => `/images/${base}-${w}.${ext} ${w}w`).join(', ');
  const largest = meta.widths[meta.widths.length - 1];
  return (
    <picture>
      <source type="image/webp" srcSet={srcSet('webp')} sizes={sizes} />
      <img
        src={`/images/${base}-${largest}.jpg`}
        srcSet={srcSet('jpg')}
        sizes={sizes}
        alt={alt}
        width={meta.w}
        height={meta.h}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        {...(fetchHigh ? { fetchPriority: 'high' as const } : {})}
        className={className}
      />
    </picture>
  );
}
