import React from "react";
import skillsData from "../data/skills.json";

const ProjectsPage = () => {
  const levelMap = {
    1: "●○○○",
    2: "●●○○",
    3: "●●●○",
    4: "●●●●", // future use
  };
  return (
    <div className="p-6">
      {/* Projects */}
      <div className="md:col-span-2">
        <h1 className="text-center">Projects</h1>
      </div>
      <div className="">
        <h1 className="text-center mb-4">Tech Stack</h1>
        <div className="">
          {/* Tech Stack */}

          {/* grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 */}
          <div className="flex flex-wrap justify-center gap-6">
            {skillsData.map((section) => {
              return (
                <div
                  className="text-center md:min-w-1 shadow-md p-2 rounded"
                  key="section.category"
                >
                  <h2 className="font-bold text-2xl text-cobalt mb-4">
                    {section.category}
                  </h2>
                  <ul className="flex flex-col">
                    {section.skills.map((skill) => {
                      const name = skill.name;
                      const logo = skill.logo;
                      return (
                        <li
                          key={name}
                          className="flex items-center justify-between"
                        >
                          <div className="flex items-center ">
                            <h3 className={`font-bold pr-3`}>{name}</h3>{" "}
                            {/* {logo && <img className="h-6" src={skill.logo} />} */}
                          </div>
                          <div className="items-center">
                            <span className="text-cobalt">
                              {levelMap[skill.level]}
                            </span>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
