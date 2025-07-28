import React from "react";
import NavBar from "../components/NavBar";
import modelIcon from "../../public/assets/modeling_flaticon.png";
import knittingImage from "../assets/Gemini_Generated_Image_knitting.png";

const HomePage = () => {
  console.log("HomePage rendered");
  const lang = ["EN", "FR", "ES", "IT"];
  const complang = ["JS", "TS", "JAVA", "HTML"];
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
          <div className="text-gray-500 text-lg mt-2 w-1/2">
            I am a frontend-focused developer who strives to craft beautiful,
            functional web applications. With a background in education and
            interpreting, I am passionate about making digital resources
            accessible to all users.
          </div>
        </div>
      </div>
      {/* <div className="px-4 w-1/3 items-center" id="main-right">
        <div className="grid grid-cols-1 gap-2 text-center text-4xl font-mono">
          <span className="text-indigo-500">&lt;</span>
          <span className="text-violet-500">&gt;</span>
          <span className="text-pink-500">{"${}"}</span>
          <span className="text-indigo-500">{"</>"}</span>
        </div>
      </div> */}
    </main>
  );
};

export default HomePage;
