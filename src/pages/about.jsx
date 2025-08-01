import React from "react";
import trainings from "../data/trainings.json";

const AboutPage = () => {
  return (
    <main className="flex-grow pt-4 px:4 md:px-15">
      <div className="flex flex-col md:flex-row space-x-4 md:space-x-10 space-y-4 md:space-y-0">
        <div className="flex flex-col shadow md:w-1/3 ">
          <h2 className="font-bold mb-4 text-center">
            From Interpreting to Coding
          </h2>
          {/* <h2 className="font-bold text-2xl text-gray-500">Education</h2> */}
          <p className="text-gray-600 mb-6 px-4 text-md">
            My journey into software development began in 2022, building on a
            background in education, languages, and human services. After
            earning a B.A. in Education and an M.A. in Spanish, I have worked as
            an interpreter, proofreader, language instructor, and small business
            manager. I have lived in Canada, the United States, Mexico and
            Italy. In addition to Spanish and my native English, I understand
            French and Italian.
          </p>
          <p className="text-gray-600 mb-6 px-4 text-md">
            These experiences have helped me develop my communication skills,
            cultural insight, attention to detail, and passion for continuous
            learning. I also have a strong appreciation for visual design and
            the clear presentation of information, which now guide me as a
            frontend-focused fullstack developer.
          </p>
        </div>

        {/* <div>
            <h2 className="font-bold text-2xl text-gray-500">Languages</h2>
            <ul className="list-image-none list-inside">
              <li>English (Native)</li>
              <li>Spanish (Fluent)</li>
              <li>French (Conversational)</li>
              <li>Italian (Conversational)</li>
            </ul>
          </div> */}

        <div className="shadow p-4 pt-0 md:w-2/3">
          <h2 className="font-bold mb-2">Tech Training</h2>
          <p className="text-gray-600"></p>
          <ul className="list-image-none grid grid-cols-1 md:grid-cols-2 gap-1.5">
            {trainings.map((training) => {
              return (
                <li
                  key="training.title"
                  className="mb-1.5 border-l-4 border-fuchsia-700 pl-2"
                >
                  <span className="font-bold ">
                    {training.full_title || training.title}
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
        <h2 className="font-bold mb-2 mt-4">Current Focus</h2>

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
