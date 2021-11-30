import Image from 'next/image';

import Code from '../svg/Code';
import Desktop from '../svg/Desktop';
import Backend from '../svg/Backend';

import html from '../../public/icons/html.svg';
import css from '../../public/icons/css.svg';
import js from '../../public/icons/js.svg';
import ts from '../../public/icons/ts.svg';
import python from '../../public/icons/python.svg';
import react from '../../public/icons/react.svg';
import redux from '../../public/icons/redux.svg';
import next from '../../public/icons/next.svg';
import material from '../../public/icons/material.svg';
import tailwind from '../../public/icons/tailwind.svg';
import sass from '../../public/icons/sass.svg';
import figma from '../../public/icons/figma.svg';
import ejs from '../../public/icons/ejs.svg';
import node from '../../public/icons/node.svg';
import express from '../../public/icons/express.svg';
import nest from '../../public/icons/nest.svg';
import mongo from '../../public/icons/mongo.svg';
import postgre from '../../public/icons/postgre.svg';

const About = () => {
  return (
    <>
      <section
        className="bg-main text-white pt-28 pb-56 overflow-hidden dark:text-gray-100"
        id="about"
      >
        <h2 className="text-center text-3xl font-bold">
          Hi, I’m ..... . Nice to meet you.
        </h2>
        <p className="text-center max-w-3xl mt-6 mx-auto tracking-wider leading-relaxed text-lg">
          I am a software engineer who started his journey by studying computer
          engineering in university, ended up falling in love with coding and
          web development.
        </p>
      </section>
      <section className="-mt-36 mb-20 bg-white w-11/12 lg:w-10/12 mx-auto z-10 rounded-xl grid grid-cols-1 md:grid-cols-3 shadow-md overflow-hidden dark:bg-lightNavy dark:text-lightestSlate">
        {skills.map((x) => (
          <div
            className="p-10 flex flex-col flex-1 items-center border-b-2 md:border-r-2 dark:border-navy"
            key={x.title}
          >
            {x.img}
            <h1 className="font-bold text-xl text-center mt-10 dark:text-gray-100">
              {x.title}
            </h1>
            <ul className="mt-8 space-y-2 text-center">
              {x.items.map((item) => (
                <li
                  key={item.lang}
                  className="text-md flex items-center space-x-4"
                >
                  {item.image && (
                    <Image src={item.image} alt="" width={35} height={35} />
                  )}
                  <p>{item.lang}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </>
  );
};

export default About;

const skills = [
  {
    img: <Code className="h-12 w-12 text-main stroke-current" />,
    title: 'Languages',
    items: [
      { lang: 'HTML5', image: html },
      { lang: 'CSS3', image: css },
      { lang: 'JavaScript', image: js },
      { lang: 'TypeScript', image: ts },
      { lang: 'Python', image: python },
    ],
  },
  {
    img: <Desktop className="h-12 w-12 text-main stroke-current" />,
    title: 'Front-end',
    items: [
      { lang: 'React', image: react },
      { lang: 'Redux', image: redux },
      { lang: 'Next.js', image: next },
      { lang: 'ejs', image: ejs },
      { lang: 'Sass', image: sass },
      { lang: 'Tailwind', image: tailwind },
      { lang: 'MaterialUI', image: material },
      { lang: 'Figma', image: figma },
    ],
  },
  {
    img: <Backend className="h-12 w-12 text-main stroke-current" />,
    title: 'Back-end',
    items: [
      { lang: 'Node', image: node },
      { lang: 'Express', image: express },
      { lang: 'NestJS', image: nest },
      { lang: 'MongoDB', image: mongo },
      { lang: 'PostgreSQL', image: postgre },
    ],
  },
];
