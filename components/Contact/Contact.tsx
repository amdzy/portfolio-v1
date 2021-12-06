const Contact = () => {
  return (
    <section
      className="text-center flex items-center flex-col justify-center  h-[88vh] dark:text-lightSlate"
      id="contact"
    >
      <p className="text-main text-2xl mb-3 dark:text-mainDark">
        What&apos;s next?
      </p>
      <h2 className="text-5xl font-bold mb-10 dark:text-lightestSlate">
        Get In Touch
      </h2>
      <p className="text-lg">
        I&apos;m currently open to work as a{' '}
        <span className="text-main dark:text-mainDark">
          Front-end Developer.
        </span>{' '}
        full time or as a freelancer.
      </p>
      <p className="text-lg mb-10">
        Let&apos;s get in touch and talk more about your projects.
      </p>
      <a
        href="mailto:soulremix-dev@pm.me"
        rel="noopener noreferrer"
        target="_blank"
        className="flex items-center text-lg max-w-max mx-auto p-4 pr-8 pl-8 border-2 border-main dark:border-mainDark rounded-full mt-20 text-main dark:text-mainDark hover:text-white dark:hover:text-mainDark hover:bg-main dark:hover:bg-mainDark/10 transition-all duration-300"
      >
        Say Hello
      </a>
    </section>
  );
};

export default Contact;
