/**
 * Members Directory Data Store
 *
 * NOTE: The records below serve strictly as temporary placeholder / seed data
 * structured to match the Figma design layout counts (3 / 11 / 9 / 10).
 * They do NOT represent final production member records.
 *
 * When real member records are finalized, update this file with genuine names,
 * roles, skills, profile photos (placed in /public/members/), and profile links.
 * All UI components consume this data dynamically so no component edits are needed.
 */

export interface Member {
  id: string;
  name: string;
  role: string;
  photo: string | null; // Path relative to public root, e.g. "/members/name.jpg", or null for placeholder
  photoPosition?: string; // Optional CSS object-position for head/face alignment
  skills: string[];
  github?: string;
  linkedin?: string;
}

export interface MemberGroup {
  id: string; // URL-safe identifier for aria-controls and panel tracking
  index: string; // Display index, e.g. "01"
  title: string; // Group display title
  members: Member[];
}

export const memberGroups: MemberGroup[] = [
  {
    id: "senior-associates",
    index: "01",
    title: "Senior Associate Members",
    members: [
      {
        id: "senior-1",
        name: "Gautam Raj",
        role: "Senior Associate Member",
        photo: "/Members/gautam-raj.png",
        photoPosition: "center 15%",
        skills: ["C++", "Python", "React", "Git", "System Design"],
        github: "https://github.com",
        linkedin: "https://linkedin.com",
      },
      {
        id: "senior-2",
        name: "Sohan Banerjee",
        role: "Senior Associate Member",
        photo: "/Members/sohan-banerjee.png",
        skills: ["TypeScript", "Next.js", "Node.js", "Docker"],
        github: "https://github.com",
        linkedin: "https://linkedin.com",
      },
      {
        id: "senior-3",
        name: "Paushali Karmakar",
        role: "Senior Associate Member",
        photo: "/Members/paushali-karmakar.jpeg",
        skills: ["Go", "Kubernetes", "Cloud Computing", "Linux"],
        github: "https://github.com",
        linkedin: "https://linkedin.com",
      },
      {
        id: "senior-4",
        name: "Amol Kumar",
        role: "Senior Associate Member",
        photo: null,
        skills: ["C++", "Python", "React", "Git", "System Design"],
        github: "https://github.com",
        linkedin: "https://linkedin.com",
      },
    ],
  },
  {
    id: "associates",
    index: "02",
    title: "Associate Members",
    members: [
      {
        id: "associate-1",
        name: "Kelvin Linus",
        role: "Associate Member",
        photo: "/Members/kelvin-linus.png",
        skills: ["C++", "Python", "React", "Git"],
        github: "https://github.com",
        linkedin: "https://linkedin.com",
      },
      {
        id: "associate-2",
        name: "Ayush Sharma",
        role: "Associate Member",
        photo: "/Members/ayush-sharma.jpg",
        skills: ["C++", "Python", "React", "Git"],
        github: "https://github.com",
        linkedin: "https://linkedin.com",
      },
      {
        id: "associate-3",
        name: "Payal Vyas",
        role: "Associate Member",
        photo: "/Members/payal-vyas.jpg",
        skills: ["C++", "Python", "React", "Git"],
        github: "https://github.com",
        linkedin: "https://linkedin.com",
      },
      {
        id: "associate-4",
        name: "Debashish Sinha",
        role: "Associate Member",
        photo: "/Members/debashish-sinha.jpg",
        skills: ["C++", "Python", "React", "Git"],
        github: "https://github.com",
        linkedin: "https://linkedin.com",
      },
      {
        id: "associate-5",
        name: "Banashree Barman",
        role: "Associate Member",
        photo: "/Members/banashree-barman.jpeg",
        photoPosition: "center top",
        skills: ["C++", "Python", "React", "Git"],
        github: "https://github.com",
        linkedin: "https://linkedin.com",
      },
      {
        id: "associate-6",
        name: "Avigyan Guha",
        role: "Associate Member",
        photo: "/Members/avigyan-guha.jpg",
        photoPosition: "center top",
        skills: ["C++", "Python", "React", "Git"],
        github: "https://github.com",
        linkedin: "https://linkedin.com",
      },
      {
        id: "associate-7",
        name: "Sandip Basak",
        role: "Associate Member",
        photo: "/Members/sandip-basak.jpg",
        skills: ["C++", "Python", "React", "Git"],
        github: "https://github.com",
        linkedin: "https://linkedin.com",
      },
      {
        id: "associate-8",
        name: "Shreyashi Dutta",
        role: "Associate Member",
        photo: "/Members/shreyashi-dutta.jpg",
        skills: ["C++", "Python", "React", "Git"],
        github: "https://github.com",
        linkedin: "https://linkedin.com",
      },
      {
        id: "associate-9",
        name: "Surajit Roy",
        role: "Associate Member",
        photo: "/Members/surajit-roy.jpg",
        photoPosition: "center 15%",
        skills: ["C++", "Python", "React", "Git"],
        github: "https://github.com",
        linkedin: "https://linkedin.com",
      },
      {
        id: "associate-10",
        name: "Payel Nunia",
        role: "Associate Member",
        photo: "/Members/payel-nunia.jpg",
        photoPosition: "center 15%",
        skills: ["C++", "Python", "React", "Git"],
        github: "https://github.com",
        linkedin: "https://linkedin.com",
      },
      {
        id: "associate-11",
        name: "Md. Shahbaz Hashmi Ansari",
        role: "Associate Member",
        photo: "/Members/md-shahbaz-hashmi-ansari.png",
        photoPosition: "center 15%",
        skills: ["C++", "Python", "React", "Git"],
        github: "https://github.com",
        linkedin: "https://linkedin.com",
      },
    ],
  },
  {
    id: "junior-associates",
    index: "03",
    title: "Junior Associate Members",
    members: [
      {
        id: "junior-1",
        name: "Shubham Jha",
        role: "Junior Associate Member",
        photo: "/Members/shubham-jha.jpeg",
        photoPosition: "center 15%",
        skills: ["Python", "JavaScript", "HTML/CSS", "Git"],
        github: "https://github.com",
        linkedin: "https://linkedin.com",
      },
      {
        id: "junior-2",
        name: "Aditi Das",
        role: "Junior Associate Member",
        photo: "/Members/aditi-das.jpg",
        photoPosition: "center 15%",
        skills: ["Python", "JavaScript", "HTML/CSS", "Git"],
        github: "https://github.com",
        linkedin: "https://linkedin.com",
      },
      {
        id: "junior-3",
        name: "Piyasi Das",
        role: "Junior Associate Member",
        photo: "/Members/piyasi-das.jpg",
        photoPosition: "center 20%",
        skills: ["Python", "JavaScript", "HTML/CSS", "Git"],
        github: "https://github.com",
        linkedin: "https://linkedin.com",
      },
      {
        id: "junior-4",
        name: "Shambhavi Singh",
        role: "Junior Associate Member",
        photo: "/Members/shambhavi-singh.jpg",
        photoPosition: "center 15%",
        skills: ["Python", "JavaScript", "HTML/CSS", "Git"],
        github: "https://github.com",
        linkedin: "https://linkedin.com",
      },
      {
        id: "junior-5",
        name: "Debasmita Modak",
        role: "Junior Associate Member",
        photo: "/Members/debasmita-modak.jpeg",
        photoPosition: "center 35%",
        skills: ["Python", "JavaScript", "HTML/CSS", "Git"],
        github: "https://github.com",
        linkedin: "https://linkedin.com",
      },
      {
        id: "junior-6",
        name: "Devbart Sharma",
        role: "Junior Associate Member",
        photo: "/Members/devbart-sharma.jpeg",
        photoPosition: "center 15%",
        skills: ["Python", "JavaScript", "HTML/CSS", "Git"],
        github: "https://github.com",
        linkedin: "https://linkedin.com",
      },
      {
        id: "junior-7",
        name: "Mohana Sarkar",
        role: "Junior Associate Member",
        photo: "/Members/mohana-sarkar.jpg",
        skills: ["Python", "JavaScript", "HTML/CSS", "Git"],
        github: "https://github.com",
        linkedin: "https://linkedin.com",
      },
      {
        id: "junior-8",
        name: "Banti Agarwal",
        role: "Junior Associate Member",
        photo: null,
        skills: ["Python", "JavaScript", "HTML/CSS", "Git"],
        github: "https://github.com",
        linkedin: "https://linkedin.com",
      },
      {
        id: "junior-9",
        name: "Ravishankar Jha",
        role: "Junior Associate Member",
        photo: "/Members/ravishankar-jha.jpg",
        photoPosition: "center 15%",
        skills: ["Python", "JavaScript", "HTML/CSS", "Git"],
        github: "https://github.com",
        linkedin: "https://linkedin.com",
      },
    ],
  },
  {
    id: "alumni-mentors",
    index: "04",
    title: "Alumni Mentors",
    members: Array.from({ length: 10 }, (_, i) => ({
      id: `mentor-${i + 1}`,
      name: `Alumni Mentor ${String(i + 1).padStart(2, "0")}`,
      role: "Alumni Mentor",
      photo: null,
      skills: ["Software Architecture", "Distributed Systems", "Mentorship"],
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    })),
  },
];
