import classes from "./ToolButton.module.css"
import React from "react"


const ToolButton = props =>{

    const innerClickHandler = ()=>{
        props.onClick(props.text)
    }

    return (<button className={`${classes["Chart__button"]}`} onClick={innerClickHandler} >
        <span>{props.text}</span>
    </button>)
}

export default ToolButton;