import React from "react";
import NavBar from "../components/nav";
import Header from "../components/header";

const HomePage = () => {
  console.log("HomePage rendered");
  const lang = ["EN", "FR", "ES", "IT"];
  const complang = ["JS", "TS", "JAVA", "HTML"];
  return (
    // <div className="bg-[url(./assets/boliviainteligente-8H8Y5emrdO0-unsplash-orig.jpg)] bg-cover bg-center">
    // <div className="bg-linear-to-r/hsl from-indigo-900 from-20%  via-purple-500 via-75% to-pink-500 to-90%">

    <div>
      <Header />
      <h1>This is the home page</h1>
      <h1>Stephanie S</h1>

      <div class="px-4 h-dvh"></div>
    </div>
  );
};

export default HomePage;
