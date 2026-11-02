export type Reel = {
  id: string;
  title: string;
  place: string;
  src: string;
  poster: string;
};

/**
 * Showcase reels — small sample clips only (full Drive archive can expand later).
 * Source folder: Magical Theatre Project Videos (Google Drive).
 */
export const reels: Reel[] = [
  {
    id: "constitution-1",
    title: "Constitution Day Celebration",
    place: "Kevadia, Gujarat · 2020",
    src: "/media/reels/_flat/constitution-1.mp4",
    poster: "/media/bundle-08.jpg",
  },
  {
    id: "constitution-2",
    title: "Light on the monument",
    place: "Kevadia, Gujarat · 2020",
    src: "/media/reels/_flat/constitution-2.mp4",
    poster: "/media/bundle-00.jpg",
  },
];
