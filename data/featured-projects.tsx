import socialbookImg from "../public/socialbook.png";
import protonImg from "../public/proton.png";
import ipmsImg from "../public/ipms.png";
import netWardenImg from "../public/netWarden.png";

const featuredProjects = [
  {
    name: "NetWarden",
    desc: "an open source Network management tool for device monitoring and control, similar to netcut.",
    tools: ["C#", ".Net", "libpcap"],
    githubLink: "https://github.com/amdzy/NetWarden",
    liveLink: "https://github.com/amdzy/NetWarden",
    image: netWardenImg,
  },
  {
    name: "IPMS",
    desc: "an open source pos management system for gyms, built with a modular architecture",
    tools: ["TS", "NestJS", "PostgreSQL", "Prisma"],
    githubLink: "https://github.com/amdzy/inventory-pos-management-system",
    liveLink: "https://github.com/amdzy/inventory-pos-management-system",
    image: ipmsImg,
  },
  {
    name: "Proton-For-Reddit",
    desc: "An android and ios app for reddit built using React native, Written in TS",
    tools: ["React Native", "TypeScript"],
    githubLink: "https://github.com/amdzy/proton-for-reddit",
    liveLink: "https://github.com/amdzy/proton-for-reddit",
    image: protonImg,
  },
  {
    name: "Socialbook",
    desc: "A Full stack social media web application written in TS, built in React for Front-end and nestJS for Back-end and postgresql as the DB",
    tools: ["React", "MUI", "NestJS", "PostgreSQL"],
    githubLink: "https://github.com/amdzy/socialbook",
    liveLink: "https://social-book-app.netlify.app",
    image: socialbookImg,
  },
];

export default featuredProjects;
