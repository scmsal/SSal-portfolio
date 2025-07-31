import projects from "../data/projects.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectsPage = () => {
  return (
    <main className="flex-grow p-6">
      <h1 className="text-center mb-5">Projects</h1>

      <div className="grid grid-cols-1 mx:6 sm:mx-10 lg:mx-28 md:grid-cols-3 md:gap-6 ">
        {projects.map((project) => {
          return (
            <div
              className="flex flex-col w-full shadow-md p-6 rounded min-h-70"
              key={project.name}
            >
              <div className="flex flex-row justify-between mb-4">
                <h2 className="font-bold text-2xl text-fuchsia-700">
                  {project.name}
                </h2>
                <div className="flex space-x-2 items-center">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="align-middle hover:scale-x-[-1] transition-transform duration-300"
                        size="xl"
                      />
                    </a>
                  )}
                  {project.browser && (
                    <a
                      href={project.browser}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {/* I didn't use the Font Awesome flip prop because it couldn't be combined with hover */}
                      <FontAwesomeIcon
                        icon={faGlobe}
                        className="align-middle hover:scale-x-[-1] transition-transform duration-400"
                        size="xl"
                      />
                    </a>
                  )}
                </div>
              </div>

              {project.screenshot && (
                <div className="w-full max-h-3xl mb-2 shadow">
                  <img
                    src={project.screenshot}
                    alt={`${project.name} screenshot`}
                    className="w-full h-auto rounded"
                  />
                </div>
              )}

              <p className="text-gray-500 flex-grow">{project.description}</p>
              <div className="flex flex-wrap p-1">
                {project.skills.map((skill) => {
                  return (
                    <span
                      key={skill}
                      className={
                        "rounded-lg border bg-slate-100 border-gray-400 px-2 text-gray-500 text-sm mx-0.5 my-0.5"
                      }
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default ProjectsPage;
