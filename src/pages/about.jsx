import React from "react";
import trainings from "../data/trainings.json";

const AboutPage = () => {
  return (
    <main className="flex-grow px-4 md:px-15">
      <div className="flex flex-col md:flex-row space-x-4 md:space-x-10 space-y-4 md:space-y-0">
        <div className="flex flex-col p-4 shadow w-full md:w-1/3 ">
          <h2 className="font-bold mb-4 text-center">From Languages to Code</h2>
          {/* <h2 className="font-bold text-2xl text-gray-500">Education</h2> */}
          <p className="text-gray-600 mb-6 px-4 text-md text-justify">
            My journey into software development began in 2022, building on a
            background in education, languages, human services, and a passion
            for continuous learning. I hold a B.A. in Education and an M.A. in
            Spanish, and have worked as an interpreter, proofreader, language
            instructor, and small business manager. I've lived in Canada, the
            United States, Mexico, and Italy. I understand French and Italian,
            and with practice I could return to speaking both fluently.
          </p>
          <p className="text-gray-600 px-4 text-md text-justify">
            These experiences have shaped my analytical thinking, cultural
            insight, communication skills, and attention to detail. I also have
            a strong appreciation of visual design and the clear presentation of
            information – qualities that now guide me as a frontend-focused full
            stack developer.
          </p>
        </div>

        <div className="shadow md:pl-15 md:pr-0 pt-4 px-20 w-full md:px-4 md:w-2/3">
          <h2 className="font-bold mb-2 text-center">Tech Training</h2>
          <p className="text-gray-600"></p>
          <ul className="list-image-none grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-0">
            {trainings.map((training) => {
              return (
                <li
                  key="training.title"
                  className="mb-1.5 border-l-4 border-fuchsia-700 pl-2"
                >
                  <span className="font-bold ">
                    {`${training.full_title || training.title} `}
                  </span>
                  <p className="text-gray-500">{training.type}</p>
                  <p>{training.details}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="shadow pb-4 px-4">
        <h2 className="font-bold mb-2 mt-4 text-center text-transparent bg-clip-text bg-linear-to-r from-cobalt from-40%  via-fuchsia-500 via-60% to-pink-500 to-75% ">
          {"> Current Focus <"}
        </h2>

        <ul className="text-gray-600 px-4 list-disc list-inside text-md grid grid-cols-1 md:grid-cols-2 gap-1">
          <li>
            Studying modern frontend design techniques and UI/UX principles
          </li>
          <li>
            Exploring deployment workflows and cloud-based hosting solutions
          </li>
          <li>
            Learning internationalization (i18n) and web accessibility (a11y)
            best practices
          </li>
          <li>
            Advancing my development skills through hands-on, real-world
            projects
          </li>
        </ul>
      </div>
    </main>
  );
};

export default AboutPage;
