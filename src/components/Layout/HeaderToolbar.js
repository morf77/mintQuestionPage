import ToolButton from "../UI/ToolButton";
import classes from "./HeaderToolbar.module.css"
import {CenteralContext} from "../../CentralContext/CentralContext";
import React, {useContext} from 'react';

const HeaderToolbar= props=>{
    const ctx = useContext(CenteralContext)

    const onClickHandler = (operation)=>{
        if(operation==="Next"){
            ctx.setCurrentQuestion(ctx.currentQuestion+1);
        }else if (operation === "Previous"){
            ctx.setCurrentQuestion(ctx.currentQuestion===0 ? 0 :ctx.currentQuestion-1)
        }
    }
    

    return <div className={`${classes["header__toolbar"]}`} >
        <ToolButton text={"Previous"} onClick={onClickHandler} />
        <ToolButton text={"Next"} onClick={onClickHandler} />
    </div>
}

export default HeaderToolbar;