import Code from '../svg/Code';
import Desktop from '../svg/Desktop';
import Terminal from '../svg/Terminal';

const About = () => {
  return (
    <>
      <section className="bg-main text-white pt-28 pb-56" id="about">
        <h2 className="text-center text-3xl font-bold">
          Hi, I’m ..... . Nice to meet you.
        </h2>
        <p className="text-center max-w-3xl mt-6 mx-auto tracking-wider leading-relaxed text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          expedita soluta placeat dignissimos suscipit excepturi necessitatibus
          vel voluptas explicabo, cum nostrum consectetur saepe assumenda
          temporibus architecto veritatis sed rem commodi! Est libero
          perspiciatis voluptatum quasi facilis cum at sit, temporibus, modi quo
          quisquam fugiat laudantium veritatis nam soluta.
        </p>
      </section>
      <section className="-mt-36 mb-20 bg-white w-11/12 lg:w-10/12 mx-auto z-10 rounded-xl grid grid-cols-1 md:grid-cols-3 shadow-md">
        {skills.map((x) => (
          <div
            className="p-10 flex flex-col flex-1 items-center border-b-2 md:border-r-2"
            key={x.title}
          >
            {x.img}
            <h1 className="font-bold text-xl text-center mt-10">{x.title}</h1>
            <div className="mt-8 space-y-2 text-center">
              {x.items.map((item) => (
                <p key={item} className="text-md">
                  {item}
                </p>
              ))}
            </div>
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
    items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Python', 'SQL'],
  },
  {
    img: <Desktop className="h-12 w-12 text-main stroke-current" />,
    title: 'Front-end',
    items: [
      'React',
      'Redux',
      'Next.js',
      'ejs',
      'Sass',
      'Tailwind',
      'MaterialUI',
      'Figma',
    ],
  },
  {
    img: <Terminal className="h-12 w-12 text-main stroke-current" />,
    title: 'Back-end',
    items: ['Node', 'Express', 'NestJS', 'MongoDB', 'PostgreSQL'],
  },
];
