import { showVideos } from "@/content/videos";

export type Reel = {
  id: string;
  title: string;
  place: string;
  src: string;
  poster: string;
};

/** Showcase reels — tiles preview on hover and open full size in a modal. */
export const reels: Reel[] = showVideos;
