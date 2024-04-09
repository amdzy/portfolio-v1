import Image from "next/image";

import Code from "../svg/Code";
import Desktop from "../svg/Desktop";
import Backend from "../svg/Backend";
import { skills } from "../../data/skills";

const About = () => {
  return (
    <>
      <section
        className="bg-main text-white pt-28 pb-56 overflow-hidden dark:text-gray-100"
        id="about"
      >
        <h2 className="text-center text-3xl font-bold">
          Hi, I’m Zabadany (amdzy) Nice to meet you.
        </h2>
        <p className="text-center max-w-3xl mt-6 mx-auto tracking-wider leading-relaxed text-lg">
          I am a Full Stack developer with industry experience building websites
          and web applications. I specialize in TypeScript and have professional
          experience working with Go and C#. I also have experience working with
          Python. Take a look at my work or get in touch!
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
