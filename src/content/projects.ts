export type ProjectCategory =
  | "son-et-lumiere"
  | "laser-water"
  | "museums"
  | "events"
  | "facade";

export type Project = {
  slug: string;
  title: string;
  location: string;
  state: string;
  category: ProjectCategory;
  role: "Turnkey" | "Content" | "Execution";
  format: string;
  launched?: string;
  featured?: boolean;
  priority?: boolean;
  summary: string;
  story: { title: string; body: string }[];
  result?: string;
  awards?: string[];
  stats?: { label: string; value: string }[];
  media?: { poster?: string; video?: string };
};

export const categoryLabels: Record<ProjectCategory, string> = {
  "son-et-lumiere": "Son-et-lumière",
  "laser-water": "Water & laser",
  museums: "Museums",
  events: "Events",
  facade: "Façade",
};

export const projects: Project[] = [
  {
    slug: "maheshwar-ghat",
    title: "Maheshwar Ghat",
    location: "Maheshwar",
    state: "Madhya Pradesh",
    category: "son-et-lumiere",
    role: "Turnkey",
    format: "2D/3D architectural projection mapping, sound & light",
    featured: true,
    priority: true,
    summary:
      "A 3D projection-mapped sound and light show on the banks of the sacred Narmada — delivered end to end by Magical Theatre.",
    story: [
      {
        title: "The place",
        body: "Maheshwar's ghats on the Narmada are among Madhya Pradesh's most iconic riverfronts. The fort façade became our screen, the river our auditorium.",
      },
      {
        title: "The narrative",
        body: "A rich narrative weaving together the city's mythological legends, historical legacy and present-day significance, scored with original music and immersive sound design.",
      },
      {
        title: "The build",
        body: "A complete turnkey solution: on-site installation and system integration through to content creation — every element executed by our own team.",
      },
      {
        title: "The result",
        body: "An unforgettable experience by the sacred river, and India's Best Projection Mapping Show at SIIA 2025.",
      },
    ],
    result: "SIIA 2025 — Best Projection Mapping Show",
    awards: ["SIIA 2025 Best Projection Mapping Show"],
  },
  {
    slug: "rajwada-palace",
    title: "Rajwada Palace",
    location: "Indore",
    state: "Madhya Pradesh",
    category: "son-et-lumiere",
    role: "Turnkey",
    format: "Façade projection mapping, sound & light",
    featured: true,
    priority: true,
    launched: "2023",
    summary:
      "On the stunning façade of Rajwada Palace, Magical Theatre created a projection map celebrating the Holkar dynasty, history, culture and advancement of Indore.",
    story: [
      {
        title: "The place",
        body: "Rajwada Palace holds remnants of the Holkar dynasty at the centre of Indore's civic memory — a façade made for storytelling in light. Maratha arches, courtyards and the city's night traffic meet at one monumental elevation that already feels like a stage.",
      },
      {
        title: "The narrative",
        body: "The show traces Holkar lineage, civic pride and Indore's living culture — myth and memory woven so residents and visitors recognise their own city in the light. Music, voice and mapped colour move together across cornice and courtyard.",
      },
      {
        title: "The show",
        body: "The programme debuted on Pravasi Diwas in 2023, bringing Indore's layered past into a night-time civic spectacle. Magical Theatre owned content, mapping and the emotional arc from first cue to final blackout.",
      },
      {
        title: "The result",
        body: "Celebrated for performance, execution and teamwork — a palace that no longer only stands by day, but speaks after dark. SIIA recognition followed the city's response.",
      },
    ],
    result: "Debut on Pravasi Diwas 2023; celebrated for performance, execution and teamwork.",
    awards: ["SIIA recognition"],
  },
  {
    slug: "travancore-house",
    title: "Travancore House",
    location: "Kerala",
    state: "Kerala",
    category: "son-et-lumiere",
    role: "Turnkey",
    format: "Son-et-lumière",
    featured: true,
    priority: true,
    summary:
      "From backwaters to cultural festivals, every facet of Kerala's identity was woven into a Sound and Light Show at Travancore House.",
    story: [
      {
        title: "The canvas",
        body: "The imagination of Magical Theatre turned Travancore House into a canvas for artistic innovation — serene landscapes, vibrant festivals and harmonious coexistence told in light and sound.",
      },
      {
        title: "Recognition",
        body: "Chief Minister Mr. Pinarayi Vijayan, in his inaugural address, lauded the production — a proud moment for the studio's storytelling craft.",
      },
    ],
    result: "Inaugural address praise from the Chief Minister of Kerala.",
  },
  {
    slug: "gateway-of-india-g20",
    title: "Gateway of India — G20",
    location: "Mumbai",
    state: "Maharashtra",
    category: "events",
    role: "Content",
    format: "3D projection mapping, sound & light",
    featured: true,
    priority: true,
    launched: "2023",
    summary:
      "Content partners for the 3D Projection Mapping Sound & Light Show at the Gateway of India during G20 2023.",
    story: [
      {
        title: "The stage",
        body: "One of India's most iconic monuments became a vibrant canvas highlighting the G20 vision and global collaboration.",
      },
      {
        title: "Our role",
        body: "Visual storytelling and narrative content through immersive projection mapping, synchronised lighting and sound design.",
      },
    ],
    result: "Landmark diplomatic-cultural activation on Mumbai's waterfront.",
  },
  {
    slug: "ram-mandir-ayodhya",
    title: "Ram Mandir",
    location: "Ayodhya",
    state: "Uttar Pradesh",
    category: "son-et-lumiere",
    role: "Content",
    format: "Sound & light show content",
    featured: true,
    priority: true,
    summary:
      "Creative content partners for the Sound & Light Show at the Ram Mandir — bringing the sacred story of Lord Ram and the Ramayana to life.",
    story: [
      {
        title: "The narrative",
        body: "Our team developed show content to express the cultural legacy of the Ramayana through a compelling visual narrative at one of India's most significant sacred sites.",
      },
    ],
  },
  {
    slug: "mahakumbh-prayagraj",
    title: "Mahakumbh Laser Water Show",
    location: "Prayagraj",
    state: "Uttar Pradesh",
    category: "laser-water",
    role: "Content",
    format: "Water & laser spectacle",
    featured: true,
    priority: true,
    summary:
      "A spectacular water and laser show at Kali Ghat, Boat Club, Prayagraj — bringing the grandeur of Mahakumbh and the city's heritage to life.",
    story: [
      {
        title: "The spectacle",
        body: "Mesmerising visuals, synchronised laser lights and immersive content blend storytelling, technology and artistic brilliance into a landmark riverfront attraction.",
      },
    ],
    result: "Running successfully as a spiritual and historical civic spectacle.",
  },
  {
    slug: "jhansi-fort",
    title: "Jhansi Fort",
    location: "Jhansi",
    state: "Uttar Pradesh",
    category: "son-et-lumiere",
    role: "Turnkey",
    format: "270° 3D projection mapping",
    priority: true,
    summary:
      "Huge façade of Jhansi Fort mapped in ~270° projection telling the story of Rani Lakshmi Bai — patriotism, sacrifice and Swaraj.",
    story: [
      {
        title: "The warrior",
        body: "Depicting a woman warrior who martyred herself to attain Swaraj and liberate Indians from British rule — Rani Lakshmi Bai as a glorious example of national pride.",
      },
      {
        title: "The impact",
        body: "Audience footfall grew dramatically as the fort façade became a sweeping cinematic canvas of history.",
      },
    ],
    stats: [{ label: "Coverage", value: "~270°" }],
  },
  {
    slug: "valmiki-teerath",
    title: "Valmiki Teerath",
    location: "Valmiki Teerath",
    state: "India",
    category: "facade",
    role: "Turnkey",
    format: "360° façade projection",
    priority: true,
    summary:
      "Façade projection with 360° coverage and around 20 projectors for Valmiki Jayanti — among India's most spectacular wide-coverage projections.",
    story: [
      {
        title: "The hermitage",
        body: "An ancient tank and temples drew devotees; Magical Theatre uplifted the hermitage with out-of-the-world designs across a full 360° field.",
      },
    ],
    stats: [
      { label: "Coverage", value: "360°" },
      { label: "Projectors", value: "~20" },
    ],
  },
  {
    slug: "sukhteerth-moradabad",
    title: "Sukhteerth",
    location: "Moradabad",
    state: "Uttar Pradesh",
    category: "son-et-lumiere",
    role: "Content",
    format: "3D projection mapping, sound & light, lasers",
    summary:
      "A spectacular 3D Projection Mapping Sound & Light Show illuminating the sacred Sukhteerth — transforming heritage into a visual masterpiece.",
    story: [
      {
        title: "The experience",
        body: "Designed to captivate with mesmerising visuals and synchronised laser lights, developed as content partner to educate and inspire visitors.",
      },
    ],
  },
  {
    slug: "jatkeshwar-temple",
    title: "Jatkeshwar Temple",
    location: "Jatkeshwar",
    state: "India",
    category: "son-et-lumiere",
    role: "Content",
    format: "Temple projection mapping",
    summary:
      "A breathtaking tribute to the temple's rich legacy and spiritual essence — history, carvings and devotion brought to life.",
    story: [
      {
        title: "The tribute",
        body: "In-depth research, expert storytelling and cutting-edge technology crafted a soul-stirring experience praised by clients, dignitaries and industry peers.",
      },
    ],
  },
  {
    slug: "shamlaji-temple",
    title: "Shamlaji Temple",
    location: "Shamlaji",
    state: "Gujarat",
    category: "son-et-lumiere",
    role: "Content",
    format: "Temple projection mapping",
    summary:
      "Projection mapping show honouring the temple's legacy and the spiritual essence of Bharatvarsh.",
    story: [
      {
        title: "The craft",
        body: "Visually stunning and historically careful storytelling through light and sound on sacred architecture.",
      },
    ],
  },
  {
    slug: "bahu-fort",
    title: "Bahu Fort",
    location: "Jammu",
    state: "Jammu & Kashmir",
    category: "son-et-lumiere",
    role: "Turnkey",
    format: "Façade sound & light",
    summary:
      "Designed to celebrate Jammu city, the Tawi river, temple spirituality and rich regional culture — with Bahu Fort as the hero of the show.",
    story: [
      {
        title: "The fort",
        body: "Our vision mapped onto the fort façade created a mesmerising night-time experience for the city.",
      },
    ],
  },
  {
    slug: "kashi-vishwanath-ghat",
    title: "Kashi Vishwanath Ghat",
    location: "Varanasi",
    state: "Uttar Pradesh",
    category: "son-et-lumiere",
    role: "Content",
    format: "3D projection mapping",
    featured: true,
    summary:
      "Illuminating the sacred banks of the Ganga with mythology, heritage and devotion — Kashi, the eternal city.",
    story: [
      {
        title: "The eternal city",
        body: "Immersive display transformed the historic façade into a vibrant canvas of spiritual and cultural essence.",
      },
    ],
  },
  {
    slug: "lalita-ghat",
    title: "Lalita Ghat",
    location: "Varanasi",
    state: "Uttar Pradesh",
    category: "son-et-lumiere",
    role: "Content",
    format: "3D projection mapping",
    summary:
      "Captivating 3D projection mapping on the Ganga at Lalita Ghat — a stunning visual narrative as content partner.",
    story: [
      {
        title: "The river stage",
        body: "Sacred banks illuminated with narrative light for pilgrims and visitors alike.",
      },
    ],
  },
  {
    slug: "dakshineswar-kali-temple",
    title: "Dakshineswar Kali Temple",
    location: "Kolkata",
    state: "West Bengal",
    category: "son-et-lumiere",
    role: "Content",
    format: "3D projection mapping sound & light",
    summary:
      "Immersive sound and light on the iconic façade showcasing the temple's spiritual legacy and architecture.",
    story: [
      {
        title: "The temple",
        body: "Advanced 3D projection mapping technology honours one of India's most revered Kali temples.",
      },
    ],
  },
  {
    slug: "bareilly-district-jail",
    title: "Bareilly District Jail",
    location: "Bareilly",
    state: "Uttar Pradesh",
    category: "events",
    role: "Content",
    format: "Multimedia projection show",
    summary:
      "Unfolding untold stories witnessed by Bareilly Jail — from Mahabharata and spiritual legends to the British Raj era.",
    story: [
      {
        title: "Pages of history",
        body: "As content partner, we used audiovisual technologies to tour visitors through layered histories beyond Bareilly's crafts and trade fame.",
      },
    ],
  },
  {
    slug: "chandrashekhar-azad-park",
    title: "Chandrashekhar Azad Park",
    location: "Prayagraj",
    state: "Uttar Pradesh",
    category: "laser-water",
    role: "Turnkey",
    format: "Water screen projection mapping",
    launched: "2023",
    summary:
      "Water screen projection mapping capturing Indian patriotism through the history of Prayagraj and its revolutionaries.",
    story: [
      {
        title: "The park",
        body: "History of the city, park elements, great revolutionaries and illustrious events combined into a 2023 New Year masterpiece.",
      },
    ],
  },
  {
    slug: "deepotsav-ayodhya",
    title: "Deepotsav Ayodhya",
    location: "Ayodhya",
    state: "Uttar Pradesh",
    category: "laser-water",
    role: "Content",
    format: "Aqua screen projection, intelligent lighting, surround sound",
    summary:
      "Multimedia water projection for Deepotsav on the banks of the Sarayu — mythological tale alive beside a Guinness-scale diya celebration.",
    story: [
      {
        title: "The festival",
        body: "Aqua screen projection, intelligent lighting and 5.1 theatrical surround sound complemented the emotion of devotees and the light of lakhs of diyas.",
      },
    ],
  },
  {
    slug: "brahmapur-ramalingeshwar",
    title: "Ramalingeshwar Park",
    location: "Brahmapur",
    state: "Odisha",
    category: "laser-water",
    role: "Turnkey",
    format: "Sculpture mapping & musical fountains",
    summary:
      "Sculpture mapping on the mesmerising Shiva statue with musical fountains — Silk City storytelling in light and water.",
    story: [
      {
        title: "The sculpture",
        body: "The concept of sculpture mapping was captivating; musical fountains with beautiful lighting completed the experience.",
      },
    ],
  },
  {
    slug: "aguada-fort",
    title: "Aguada Fort",
    location: "Goa",
    state: "Goa",
    category: "events",
    role: "Execution",
    format: "Projection mapping, lighting, sound",
    summary:
      "Sound & light execution during the Light House Festival — transforming the lighthouse into a canvas of Goa's maritime heritage.",
    story: [
      {
        title: "Maritime memory",
        body: "Projection mapping, synchronised lighting, sound design and narrative visuals brought the lighthouse alive.",
      },
    ],
  },
  {
    slug: "waves-mumbai",
    title: "WAVES Summit — Mumbai Landmarks",
    location: "Mumbai",
    state: "Maharashtra",
    category: "events",
    role: "Content",
    format: "Landmark projection content",
    featured: true,
    summary:
      "Dynamic content for the World Audio Visual & Entertainment Summit on the Gateway of India and the Air India Building.",
    story: [
      {
        title: "Two icons",
        body: "Content captured innovation and collaboration at the heart of the summit, blending artistic creativity with cutting-edge visual design for dignitaries and audiences alike.",
      },
    ],
  },
  {
    slug: "meera-bai",
    title: "Meera Bai Light Show",
    location: "India",
    state: "India",
    category: "son-et-lumiere",
    role: "Turnkey",
    format: "Sound & light with classical music",
    summary:
      "Portraying Saint Meera Bai's devotion to Lord Krishna — classical music woven into a soulful traditional light show.",
    story: [
      {
        title: "Bhakti on stage",
        body: "A landmark of the Bhakti Movement period told through light, classical score and narrative devotion.",
      },
    ],
  },
  {
    slug: "atal-museum",
    title: "Atal Bihari Vajpayee Museum",
    location: "Lucknow",
    state: "Uttar Pradesh",
    category: "museums",
    role: "Turnkey",
    format: "Museum design & experience",
    launched: "2025",
    summary:
      "Museum conceptualised and delivered on an exceptionally challenging three-month timeline under civic leadership — honouring Bharat Ratna Shri Atal Bihari Vajpayee.",
    story: [
      {
        title: "The mandate",
        body: "Completed successfully through coordinated excellence with Lucknow Development Authority and contributing organisations.",
      },
    ],
  },
  {
    slug: "waste-management-museum",
    title: "Waste Management Museum",
    location: "India",
    state: "India",
    category: "museums",
    role: "Turnkey",
    format: "Interactive interpretive museum",
    summary:
      "Making waste visible not just as a problem but as potential — interactive, engaging design for segregation, recycling and sustainable practice.",
    story: [
      {
        title: "The brief",
        body: "Translate environmental responsibility into a space that inspires action for the next generation.",
      },
    ],
  },
  {
    slug: "parekh-legacy-center",
    title: "J.T. Parekh Legacy Center",
    location: "Mumbai",
    state: "Maharashtra",
    category: "museums",
    role: "Turnkey",
    format: "Immersive audio-visual museum",
    summary:
      "Tribute to Jasmukhlal T. Parekh — transforming a legacy into a living experience where history, storytelling and technology converge.",
    story: [
      {
        title: "Living legacy",
        body: "An immersive museum in Mumbai that turns industrial vision into experiential narrative.",
      },
    ],
  },
  {
    slug: "tulsi-upvan-kanpur",
    title: "Tulsi Upvan Indoor Experience",
    location: "Kanpur",
    state: "Uttar Pradesh",
    category: "museums",
    role: "Turnkey",
    format: "Indoor interpretive experience",
    summary:
      "Immersive indoor space bringing together nature, culture and storytelling within a controlled environment at Tulsi Upvan.",
    story: [
      {
        title: "Inside the park",
        body: "An interpretive centre designed for atmosphere, learning and narrative immersion.",
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}

export function getProjectsByCategory(category: ProjectCategory | "all") {
  if (category === "all") return projects;
  return projects.filter((p) => p.category === category);
}

/** Ensure every case study has a full story arc when source copy is thin. */
export function storyChapters(project: Project): { title: string; body: string }[] {
  const chapters = [...project.story];
  const titles = new Set(chapters.map((c) => c.title.toLowerCase()));

  const ensure = (title: string, body: string) => {
    if (titles.has(title.toLowerCase())) return;
    chapters.push({ title, body });
    titles.add(title.toLowerCase());
  };

  if (chapters.length < 3) {
    ensure(
      "The approach",
      `For ${project.title} in ${project.location}, ${project.state}, Magical Theatre worked as ${project.role.toLowerCase()} partner — ${project.format.toLowerCase()}. ${project.summary}`,
    );
    ensure(
      "Craft & integration",
      `Survey, narrative and technical design moved as one process. 2D and 3D content was locked to the architecture; sound and light cues were timed for the night crowd and the site's acoustics — so the façade feels authored, not decorated.`,
    );
  }

  if (chapters.length < 4) {
    ensure(
      "What remains",
      project.result
        ? `${project.result} The work continues as a civic memory — a reason people return after dark.`
        : `Visitors leave with the place rewritten in light. ${project.title} becomes a chapter people remember — and a reference for the next commission.`,
    );
  }

  return chapters;
}
