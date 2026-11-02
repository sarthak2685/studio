export type Award = {
  id: string;
  title: string;
  place: string;
  year: string;
  result: string;
  detail: string;
  projectSlug?: string;
  image: string;
  images: string[];
};

export const awards: Award[] = [
  {
    id: "xr-florence-2025",
    title: "XR Festival",
    place: "Florence, Italy",
    year: "2025",
    result: "Third Place",
    detail:
      "Magical Theatre's creation selected and celebrated on an international XR stage — craft recognised beyond India among immersive peers.",
    image: "/media/bundle-08.jpg",
    images: ["/media/bundle-08.jpg", "/media/bundle-03.jpg", "/media/bundle-15.jpg"],
  },
  {
    id: "light-vision-chemnitz",
    title: "The Light Our Vision Festival",
    place: "Chemnitz, Germany",
    year: "International",
    result: "Selected & celebrated",
    detail:
      "Recognised among global light-art peers for storytelling through projection and immersion on a European festival stage.",
    image: "/media/bundle-03.jpg",
    images: ["/media/bundle-03.jpg", "/media/bundle-00.jpg", "/media/bundle-18.jpg"],
  },
  {
    id: "yifeng-2024",
    title: "Yifeng Light Art Competition",
    place: "China",
    year: "2024",
    result: "Silver Award",
    detail:
      "Silver honour for light-art excellence on an international platform — Magical Theatre among creators from 27 nations.",
    image: "/media/bundle-00.jpg",
    images: ["/media/bundle-00.jpg", "/media/bundle-08.jpg", "/media/bundle-14.jpg"],
  },
  {
    id: "siia-maheshwar-2025",
    title: "SIIA Best Projection Mapping Show",
    place: "India",
    year: "2025",
    result: "Best Show",
    detail:
      "Maheshwar Ghat recognised as India's Best Projection Mapping Show — myth and memory on the Narmada façade, delivered end to end.",
    projectSlug: "maheshwar-ghat",
    image: "/media/bundle-00.jpg",
    images: ["/media/bundle-00.jpg", "/media/bundle-05.jpg", "/media/bundle-12.jpg"],
  },
  {
    id: "siia-multiple",
    title: "SIIA Best Projection Mapping Show",
    place: "India",
    year: "Multiple years",
    result: "4× Best Show",
    detail:
      "Repeated national recognition for landmark projection mapping productions across heritage sites — consistency as craft, not coincidence.",
    image: "/media/bundle-12.jpg",
    images: ["/media/bundle-12.jpg", "/media/bundle-06.jpg", "/media/bundle-10.jpg"],
  },
];
