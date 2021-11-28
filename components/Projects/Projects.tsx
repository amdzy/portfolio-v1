import FeaturedProjectCard from '../FeaturedProjectCard/FeaturedProjectCard';

const Projects = () => {
  return (
    <section id="projects" className="p-4 md:p-8 w-11/12 max-w-4xl mx-auto">
      <h2 className="text-center text-3xl font-semibold mb-12">
        Some Things I’ve Built
      </h2>
      <FeaturedProjectCard />
    </section>
  );
};

export default Projects;
