import React from "react";
import NavBar from "../components/NavBar";

const HomePage = () => {
  console.log("HomePage rendered");
  const lang = ["EN", "FR", "ES", "IT"];
  const complang = ["JS", "TS", "CSS", "HTML"];
  return (
    // <div className="bg-[url(./assets/boliviainteligente-8H8Y5emrdO0-unsplash-orig.jpg)] bg-cover bg-center">
    // <div className="bg-linear-to-r/hsl from-indigo-900 from-20%  via-purple-500 via-75% to-pink-500 to-90%">

    <main className="flex flex-grow flex-col justify-center items-start">
      <div className="flex px-8 pt-8 ">
        <div className="">
          <div>
            <span className="font-bold uppercase text-6xl font-upper text-transparent bg-clip-text bg-linear-to-r from-cobalt from-10%  via-purple-500 via-75% to-pink-500 to-90%">
              Frontend developer
            </span>
          </div>
          <div className=" text-xl w-1/2">
            <div className="font-bold mb-4">
              with full stack exposure and a growth mindset
            </div>
            <p className="text-gray-500">
              Focused on building clean, responsive UIs with React and Tailwind.
              Actively deepening skills in backend technologies, testing and
              internationalization.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
