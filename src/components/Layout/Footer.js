import classes from "./Footer.module.css"
import {CenteralContext} from "../../CentralContext/CentralContext";
import React, { useContext, useState } from 'react';
import ToolButton from "../UI/ToolButton";

const Footer= props =>{
    const ctx = useContext(CenteralContext)
    const [hinter,setHinter]=useState([])
    
    const onClickHandler = ()=>{
        setHinter([<h1 key="hint">{ctx.hint}</h1>])
        setTimeout(()=>{setHinter([])},3000)
    }
    
    return <footer className={`${classes.footer}`}>
        {hinter}
        <ToolButton text={"HINT"}  onClick={onClickHandler} />

    </footer>
}

export default Footer;