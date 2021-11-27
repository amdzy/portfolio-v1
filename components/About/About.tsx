const About = () => {
  return (
    <>
      <section className="bg-purple-600 text-white pt-28 pb-56" id="about">
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
      <section className="-mt-36 bg-white w-11/12 lg:w-10/12 mx-auto z-10 rounded-xl grid grid-cols-1 md:grid-cols-3 shadow-md">
        {arr.map((x, i) => (
          <div
            className="p-10 flex flex-col flex-1 items-center border-b-2 md:border-r-2"
            key={i}
          >
            {x.img}
            <h1 className="font-bold text-xl text-center mt-10">{x.title}</h1>
            <div className="mt-8 space-y-2 text-center">
              {x.items.map((item, i) => (
                <p key={i} className="text-md">
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

const Code = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-12 text-purple-600 stroke-current"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
      />
    </svg>
  );
};

const Desktop = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-12 text-purple-600 stroke-current"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
};

const Terminal = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-12 text-purple-600 stroke-current"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  );
};

const arr = [
  {
    img: <Code />,
    title: 'Languages',
    items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Python', 'SQL'],
  },
  {
    img: <Desktop />,
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
    img: <Terminal />,
    title: 'Back-end',
    items: ['Node', 'Express', 'NestJS', 'MongoDB', 'PostgreSQL'],
  },
];
