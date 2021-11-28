const Hero = () => {
  return (
    <section className="pt-16 p-4 pb-0">
      <h1 className="text-3xl font-bold text-center lg:text-5xl">
        Software engineer, Full stack web-developer
      </h1>
      <p className="pt-8 text-center text-xl text-gray-600 leading-relaxed tracking-wide max-w-3xl mx-auto">
        I’m a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences
      </p>
      <img
        src="/avatar.svg"
        alt=""
        className="w-[150px] h-[160px] mt-16 mx-auto md:w-[200px] md:h-[210px]"
      />
      <img src="/hero.svg" alt="" className="mx-auto mt-16" />
    </section>
  );
};

export default Hero;
