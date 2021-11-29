import Link from 'next/link';
import otherProjects from '../../data/other-projects';

import External from '../svg/External';
import Folder from '../svg/Folder';

const OtherProjects = () => {
  return (
    <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {otherProjects.map((project) => {
        return (
          <li className="shadow-md p-4 bg-white" key={project.name}>
            <div className="flex justify-between items-center mb-4">
              <Link href={project.githubLink}>
                <a
                  aria-label="project github page"
                  className="transition-all duration-150 hover:transform hover:scale-105"
                >
                  <Folder className="h-12 w-12 text-main" />
                </a>
              </Link>
              <Link href={project.liveLink}>
                <a
                  aria-label="project live page"
                  className="hover:text-main dark:text-white"
                >
                  <External />
                </a>
              </Link>
            </div>
            <h2 className=" text-2xl font-bold mb-4">{project.name}</h2>
            <p className="mb-4 leading-relaxed tracking wide">{project.desc}</p>
            <div className="flex mb-4 text-gray-800 space-x-5">
              {project.tools.map((tool) => (
                <p key={tool}>{tool}</p>
              ))}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default OtherProjects;
