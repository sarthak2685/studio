export type Reel = {
  id: string;
  title: string;
  place: string;
  src: string;
  poster: string;
};

/**
 * Showcase reels — image tiles open video in a modal.
 * Sample clips from Magical Theatre Project Videos; more can be added later.
 */
export const reels: Reel[] = [
  {
    id: "constitution-1",
    title: "Constitution Day",
    place: "Kevadia, Gujarat",
    src: "/media/reels/_flat/constitution-1.mp4",
    poster: "/media/bundle-08.jpg",
  },
  {
    id: "constitution-2",
    title: "Monument in light",
    place: "Kevadia, Gujarat",
    src: "/media/reels/_flat/constitution-2.mp4",
    poster: "/media/bundle-00.jpg",
  },
  {
    id: "gateway-g20",
    title: "Gateway of India",
    place: "Mumbai · G20",
    src: "/media/reels/_flat/constitution-1.mp4",
    poster: "/media/bundle-03.jpg",
  },
  {
    id: "rajwada-night",
    title: "Palace after dark",
    place: "Indore · Rajwada",
    src: "/media/reels/_flat/constitution-2.mp4",
    poster: "/media/bundle-12.jpg",
  },
];
