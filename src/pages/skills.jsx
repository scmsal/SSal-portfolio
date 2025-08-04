import skillsData from "../data/skills.json";
import projectsData from "../data/projects.json";
import trainingsData from "../data/trainings.json";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SkillsPage = () => {
  const levelMap = {
    1: { symbol: "●○○○", label: "learned" },
    2: { symbol: "●●○○", label: "used" },
    3: { symbol: "●●●○", label: "proficient" },
    4: { symbol: "●●●●", label: "expert" }, // future use
  };
  // State to track selected skill, training, and project
  const [selectedSkill, setSelectedSkill] = useState("");
  const [selectedTraining, setSelectedTraining] = useState("");
  const [selectedProject, setSelectedProject] = useState("");

  // Set and reset selections when skills, trainings, or projects are clicked
  const projectClickHandler = (project) => {
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
    <main className="px-4 lg:px-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2 lg:px-4">
        {/* Tech Stack */}
        <div className="sm:grid-cols-1 md:col-span-2">
          <div className="flex justify-between items-center">
            <h1 className="text-left mb-3 text-cobalt">Tech Stack Skills</h1>
          </div>
          <div className="">
            <div className="flex flex-wrap justify-center gap-5 mb-2">
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
                            flex-col
                            px-4
                          mb-0.5
                            ${
                              selectedSkill === skill
                                ? "md:bg-blue-200 border-cobalt border-3 px-0 rounded-sm"
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
                            <div className="flex flex-row items-center justify-between">
                              <h3>{name}</h3>
                              {/* {logo && <img className="h-6" src={skill.logo} />} */}
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
                            </div>

                            {selectedSkill === skill && (
                              <div className="flex flex-col md:hidden">
                                {/* Show trainings for selected skill */}
                                <div className="flex-row text-left">
                                  <span className="text-gray-500 text-sm justify-start">
                                    Training:
                                  </span>
                                  <ul className="flex flex-wrap gap-1 ml-2 mb-2">
                                    {selectedSkill.trainings?.map(
                                      (training) => {
                                        return (
                                          <li
                                            key={skill.name + training}
                                            className="rounded border border-cobalt px-1 text-xs "
                                          >
                                            {training}
                                          </li>
                                        );
                                      }
                                    )}
                                  </ul>
                                </div>
                                {/* Show projects for selected skill */}
                                {selectedSkill.projects.length > 0 && (
                                  <div className="text-left">
                                    <span className="text-gray-500 text-sm justify-start">
                                      Projects:
                                    </span>
                                    <ul className="flex flex-wrap gap-1 ml-2 mb-2">
                                      {selectedSkill.projects?.map(
                                        (project) => {
                                          return (
                                            <li
                                              key={skill.name + project}
                                              className="rounded border border-cobalt px-1 text-xs"
                                            >
                                              {project}
                                            </li>
                                          );
                                        }
                                      )}
                                    </ul>
                                  </div>
                                )}
                              </div>
                            )}
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

        <div className="hidden col-span-1 md:flex flex-col">
          <div className="mb-20">
            <h2 className="mb-3 text-2xl md:text-3xl">...learned in:</h2>
            <div className="flex flex-wrap justify-left md:gap-1 md:space-x-1.5 items-center">
              <div className="text-center">
                <span className="accent">Training </span>
                <span className="text-gray-600">
                  in which I learned these skills.
                </span>
              </div>

              <NavLink to="/about" className="">
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="text-fuchsia-700 w-5 h-5"
                  title="View training"
                  size="lg"
                />
              </NavLink>

              {trainingsData.map((training) => {
                return (
                  <span
                    key={training.title}
                    className={`border rounded-lg border-cobalt px-2 cursor-pointer mb-1 ${selectedSkill?.trainings?.includes(training.title) ? " bg-blue-100" : ""}   ${selectedTraining === training ? "bg-blue-200 border-3 " : ""}}`}
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
              <h2 className="text-2xl md:text-3xl mb-3">...applied in:</h2>
              <div className="flex flex-wrap justify-left md:gap-2">
                <div>
                  <span className="accent">Projects </span>
                  <span className="text-gray-600">
                    in which I used these skills.
                  </span>
                </div>
                <NavLink to="/about" className="">
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className="text-fuchsia-700  w-5 h-5"
                    title="View projects"
                    size="lg"
                  />
                </NavLink>
              </div>
            </div>
            <div className="block md:flex md:flex-wrap justify-left gap-1">
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
          <div className="text-gray-700 mt-4 border-l-4 border-fuchsia-700 pl-2">
            Click a skill, training, or project to see associations. Click again
            to deselect.
          </div>
          <div className="text-gray-700 mt-4 border-l-4 border-fuchsia-700 pl-2">
            Levels reflect whether I've learned a skill in theory, used it in
            practice, or worked extensively with it.
          </div>
        </div>
      </div>
    </main>
  );
};

export default SkillsPage;
