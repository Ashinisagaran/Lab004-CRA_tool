import React from "react";
import Course from "./components/courseMUI"
import witCrest from "./wit_crest.png";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  appHeader: {
    backgroundColor: "lightblue",
    height: "120px",
    padding: "10px",
    color: "white",
  },
  course: {
    padding: "10px",
  },
});

const App = () => {
  const classes = useStyles();
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
  const name = "BSc Computer Forensic and Security - Modules table";

  return (
    <>
      <header className={classes.appHeader}>
        <img src={witCrest} alt="logo" />
      </header>
      <Box className={classes.course}>
        <Course title={name} modules={modules} />
      </Box>
    </>
  );
};
export default App;