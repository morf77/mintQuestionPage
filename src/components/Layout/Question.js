import classes from "./Question.module.css"
import {CenteralContext} from "../../CentralContext/CentralContext";
import React, {useContext} from 'react';


const Question = props=>{
    const ctx = useContext(CenteralContext)

    
    return <div className={`${classes.Question}`}><h2>{ctx.presentQuestion.question}</h2></div>
}

export default Question;