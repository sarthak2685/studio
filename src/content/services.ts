export type Service = {
  id: string;
  title: string;
  short: string;
  description: string;
  detail: string;
  images: string[];
};

export const services: Service[] = [
  {
    id: "son-et-lumiere",
    title: "Son-et-lumière",
    short: "2D / 3D projection mapping on forts, palaces, ghats and temples.",
    description:
      "Architectural projection mapping and sound-and-light spectacles that turn heritage façades into living narratives — myth, memory and place told on their own walls.",
    detail:
      "From Maheshwar Ghat and Rajwada Palace to Travancore House — we survey every cornice, write the story, animate in 2D & 3D, then install the night so architecture becomes the screen.",
    images: [
      "/media/bundle-00.jpg",
      "/media/bundle-03.jpg",
      "/media/bundle-12.jpg",
      "/media/bundle-05.jpg",
    ],
  },
  {
    id: "laser-water",
    title: "Laser & water",
    short: "Water screens, musical fountains and synchronised lasers.",
    description:
      "Large-scale water screen projections, musical fountains and laser choreography for festivals, riverfronts and civic celebrations.",
    detail:
      "Mahakumbh-scale riverfronts, Deepotsav aqua screens and park spectacles — water, laser and sound locked to a single cue so the crowd feels the story rise from the night.",
    images: [
      "/media/bundle-09.jpg",
      "/media/bundle-08.jpg",
      "/media/bundle-14.jpg",
      "/media/bundle-16.jpg",
    ],
  },
  {
    id: "museums",
    title: "Museums",
    short: "Design, curation, content, interactives, dioramas and artworks.",
    description:
      "Immersive museums and experience centres where history, storytelling and technology converge.",
    detail:
      "Legacy centres, interpretive museums and indoor experiences — curated end to end so visitors walk a narrative, not a corridor of objects.",
    images: [
      "/media/bundle-01.jpg",
      "/media/bundle-20.jpg",
      "/media/bundle-22.png",
      "/media/bundle-24.jpg",
    ],
  },
  {
    id: "events",
    title: "Events",
    short: "Summits, expos and launches — from G20 to WAVES.",
    description:
      "High-profile content and integration for summits, cultural festivals and landmark activations on India's most iconic stages.",
    detail:
      "Gateway of India, national celebrations, summit landmarks — content and systems that hold for diplomats, cameras and a live crowd in the same breath.",
    images: [
      "/media/bundle-08.jpg",
      "/media/bundle-03.jpg",
      "/media/bundle-15.jpg",
      "/media/bundle-18.jpg",
    ],
  },
  {
    id: "facade-lighting",
    title: "Façade lighting",
    short: "Permanent and festive illumination for heritage façades.",
    description:
      "Permanent and festive façade illumination that respects architecture while creating memorable night-time identity.",
    detail:
      "Heritage-safe lighting language — festive peaks and permanent identity — so monuments keep their dignity by day and their presence after dark.",
    images: [
      "/media/bundle-12.jpg",
      "/media/bundle-00.jpg",
      "/media/bundle-06.jpg",
      "/media/bundle-10.jpg",
    ],
  },
];

/** Production journey — as presented in the Magical Theatre profile. */
export const methodSteps = [
  {
    step: "01",
    title: "Consult",
    body: "Site survey, audience and the story the place needs to tell. We walk the façade, measure the architecture and define the experience.",
  },
  {
    step: "02",
    title: "Conceptualise",
    body: "Research, script, music and visual treatment — signed off with you before a single frame is mapped.",
  },
  {
    step: "03",
    title: "Design & content",
    body: "2D and 3D animation locked to the architecture, with surround sound design built for the night and the crowd.",
  },
  {
    step: "04",
    title: "Integrate & install",
    body: "Projectors, lasers, servers and on-site integration to global quality standards — one studio, end to end.",
  },
] as const;
