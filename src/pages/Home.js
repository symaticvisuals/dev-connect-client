import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    minHeight: "100vh",
    },
  //create custom keyword for class styling 
}));
function Home() {
  const classes = useStyles();
  return <div className={classes.root}></div>;
}

export default Home;
