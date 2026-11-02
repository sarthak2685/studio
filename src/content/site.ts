export const site = {
  name: "Magical Theatre",
  tagline: "Storytelling in light",
  headline: "We Are Storytellers",
  heroLine: "We turn monuments into living stories.",
  heroSupport:
    "Magical Theatre is an artist-led creative technology studio. We design, produce and install projection mapping, son-et-lumière, laser & water shows, immersive museums and façade lighting across India — end to end.",
  positioning:
    "We serve as a one-stop destination for storytelling and integration — consultation, conceptualisation, design and experiential installs for heritage, tourism, culture, museums, interpretation centres, broadcast, realty and corporates.",
  aboutLead:
    "We serve as a one-stop destination for storytelling and integration — consultation, conceptualisation, design and experiential installs for heritage, tourism, culture, museums, interpretation centres, broadcast, realty and corporates. From the first site survey to opening night, Magical Theatre owns the full chain: research and script, 2D & 3D content, sound design, projection systems and on-ground integration — so the monument stays, and the night changes.",
  aboutSupport:
    "Clients come to us when a place deserves more than décor lighting. We translate architecture into narrative, audiences into witnesses, and technology into emotion — across India and on stages that have already applauded the work abroad.",
  philosophy:
    "At our core, we are storytellers blending technology, creativity and emotion to craft narratives that resonate deeply with audiences. Whether projected onto heritage monuments, woven into immersive light and sound shows, or brought to life through digital content, every project is driven by a powerful story.",
  quality:
    "Quality is habit. We stay current with modern technical innovations and prescribe the right software and hardware for each creation. We explore new prospects in technology and try to bring something new into every project.",
  audiences:
    "Heritage · Tourism · Culture · Museums · Interpretation centres · Broadcast studios · Realty · Corporates",
  stats: [
    { value: "15+", label: "Years of storytelling in light" },
    { value: "40+", label: "Landmark shows, museums & events" },
    { value: "India", label: "Projects across states & UTs" },
    { value: "4×", label: "SIIA Best Projection Mapping Show" },
  ],
  contact: {
    email: "info@magicaltheatre.in",
    phone: "+91 84481 08755",
    phoneHref: "tel:+918448108755",
    whatsapp: "https://wa.me/918448108755",
    address: "Building No.1, Second Floor, Lane No.1, Westend Marg, Said-Ul-Ajaib, New Delhi 110030",
    addressShort: "Westend Marg, New Delhi 110030",
    instagram: "https://www.instagram.com/magicaltheatre.in",
    instagramHandle: "@magicaltheatre.in",
  },
  cta: {
    primary: "Plan your show",
    secondary: "See our work",
  },
  nav: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/work", label: "Work" },
    { href: "/services", label: "Services" },
    { href: "/awards", label: "Awards" },
    { href: "/contact", label: "Contact" },
  ],
} as const;

export type NavItem = (typeof site.nav)[number];
