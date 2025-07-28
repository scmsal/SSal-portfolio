import projects from "../data/projects.json";

const ProjectsPage = () => {
  return (
    <main className="flex-grow p-6">
      <h1 className="text-center">Projects</h1>

      <div className="grid grid-cols-1 mx-6 md:grid-cols-3 md:gap-10 ">
        {projects.map((project) => {
          return (
            <div
              className="text-center w-full shadow-md p-2 rounded h-65 overflow-hidden"
              key={project.name}
            >
              {/* <div className="flex justify-center mt-4">
                <img
                  src={project.screenshot ? project.screenshot : ""}
                  alt={`${project.name} screenshot`}
                  className="w-full h-auto rounded"
                />
              </div> */}
              <h2 className="font-bold text-2xl text-cobalt mb-4">
                {project.name}
              </h2>
              <p className="text-grey-500">{project.description}</p>
              <div className="flex flex-wrap gap-1">
                {project.skills.map((skill) => {
                  return (
                    <span
                      key={skill.name}
                      className={"rounded-lg px-2 cursor-pointer mb-1"}
                    >
                      {skill.name}
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
