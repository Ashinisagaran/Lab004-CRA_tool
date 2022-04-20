import React from "react"
import Course from "./components/course"
import "./App.css"
import witCrest from "./wit_crest.png"

const App = () => {
   // Substitute your module names here.
   const modules = [
    {
      name: "WAD 2",
      noLectures: 2,
      noPracticals: 2,
    },
    {
      name: "LPoCFS",
      noLectures: 4,
      noPracticals: 0,
    },
    {
      name: "NF",
      noLectures: 2,
      noPracticals: 2,
    },
    {
      name: "DO",
      noLectures: 1,
      noPracticals: 3,
    },
    {
      name: "PP",
      noLectures: 3,
      noPracticals: 0,
    },
    {
      name: "NoSQL D",
      noLectures: 2,
      noPracticals: 2,
    }
   ];
  const name = "BSc Computer Forensic and Security - Modules table" // Substitute

  return (
    <>
      <header className="App-header">
        <img className="center" src={witCrest} alt="logo" />
      </header>
      <div className="course">
        <Course title={name} modules={modules} />
      </div>
    </>
  );
};

export default App