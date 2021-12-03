import Link from 'next/link';
import otherProjects from '../../data/other-projects';
import Code from '../svg/Code';

import External from '../svg/External';
import Folder from '../svg/Folder';

const OtherProjects = () => {
  return (
    <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {otherProjects.map((project) => {
        return (
          <li
            className="shadow-md p-4 bg-white rounded-md dark:bg-lightNavy transition-all duration-300 hover:-translate-y-2"
            key={project.name}
          >
            <header className="flex justify-between items-center mb-4">
              <div>
                <Folder className="h-12 w-12 text-main dark:text-mainDark" />
              </div>
              <div className="flex space-x-3">
                <a
                  href={project.githubLink}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="hover:text-main dark:text-lightSlate dark:hover:text-mainDark"
                  aria-label="Project github page"
                >
                  <Code />
                </a>
                <a
                  href={project.liveLink}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label="project live page"
                  className="hover:text-main dark:text-lightSlate dark:hover:text-mainDark"
                >
                  <External />
                </a>
              </div>
            </header>
            <h2 className=" text-2xl font-bold mb-4 dark:text-lightestSlate hover:text-main dark:hover:text-mainDark">
              {project.name}
            </h2>
            <p className="mb-4 leading-relaxed tracking wide dark:text-lightSlate">
              {project.desc}
            </p>
            <footer className="flex mb-4 text-gray-800 space-x-5 dark:text-slate">
              {project.tools.map((tool) => (
                <p key={tool}>{tool}</p>
              ))}
            </footer>
          </li>
        );
      })}
    </ul>
  );
};

export default OtherProjects;
