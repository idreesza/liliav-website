import { useEffect } from 'react';

export function useSEO(title: string, description?: string) {
  useEffect(() => {
    document.title = title;
    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', 'description');
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', description);
    }
    window.scrollTo(0, 0);
  }, [title, description]);
}

export function useRevealObserver() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.is-visible)');
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('is-visible')),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
}

/** Injects (and cleans up) a JSON-LD structured-data script tag — keeps schema correct on client-side navigation. */
export function useJsonLd(id: string, data: Record<string, unknown> | null) {
  const serialized = data ? JSON.stringify(data) : null;
  useEffect(() => {
    if (!serialized) return;
    let el = document.getElementById(id) as HTMLScriptElement | null;
    if (!el) {
      el = document.createElement('script');
      el.id = id;
      el.type = 'application/ld+json';
      document.head.appendChild(el);
    }
    el.textContent = serialized;
    return () => {
      document.getElementById(id)?.remove();
    };
  }, [id, serialized]);
}
