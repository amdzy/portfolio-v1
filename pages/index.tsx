import type { NextPage } from "next";
import Head from "next/head";

import About from "../sections/About/About";
import Contact from "../sections/Contact/Contact";
import Footer from "../sections/Footer/Footer";
import Hero from "../sections/Hero/Hero";
import Projects from "../sections/Projects/Projects";
import ResponsiveNavBar from "../components/ResponsiveNavBar/ResponsiveNavBar";

const Home: NextPage = () => {
  return (
    <div className="dark:bg-navy">
      <Head>
        <title>Zabadany (Soul Remix) | Software Engineer, Web Developer</title>
        <meta name="description" content="Personal Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ResponsiveNavBar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
