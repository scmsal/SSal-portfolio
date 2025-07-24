import skills from "../data/skills.json";
import projects from "../data/projects.json";
import trainings from "../data/trainings.json";
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

  let isHighlighted;

  const projectClickHandler = (project) => {
    event.preventDefault();
    console.log("projectClickHandler ran");
    setSelectedProject(project === selectedProject ? null : project);
    skills.map((category) => {
      category.skills.map((skill) => {
        isHighlighted = selectedProject?.skills.includes(skill.name);
        console.log(skill.name, { isHighlighted });
      });
    });
  };

  const skillClickHandler = (skill) => {
    setSelectedSkill(skill);
  };

  const trainingClickHandler = (training) => {
    setSelectedTraining(training);
  };

  return (
    <div className="grid grid-cols-3 gap-2 p-4">
      {/* Tech Stack */}
      <div className="col-span-2">
        <h1 className="text-center mb-3">Tech Stack Skills</h1>
        <div className="">
          {/* grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 */}
          <div className="flex flex-wrap justify-left gap-4">
            {skills.map((section) => {
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
                          className="flex items-center justify-between"
                        >
                          <div className="flex items-center ">
                            <h3
                              className={`font-bold pr-3 cursor-pointer ${isHighlighted ? "bg-violet-700 text-white" : ""}`}
                              onClick={() => {
                                console.log("skill clicked", { skill });
                                skillClickHandler(skill);
                              }}
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
      </div>

      <div className="col-span-1 flex flex-col justify-around">
        <div className="mb-3">
          <h1 className="mb-3">...learned in:</h1>
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

            {trainings.map((training) => {
              return (
                <span
                  key={training.title}
                  className={`border ${isHighlighted ? "border-violet-500 bg-violet-700 text-white" : "border-cobalt"} rounded-full px-2 cursor-pointer mb-1`}
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
            <h1 className="mb-3">...applied in:</h1>
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
            {projects.map((project) => {
              return (
                <span
                  key={project.name}
                  className={`border ${isHighlighted ? "border-violet-500 bg-violet-700 text-white" : "border-cobalt"} rounded-full px-2 cursor-pointer mb-1`}
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
