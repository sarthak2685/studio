export type TeamMember = {
  id: string;
  name: string;
  role: string;
  experience?: string;
  photo: string;
  featured?: boolean;
  bio?: string;
  vision?: string;
};

/**
 * Photos extracted from MT Profile team page.
 * Aman named in PDF. Arunimaa / Faraz / Rrahul matched to PDF roles via Magical Theatre public leadership.
 * Two roles still use studio titles where PDF name glyphs were encoded and unreadable.
 */
export const team: TeamMember[] = [
  {
    id: "aman-arora",
    name: "Aman Arora",
    role: "Founder & Creative Director",
    experience: "15+ Years of Experience",
    photo: "/media/team/aman-arora.jpg",
    featured: true,
    bio: "Creative direction across projection mapping, son-et-lumière and immersive museums — building Magical Theatre as India's end-to-end storytelling studio.",
    vision:
      "Aman's vision is simple and stubborn: every monument already holds a story — Magical Theatre exists to let that story speak in light. He built the studio so heritage, tourism and culture never have to assemble a dozen vendors. One team surveys the façade, writes the narrative, animates in 2D and 3D, then installs the show to international standards. Quality is habit. Emotion is the brief. The night is the stage.",
  },

  {
    id: "project-analyst",
    name: "Project Analyst",
    role: "Project Analyst",
    experience: "15+ Years of Experience",
    photo: "/media/team/member-02.jpg",
  },
  {
    id: "executive-producer",
    name: "Executive Producer",
    role: "Executive Producer & Content Writer",
    experience: "15+ Years of Experience",
    photo: "/media/team/member-03.jpg",
  },
  {
    id: "arunimaa-shanker-deb",
    name: "Arunimaa Shanker Deb",
    role: "Content Head — Museums",
    experience: "15+ Years of Experience",
    photo: "/media/team/arunimaa-shanker-deb.jpg",
    bio: "Co-Creative Director & Digital Design Curator for museums — immersive exhibits and cultural storytelling.",
  },
  {
    id: "faraz-masood",
    name: "Faraz Masood",
    role: "Content Head — Son-et-Lumière",
    experience: "15+ Years of Experience",
    photo: "/media/team/member-04.jpg",
  },
  {
    id: "rrahul-bhardwaj",
    name: "Rrahul Bhardwaj",
    role: "Business Head",
    experience: "12+ Years of Experience",
    photo: "/media/team/member-05.jpg",
  },
];

export const teamIntro =
  "Producers, writers, animators and integrators who treat quality as habit — keeping pace with modern hardware and software so every façade gets the story it deserves.";
