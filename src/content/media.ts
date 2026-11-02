const pngIndexes = new Set([4, 22, 30]);

/** Stills extracted from the Magical Theatre design prototype / show archive. */
export const mediaPool = Array.from({ length: 45 }, (_, i) => {
  const n = String(i).padStart(2, "0");
  const ext = pngIndexes.has(i) ? "png" : "jpg";
  return `/media/bundle-${n}.${ext}`;
});

export function mediaForSlug(slug: string, offset = 0) {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) hash = (hash + slug.charCodeAt(i) * (i + 1)) % 997;
  const index = (hash + offset) % mediaPool.length;
  return mediaPool[index];
}

export const heroMedia = "/media/bundle-08.jpg";
export const heroMedia2d = "/media/bundle-03.jpg";
export const heroMedia3d = "/media/bundle-00.jpg";
export const heroMediaTemple = "/media/hero-product-temple.jpg";
export const studioMedia = "/media/bundle-01.jpg";
export const founderMedia = "/media/team/aman-arora.jpg";

/** Hero product-stage stills that auto-rotate (2D / 3D / heritage). */
export const heroProductStills = [
  {
    id: "2d",
    src: heroMedia2d,
    label: "2D frames",
    eyebrow: "Product · 2D narrative",
    caption: "Illustrated story locked frame-by-frame to the façade.",
  },
  {
    id: "3d",
    src: heroMedia3d,
    label: "3D mapping",
    eyebrow: "Product · 3D depth",
    caption: "Architecture gains volume, motion and relief.",
  },
  {
    id: "heritage",
    src: heroMediaTemple,
    label: "Heritage show",
    eyebrow: "Product · Living temple",
    caption: "Faith, flag and façade — a monument told in light.",
  },
] as const;

/**
 * Curated project stills — mapped to the closest show photograph in /public/media.
 * Prefer façade shows for son-et-lumière; museum still for museums; water/install for laser.
 */
export const projectMedia: Record<string, string> = {
  "maheshwar-ghat": "/media/bundle-00.jpg",
  "rajwada-palace": "/media/bundle-03.jpg",
  "travancore-house": "/media/bundle-12.jpg",
  "gateway-of-india-g20": "/media/bundle-08.jpg",
  "ram-mandir": "/media/bundle-05.jpg",
  "mahakumbh-laser-water": "/media/bundle-09.jpg",
  "kashi-vishwanath": "/media/bundle-12.jpg",
  "lalita-ghat": "/media/bundle-00.jpg",
  "wave-summit": "/media/bundle-08.jpg",
  "shri-yamuna-ji": "/media/bundle-05.jpg",
};

export function mediaForProject(slug: string, offset = 0) {
  return projectMedia[slug] || mediaForSlug(slug, offset);
}
