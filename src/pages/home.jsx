import React from "react";
import NavBar from "../components/nav";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <h1>This is the home page</h1>
      <h1>Stephanie S</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
};

export default HomePage;
