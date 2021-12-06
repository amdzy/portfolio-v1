import socialbookImg from '../public/socialbook.png';
import fakestoreImg from '../public/fakestore.jpg';
import blogImg from '../public/blog.png';

const featuredProjects = [
  {
    name: 'Socialbook',
    desc: 'A Full stack social media web application written in TS, built in React for Front-end and nestJS for Back-end and postgresql as the DB',
    tools: ['React', 'MaterialUI', 'NestJS', 'PostgreSQL', 'Heroku'],
    githubLink: 'https://github.com/Soul-Remix/socialbook',
    liveLink: 'https://social-book-app.netlify.app',
    image: socialbookImg,
  },
  {
    name: 'Fake Store',
    desc: 'A front-end application for an e-commerce shop, features Clean user interface with smooth animations and Responsive design, Ability to add and remove products from the shopping cart, Filter products by categories',
    tools: ['React', 'React-Router', 'React-query', 'TailwindCSS'],
    githubLink: 'https://github.com/Soul-Remix/react-shopping-cart',
    liveLink: 'https://soul-remix.github.io/react-shopping-cart/',
    image: fakestoreImg,
  },
  {
    name: 'Movie Blog',
    desc: 'A Fullstack web application for a movie blogging site, Responsive Design ,Infinite Scrolling to load more posts, Comment section for every post and a separate site for CMS built form scratch',
    tools: ['React', 'React-query', 'Express', 'MongoDb'],
    githubLink: 'https://github.com/Soul-Remix/blog-frontend',
    liveLink: 'https://soul-remix.github.io/blog-frontend/',
    image: blogImg,
  },
];

export default featuredProjects;
