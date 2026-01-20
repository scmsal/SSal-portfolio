import React from "react";
import NavBar from "../components/NavBar";

const HomePage = () => {
  return (
    <main className="flex flex-grow flex-col justify-center items-start">
      <div className="flex flex-col md:flex-row px-4 md:px-8 pt-4 md:pt-8 w-full justify-between md:items-end">
        <div className="col-span-2  md:col-span-1">
          <div>
            <span className="font-bold uppercase text-4xl md:text-6xl font-upper text-transparent bg-clip-text bg-linear-to-r from-cobalt from-10%  via-purple-500 via-75% to-pink-500 to-90%">
              Frontend developer
            </span>
          </div>
          <div className="text-lg md:text-xl mb-5">
            <div className="font-bold mb-4">
              with full stack exposure and a growth mindset
            </div>
            <ul className="text-gray-500 list-none">
              <li>
                Focused on building clean, responsive UIs with React and
                Tailwind.
              </li>
              <li>
                Actively deepening skills in frontend and backend technologies,
                testing, and deployment.
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1 justify-items-center md:flex-end ">
          <img
            src="/wordcloud-2-Photoroom.png"
            alt="developer word cloud"
            className="object-cover fluid w-75 lg:w-100"
          />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
