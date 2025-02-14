import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  sibervatan,
  carrent,
  jobit,
  tripguide,
  threejs,
  turkcell,
  serim,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
  { name: "figma", icon: figma },
  { name: "docker", icon: docker },
];

const experiences = [
  {
    title: "Team Captain / Cyber Security Researcher",
    company_name: "SiberVatan",
    icon: sibervatan,
    iconBg: "#2C3E50",
    date: "March 2020 - Present",
    points: [
      "Received cybersecurity training from organizations such as Cyrops and BGTEK.",
      "Completed blockchain-focused training as part of a blockchain research team.",
      "Gained hands-on experience in security protocols, threat analysis, and decentralized technologies.",
      "Developed a strong understanding of blockchain security and Web3 infrastructure."
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Turkcell Technology",
    icon: turkcell,
    iconBg: "#1D4ED8",
    date: "July 2024 - September 2024",
    points: [
      "Worked as a full stack developer within the software division of the analysis team.",
      "Developed and maintained applications using Java and React.js.",
      "Gained extensive experience in both frontend and backend development.",
      "Collaborated with a team to deliver efficient and scalable software solutions."
    ],
  },
  {
    title: "Intern",
    company_name: "Serim Software Solutions Ltd.",
    icon: serim,
    iconBg: "#4B5563",
    date: "August 2023 - September 2023",
    points: [
      "Worked within the Smart City Solutions and Web & Mobile Software Technologies department.",
      "Focused on backend development using C#, ASP.NET MVC, and SQL.",
      "Contributed to projects related to Smart City Solutions and Web & Mobile Software Technologies.",
      "Enhanced coding and problem-solving skills through hands-on experience in real-world applications."
    ],
  }
];

export { services, technologies, experiences };
