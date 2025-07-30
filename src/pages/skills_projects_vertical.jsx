import skillsData from "../data/skills.json";
import projectsData from "../data/projects.json";
import trainingsData from "../data/trainings.json";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

const SkillsPage = () => {
  const levelMap = {
    1: { symbol: "●○○○", label: "basic" },
    2: { symbol: "●●○○", label: "beginner" },
    3: { symbol: "●●●○", label: "proficient" },
    4: { symbol: "●●●●", label: "expert" }, // future use
  };
  const colorMap = {
    1: "text-blue-500",
    2: "text-purple-600",
    3: "text-pink-500",
    4: "text-fuchsia-900",
  };
  const [selectedSkill, setSelectedSkill] = useState("");
  const [selectedTraining, setSelectedTraining] = useState("");
  const [selectedProject, setSelectedProject] = useState("");

  const projectClickHandler = (project) => {
    console.log("projectClickHandler ran");
    setSelectedProject(project === selectedProject ? null : project);
    setSelectedTraining(null);
    setSelectedSkill(null);
  };

  const skillClickHandler = (skill) => {
    setSelectedSkill(skill === selectedSkill ? null : skill);
    setSelectedTraining(null);
    setSelectedProject(null);
  };

  const trainingClickHandler = (training) => {
    setSelectedTraining(training === selectedTraining ? null : training);
    setSelectedProject(null);
    setSelectedSkill(null);
  };

  return (
    <main className="px-8">
      <div className="grid grid-cols-3 gap-2">
        {/* Tech Stack */}
        <div className="col-span-2">
          <span className="flex justify-center">
            <h1 className="text-center mb-3 text-cobalt">
              {/* bg-gradient-to-r from-pink-500 from-10% via-violet-500 via-40% via-indigo-500 via-60% to-cobalt */}
              Tech Stack Skills
            </h1>
          </span>
          <div className="">
            <div className="flex flex-wrap justify-left gap-3 mb-2">
              {skillsData.map((section) => {
                return (
                  <div
                    className="text-center w-2xs shadow-md p-2 rounded"
                    key={section.category}
                  >
                    <h2 className="font-bold text-2xl text-gray-500">
                      {section.category}
                    </h2>
                    <ul className="py-0.5">
                      {section.skills.map((skill) => {
                        const name = skill.name;
                        const logo = skill.logo;
                        return (
                          <li
                            key={name}
                            title={levelMap[skill.level].label}
                            onClick={() => {
                              skillClickHandler(skill);
                            }}
                            className={`
                            flex 
                            items-center 
                            justify-between 
                          mb-0.5
                            ${
                              selectedSkill === skill
                                ? "bg-blue-200 border-cobalt border-3 rounded-sm"
                                : ""
                            }
                            ${
                              selectedProject?.skills?.includes(skill.name)
                                ? "border border-cobalt bg-blue-200"
                                : ""
                            }
                            ${
                              selectedTraining?.skills?.includes(skill.name)
                                ? "border border-cobalt bg-blue-200"
                                : ""
                            }

                            `}
                          >
                            <div className="flex items-center">
                              <h3 className={`font-bold cursor-pointer  `}>
                                {name}
                              </h3>
                              {/* {logo && <img className="h-6" src={skill.logo} />} */}
                            </div>
                            <div className="items-center">
                              {/* I was going to use a for loop to iteratively render the dots, but ChatGPT suggested using the following logic, which I adapted */}
                              {[...Array(4)].map((__, i) => {
                                return (
                                  <span
                                    key={`dots${i}`}
                                    className={
                                      i + 1 <= skill.level
                                        ? "text-fuchsia-700"
                                        : "text-gray-400"
                                    }
                                  >
                                    {i + 1 <= skill.level ? "●" : "○"}
                                  </span>
                                );
                              })}
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
          <span className="text-gray-700">
            Click a skill, training, or project to see associations. Click again
            to deselect.
          </span>
        </div>

        <div className="col-span-1 flex flex-col justify-around">
          <div className="mb-3">
            <h2 className="mb-3">...learned in:</h2>
            <div className="flex flex-wrap justify-center gap-1">
              <span className="text-gray-600">
                Programs and courses where I learned these skills.
              </span>
              <NavLink to="/about" className="">
                <ArrowTopRightOnSquareIcon
                  className="text-fuchsia-700  w-5 h-5"
                  title="View training"
                />
              </NavLink>

              {trainingsData.map((training) => {
                return (
                  <span
                    key={training.title}
                    className={`border rounded-lg border-cobalt px-3 cursor-pointer mb-1 ${selectedSkill?.trainings?.includes(training.title) ? " bg-blue-100" : ""}   ${selectedTraining === training ? "bg-blue-200 border-3 " : ""}}`}
                    title={training.details}
                    onClick={() => {
                      console.log("training clicked", training);
                      trainingClickHandler(training);
                    }}
                  >
                    {training.title}
                  </span>
                );
              })}
              <div className="flex items-center justify-end"></div>
            </div>
          </div>
          <div className="col-span-1 flex flex-col justify-around">
            <div className="mb-3">
              <h2 className="mb-3">...applied in:</h2>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="text-gray-600">
                  Projects in which I used these skills.
                </span>
                <NavLink to="/about" className="">
                  <ArrowTopRightOnSquareIcon
                    className="text-fuchsia-700  w-5 h-5"
                    title="View projects"
                  />
                </NavLink>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-1">
              {projectsData.map((project) => {
                return (
                  <span
                    key={project.name}
                    className={`border border-cobalt rounded-lg px-2 cursor-pointer mb-1
                    ${selectedProject === project ? "bg-blue-200 border-3 " : ""}
                    ${
                      selectedSkill?.projects?.includes(project.name)
                        ? " bg-blue-100"
                        : ""
                    } 
                      `}
                    onClick={() => {
                      console.log("project clicked", project);
                      projectClickHandler(project);
                    }}
                  >
                    {project.name}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SkillsPage;
