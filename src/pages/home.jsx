import React from "react";
import NavBar from "../components/NavBar";
import modelIcon from "../assets/modeling_flaticon.png";

const HomePage = () => {
  console.log("HomePage rendered");
  const lang = ["EN", "FR", "ES", "IT"];
  const complang = ["JS", "TS", "JAVA", "HTML"];
  return (
    // <div className="bg-[url(./assets/boliviainteligente-8H8Y5emrdO0-unsplash-orig.jpg)] bg-cover bg-center">
    // <div className="bg-linear-to-r/hsl from-indigo-900 from-20%  via-purple-500 via-75% to-pink-500 to-90%">

    <div className="flex flex-col" id="main-row">
      <div className="flex flex-row px-8 w-2/3 items-center" id="main-left">
        <div className="flex-col md:flex-row">
          <div>
            <h2 className="font-bold text-purple-600 text-5xl text-center">
              CODING
            </h2>
            is a <span className="font-bold text-pink-500 text-6xl">CRAFT</span>
            <ul className="list-decimal">
              <li>the hands-on practice of skillfully making things</li>
              {/* <img className="h-20" src={modelIcon}></img> */}
              <li>a sea, air, or space vehicle</li>
            </ul>
          </div>
          <div>
            that takes ideas from{" "}
            <span className="font-bold text-indigo-500 text-4xl">CONCEPT</span>{" "}
            to <span className="font-bold text-pink-500 text-6xl">LAUNCH</span>
          </div>
        </div>
        <p>I am a front-end focused web developer</p>
      </div>
      {/* <div className="px-4 w-1/3 items-center" id="main-right">
        <div className="grid grid-cols-1 gap-2 text-center text-4xl font-mono">
          <span className="text-indigo-500">&lt;</span>
          <span className="text-violet-500">&gt;</span>
          <span className="text-pink-500">{"${}"}</span>
          <span className="text-indigo-500">{"</>"}</span>
        </div>
      </div> */}
    </div>
  );
};

export default HomePage;
