import classes from "../UI/QuestionAption.module.css";
import React, { useState } from 'react';


const QuestionAption= props=>{
    const[judje,isToggled]=useState("")

    const clickHandler = ()=>{

        if(props.answear[parseInt(props.num)]===true){
            isToggled("right");
            props.onClick(props.num,1)

        }else{
            isToggled("rong");
            props.onClick(props.num,2)
        }
    }
    if((props.answear[props.num]!==true && judje==="right") || (props.showFalseAnswear!==props.num && judje==="rong" && props.showFalseAnswear!== false)){
        isToggled("")
    }
    if(props.ShowTrueAnswear && props.answear[props.num]===true && judje!=="right"){
        isToggled("right")
    }else if(props.showFalseAnswear===props.num && props.answear[parseInt(props.num)]!==true && judje !=="rong"){
        isToggled("rong")
    }else if (!props.ShowTrueAnswear && (judje==="rong" || judje==="right")){
        isToggled("")
    }

    return <button className={`${classes["question-option"]} ${classes[judje]}`} onClick={clickHandler} disabled={props.isDisabled}>
        {props.text}
    </button>;
};

export default QuestionAption;