import skillsData from "../data/skills.json";
import projectsData from "../data/projects.json";
import trainingsData from "../data/trainings.json";
import { NavLink } from "react-router-dom";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";

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
    <div className="grid grid-cols-3 gap-2 p-4">
      {/* Tech Stack */}
      <div className="col-span-2">
        <span className="flex justify-center">
          <h1 className="text-center mb-3 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 from-10% via-violet-500 via-40% via-indigo-500 via-60% to-cobalt">
            Tech Stack Skills
          </h1>
        </span>
        <div className="">
          {/* grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 */}
          <div className="flex flex-wrap justify-left gap-4">
            {skillsData.map((section) => {
              return (
                <div
                  className="text-center w-2xs shadow-md p-2 rounded"
                  key={section.category}
                >
                  <h2 className="font-bold text-2xl text-gray-500">
                    {section.category}
                  </h2>
                  <ul className="">
                    {section.skills.map((skill) => {
                      const name = skill.name;
                      const logo = skill.logo;
                      return (
                        <li
                          key={name}
                          onClick={() => {
                            console.log("skill clicked", { skill });
                            skillClickHandler(skill);
                          }}
                          className={`flex items-center justify-between px-1 ${selectedSkill === skill ? "bg-violet-200 border border-cobalt border-3 rounded-sm" : ""}`}
                        >
                          <div className="flex items-center">
                            <h3
                              className={`font-bold  cursor-pointer ${selectedProject?.skills?.includes(skill.name) ? "bg-violet-200" : ""} `}
                            >
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
                                      ? "text-cobalt"
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
          <div className="flex flex-wrap justify-center gap-3">
            <span className="text-gray-600">
              Programs and courses where I learned these skills.
            </span>
            <NavLink to="/about" className="">
              <ArrowTopRightOnSquareIcon
                className="text-violet-700  w-5 h-5"
                title="View training"
              />
            </NavLink>

            {trainingsData.map((training) => {
              return (
                <span
                  key={training.title}
                  className={`border ${selectedSkill?.trainings?.includes(training.title) ? "border-violet-500 bg-violet-200" : "border-cobalt"} rounded-full px-3 cursor-pointer mb-1 ${selectedTraining === training ? "bg-blue-200 border border-cobalt border-3 rounded-sm" : ""}}`}
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
            <div className="flex flex-wrap justify-center gap-3">
              <span className="text-gray-600">
                Projects in which I used these skills.
              </span>
              <NavLink to="/about" className="">
                <ArrowTopRightOnSquareIcon
                  className="text-violet-700  w-5 h-5"
                  title="View projects"
                />
              </NavLink>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {projectsData.map((project) => {
              return (
                <span
                  key={project.name}
                  className={`border ${selectedSkill?.projects?.includes(project.name) ? "border-violet-500 bg-violet-200" : "border-cobalt"} rounded-full px-2 cursor-pointer mb-1`}
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
  );
};

export default SkillsPage;
