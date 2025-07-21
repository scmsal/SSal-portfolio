import skillsData from "../data/skills.json";
import projects from "../data/projects.json";
import trainings from "../data/trainings.json";
import { NavLink } from "react-router-dom";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

// ${colorMap[skill.level]}
const SkillsPage = () => {
  const levelMap = {
    1: "●○○○",
    2: "●●○○",
    3: "●●●○",
    4: "●●●●", // future use
  };
  const colorMap = {
    1: "text-blue-500",
    2: "text-purple-600",
    3: "text-pink-500",
    4: "text-fuchsia-900",
  };
  return (
    <div className="grid grid-cols-3 gap-2 p-4">
      {/* Tech Stack */}
      <div className="col-span-2">
        <h1 className="text-center mb-3">Tech Stack</h1>
        <div className="">
          {/* grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 */}
          <div className="flex flex-wrap justify-left gap-4">
            {skillsData.map((section) => {
              return (
                <div
                  className="text-center w-2xs shadow-md p-2 rounded"
                  key="section.category"
                >
                  <h2 className="font-bold text-2xl text-gray-600 mb-2">
                    {section.category}
                  </h2>
                  <ul className="">
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
                            <span className={`text-cobalt `}>
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

      <div className="col-span-1">
        <div className="mb-3">
          <h1 className="mb-3">...learned in:</h1>
          <div className="flex flex-wrap justify-center gap-3">
            {trainings.map((training) => {
              return (
                <span
                  key={training.title}
                  className="mb-1 border border-cobalt rounded-full px-2 cursor-pointer"
                >
                  {training.title}{" "}
                </span>
              );
            })}
            <div className="flex items-center justify-end">
              <NavLink to="/about" className="flex  gap-2">
                <ArrowTopRightOnSquareIcon
                  className="text-fuchsia-500 w-5 h-5"
                  title="View training"
                />
              </NavLink>
            </div>
          </div>
        </div>
        <div>
          <div className="flex">
            <h1 className="mb-3">...applied in:</h1>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {projects.map((project) => {
              return (
                <span
                  key={project.name}
                  className="border border-cobalt rounded-full px-2 cursor-pointer mb-1"
                >
                  {project.name}
                </span>
              );
            })}
            <div className="flex items-center justify-end">
              <NavLink to="/about" className="flex  gap-2">
                <ArrowTopRightOnSquareIcon
                  className="text-fuchsia-500 w-5 h-5"
                  title="View projects"
                />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
