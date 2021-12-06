import heroSvg from '../../public/hero.svg';
import avatarSvg from '../../public/avatar.svg';

/* eslint-disable @next/next/no-img-element */
const Hero = () => {
  return (
    <section className="pt-16 p-4 pb-0">
      <h1 className="text-3xl font-bold text-center lg:text-5xl dark:text-lightestSlate">
        Software engineer, Full stack web-developer
      </h1>
      <p className="pt-8 text-center text-xl text-gray-600 leading-relaxed tracking-wide max-w-3xl mx-auto dark:text-lightSlate">
        I’m a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences
      </p>
      <img
        src={avatarSvg.src}
        alt=""
        className="w-[150px] h-[160px] mt-16 mx-auto md:w-[200px] md:h-[210px] text-main stroke-current fill-current"
        width="200"
        height="210"
      />
      <img
        src={heroSvg.src}
        alt=""
        className="mx-auto mt-16 dark:filter dark:brightness-[0.85] dark:hue-rotate-180 dark:saturate-[6] dark:invert"
        width="650"
        height="265"
      />
    </section>
  );
};

export default Hero;
