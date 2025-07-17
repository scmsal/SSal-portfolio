import React from "react";
import skillsData from "../data/skills.json";

const ProjectsPage = () => {
  const levelColorMap = {
    1: "border-l-4 border-indigo-300",
    2: "border-l-4 border-cobalt",
    3: "border-l-4 border-fuchsia-400",
    4: "border-l-4 border-fuchsia-700", // future use
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-6">
      <div className="grid md:col-span-3">
        <h1 className="text-center mb-4">Tech Stack</h1>
        <div className="">
          {/* Tech Stack */}

          {/* grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 */}
          <div className="flex flex-wrap gap-6">
            {skillsData.map((section) => {
              return (
                <div
                  className="text-left md:min-w-10 border border-b-dusty-blue p-4 rounded"
                  key="section.category"
                >
                  <h2 className="font-bold text-3xl text-cobalt mb-4">
                    {section.category}
                  </h2>
                  <div className="flex flex-col gap-4">
                    {section.skills.map((skill) => {
                      const name = skill.name;
                      const logo = skill.logo;
                      return (
                        <div
                          key={name}
                          className="flex items-center justify-between"
                        >
                          <div className="flex items-center ">
                            <h3
                              className={`font-bold pr-3 ${levelColorMap[skill.level]}`}
                            >
                              {name}
                            </h3>{" "}
                            {logo && <img className="h-8" src={skill.logo} />}
                          </div>
                          <div className="items-center">
                            <span className="bg-">{skill.level}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Projects */}
      <div className="md:col-span-2">
        <h1 className="text-center">Projects</h1>
      </div>
    </div>
  );
};

export default ProjectsPage;
