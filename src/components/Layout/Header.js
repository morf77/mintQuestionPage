import Chart from './Chart'
import HeaderToolbar from './HeaderToolbar';
import classes from "./Header.module.css"
import {CenteralContext} from "../../CentralContext/CentralContext";
import React, { useContext } from 'react';

const Header= props =>{
    let headerText="welcome"
    const ctx = useContext(CenteralContext)
    if(ctx.lastQuestion>0){
        headerText=`SCORE : ${ctx.score}`
    }
    return <header className={`${classes.Header}`}>
        <Chart number={5} />
        <h1 className={`${classes.Header__title}`}>{headerText}</h1>
        <HeaderToolbar />
    </header>
}

export default Header;