import FeaturedProjects from "../../components/FeaturedProjects/FeaturedProjects";
import OtherProjects from "../../components/OtherProjects/OtherProjects";
import External from "../../components/svg/External";

const Projects = () => {
  return (
    <>
      <section
        id="projects"
        className="p-4 md:p-8 sm:w-11/12 max-w-4xl mx-auto"
      >
        <h2 className="text-center text-3xl font-semibold mb-12 dark:text-lightestSlate">
          Some Things I’ve Built
        </h2>
        <FeaturedProjects />
      </section>
      <section className="p-4 md:p-8 sm:w-11/12 max-w-4xl mx-auto mt-12">
        <h2 className="text-center text-3xl font-semibold mb-12 dark:text-white">
          Other Noteworthy Projects
        </h2>
        <OtherProjects />
        <a
          href="https://github.com/Soul-Remix"
          target="_blank"
          rel="noreferrer"
          className="flex items-center text-lg max-w-max mx-auto p-4 border-2 border-main dark:border-mainDark rounded-full mt-20 mb-20 text-main dark:text-mainDark hover:text-white dark:hover:text-mainDark hover:bg-main dark:hover:bg-mainDark/10 transition-all duration-300"
        >
          See More on Github
          <External />
        </a>
      </section>
    </>
  );
};

export default Projects;
