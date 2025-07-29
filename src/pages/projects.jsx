import projects from "../data/projects.json";

const ProjectsPage = () => {
  return (
    <main className="flex-grow p-6">
      <h1 className="text-center mb-5">Projects</h1>

      <div className="grid grid-cols-1 mx-6 md:grid-cols-3 md:gap-6 ">
        {projects.map((project) => {
          console.log("Rendering project:", project.name);
          return (
            <div
              className="flex flex-col text-center w-full shadow-md p-2 rounded h-70"
              key={project.name}
            >
              {/* <div className="flex justify-center mt-4">
                <img
                  src={project.screenshot ? project.screenshot : ""}
                  alt={`${project.name} screenshot`}
                  className="w-full h-auto rounded"
                />
              </div> */}
              <h2 className="font-bold text-2xl text-fuchsia-700 mb-4">
                {project.name}
              </h2>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Github
              </a>
              <a
                href={project.browser}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Browser
              </a>
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
