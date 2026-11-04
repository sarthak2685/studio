export type ShowVideo = {
  id: string;
  title: string;
  place: string;
  src: string;
  poster: string;
};

/**
 * Web-encoded cuts of the show masters. Each loop is muted-autoplay safe and
 * under ~1.3 MB; the full showreel carries audio and is click-to-play only.
 */
export const showVideos: ShowVideo[] = [
  {
    id: "gateway-tricolour",
    title: "Gateway of India",
    place: "Mumbai · G20",
    src: "/media/video/reel-gateway-tricolour.mp4",
    poster: "/media/video/reel-gateway-tricolour.jpg",
  },
  {
    id: "hatkeshwar-shiva",
    title: "Hatkeshwar Temple",
    place: "Vadnagar, Gujarat",
    src: "/media/video/reel-hatkeshwar-shiva.mp4",
    poster: "/media/video/reel-hatkeshwar-shiva.jpg",
  },
  {
    id: "gateway-peacock",
    title: "Colour on the arch",
    place: "Gateway of India, Mumbai",
    src: "/media/video/reel-gateway-peacock.mp4",
    poster: "/media/video/reel-gateway-peacock.jpg",
  },
  {
    id: "hatkeshwar-bloom",
    title: "The shikhara in bloom",
    place: "Hatkeshwar, Gujarat",
    src: "/media/video/reel-hatkeshwar-bloom.mp4",
    poster: "/media/video/reel-hatkeshwar-bloom.jpg",
  },
  {
    id: "gateway-g20",
    title: "G20 summit night",
    place: "Gateway of India, Mumbai",
    src: "/media/video/reel-gateway-g20.mp4",
    poster: "/media/video/reel-gateway-g20.jpg",
  },
  {
    id: "hatkeshwar-gold",
    title: "Temple in gold",
    place: "Hatkeshwar, Gujarat",
    src: "/media/video/reel-hatkeshwar-gold.mp4",
    poster: "/media/video/reel-hatkeshwar-gold.jpg",
  },
];

export function videoAt(index: number): ShowVideo {
  return showVideos[index % showVideos.length];
}

/** Silent 1080p loop that plays on the back wall of the hero room. */
export const heroVideo = {
  src: "/media/video/hero-gateway.mp4",
  poster: "/media/video/hero-gateway.jpg",
  place: "Gateway of India, Mumbai",
};

/** The full reel with sound, opened from the theatre screen. */
export const showreelVideo = {
  src: "/media/video/showreel.mp4",
  poster: "/media/video/showreel.jpg",
  title: "Showreel",
  place: "Gateway of India · G20",
};
