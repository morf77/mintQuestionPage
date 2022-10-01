import classes from "./RightOrRong.module.css";
import React from "react";
// import React ,{useState} from 'react';

const RightOrRong = props =>{
    // [identifier,setIdentifier]=useState("notAnsweard")
    let Identifier = "notAnsweared";


    if(props.Identifier===1){
        Identifier="true"
    }else if(props.Identifier===2){
        Identifier="false"
    }


    return <div
     className={`
     ${classes[`background-${Identifier}`]} 
     ${classes["chart__result-icon"]}`
    }></div>
}

export default RightOrRong;