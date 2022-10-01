import Question from "./Question";
import Aptions from "./Aptions";
import classes from "./Main.module.css";
import React from "react";

const Main = props =>{

    return <div className={`${classes.main}`}>
        <Question/>
        <Aptions  />
    </div>
}

export default Main;