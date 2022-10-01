import RightOrRong from "../UI/RightOrRongButton";
import classes from "./Chart.module.css"
import {CenteralContext} from "../../CentralContext/CentralContext";
import React, {useContext} from 'react';


const Chart= props=>{
    const ctx = useContext(CenteralContext)
    const items = [];
    let j = 5*Math.floor((ctx.lastQuestion+1)/5.0001)

    for(let i = 0 ; i<props.number ; i++){
        items.push(<RightOrRong key={`RightOrRong${i}`} itemIndex={`${i}`} Identifier={ctx.questions!==undefined ? ctx.questions[j+i].result : 0 } />)
    }


    return (<div className={`${classes["chart__container"]}`} >
        <div className={`${classes["chart__line"]}`}  ></div>
        <div className={`${classes["chart__line"]}`} style={{background: "#02c6db" , width:`${((ctx.lastQuestion-j)/4*100)+"%"}`}} ></div>
        {items}
    </div>)
}

export default Chart;