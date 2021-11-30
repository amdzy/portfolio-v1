import type { NextPage } from 'next';
import Head from 'next/head';

import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import ResponsiveNavBar from '../components/ResponsiveNavBar/ResponsiveNavBar';

const Home: NextPage = () => {
  return (
    <div className="dark:bg-navy">
      <Head>
        <title>Soul Remix</title>
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
