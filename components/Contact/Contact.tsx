const Contact = () => {
  return (
    <section className="text-center" id="contact">
      <p className="text-main text-2xl mb-3 mt-32">What&apos;s next?</p>
      <h2 className="text-5xl font-bold mb-10">Get In Touch</h2>
      <p className="text-lg">
        I&apos;m currently open to work as a{' '}
        <span className="text-main">Front-end Developer.</span> full time or as
        freelancer.
      </p>
      <p className="text-lg mb-10">
        Let&apos;s get in touch and talk more about your projects.
      </p>
      <a
        href="mailto:soulremix-dev@pm.me"
        rel="noopener noreferrer"
        target="_blank"
        className="block text-lg max-w-max mx-auto p-4 pl-8 pr-8 border-2 border-main rounded-full mt-20 mb-32 text-main hover:text-white hover:bg-main transition-all duration-300"
      >
        Say Hello
      </a>
    </section>
  );
};

export default Contact;
