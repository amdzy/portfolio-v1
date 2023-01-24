import socialbookImg from "../public/socialbook.png";
import fakestoreImg from "../public/fakestore.jpg";
import protonImg from "../public/proton.png";

const featuredProjects = [
  {
    name: "Proton-For-Reddit",
    desc: "An android and ios app for reddit built using React native, Written in TS",
    tools: ["React Native", "TypeScript"],
    githubLink: "https://github.com/Soul-Remix/proton-for-reddit",
    liveLink: "",
    image: protonImg,
  },
  {
    name: "Socialbook",
    desc: "A Full stack social media web application written in TS, built in React for Front-end and nestJS for Back-end and postgresql as the DB",
    tools: ["React", "MaterialUI", "NestJS", "PostgreSQL", "Heroku"],
    githubLink: "https://github.com/Soul-Remix/socialbook",
    liveLink: "https://social-book-app.netlify.app",
    image: socialbookImg,
  },
  {
    name: "Fake Store",
    desc: "A front-end application for an e-commerce shop, features Clean user interface with smooth animations and Responsive design, Ability to add and remove products from the shopping cart, Filter products by categories",
    tools: ["React", "React-Router", "React-query", "TailwindCSS"],
    githubLink: "https://github.com/Soul-Remix/react-shopping-cart",
    liveLink: "https://soul-remix.github.io/react-shopping-cart/",
    image: fakestoreImg,
  },
];

export default featuredProjects;
