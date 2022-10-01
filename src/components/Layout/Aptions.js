import QuestionAption from "../UI/QuestionAption"
import classes from "./Aptions.module.css"
import {CenteralContext} from "../../CentralContext/CentralContext";
import React, {useContext , useState , useCallback, useEffect} from 'react';


const Aptions = props=>{
    const[isDisabled,disabler]=useState(false)
    const[ShowTrueAnswear,Shower]=useState(false)
    const[showFalseAnswear,setFalse]=useState(false)
    const ctx = useContext(CenteralContext)
    let currentSituation = ctx.currentQuestion;
    

    useEffect(()=>{
        if(ctx.questions!==undefined && ctx.presentQuestion.answeared===true){
            Shower(true)
            disabler(true)
            setFalse(ctx.presentQuestion.selectedOption)
        }   
        return ()=>{
            Shower(false);
            disabler(false);
            setFalse(false)
        }
    },[currentSituation,ctx.questions,ctx.presentQuestion.answear])

    const clickHandler= useCallback((action,result)=>{
        let newQuestions = ctx.questions;
        let currentQuestion = {
            ...ctx.presentQuestion,
            answeared : true,
            selectedOption : action,
            result: result,
        }
        newQuestions[ctx.currentQuestion] = currentQuestion ;
        disabler(true);
        Shower(true)
        setTimeout(()=>{
            ctx.setQuestions(newQuestions);
            ctx.setCurrentQuestion(ctx.currentQuestion+1);
            disabler(false);
            Shower(false);
        },1000)},[ctx])



    if(ctx.presentQuestion.options){
        return <div className={`${classes["main__Aptions"]}`}>
        <QuestionAption text={ctx.presentQuestion.options[0]} num={"0"} answear={ctx.presentQuestion.answear} onClick={clickHandler} isDisabled={isDisabled} ShowTrueAnswear={ShowTrueAnswear} showFalseAnswear={showFalseAnswear} />
        <QuestionAption text={ctx.presentQuestion.options[1]} num={"1"} answear={ctx.presentQuestion.answear} onClick={clickHandler} isDisabled={isDisabled} ShowTrueAnswear={ShowTrueAnswear} showFalseAnswear={showFalseAnswear} />
        <QuestionAption text={ctx.presentQuestion.options[2]} num={"2"} answear={ctx.presentQuestion.answear} onClick={clickHandler} isDisabled={isDisabled} ShowTrueAnswear={ShowTrueAnswear} showFalseAnswear={showFalseAnswear} />
        <QuestionAption text={ctx.presentQuestion.options[3]} num={"3"} answear={ctx.presentQuestion.answear} onClick={clickHandler} isDisabled={isDisabled} ShowTrueAnswear={ShowTrueAnswear} showFalseAnswear={showFalseAnswear} />
    </div>
    }
}

export default Aptions;