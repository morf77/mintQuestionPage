import React, { createContext, useState, useEffect } from "react";
import useHttp from "../components/Hooks/use-http";

// creating context
const CenteralContext = createContext();


// declaring centralContextProvider as a wraper and holding important data in it
const CenteralContextProvider = ({ children }) => {
    // these states are being used for controlling components
    const [questions, setQuestions] = useState();
    const [currentQuestion , setCurrentQuestion] = useState(0);
    const [presentQuestion , setPeresentQuestion] = useState({});
    const [lastQuestion , setLastQuestion] = useState(0) 
    const [score , setScore] = useState(0)
    const [hint , hintShower] = useState("")
    const hintArray = [
        "The questions and answers are very close",
        "The answer is relatively close to the question",
        "The answer is relatively far from the question",
        "The answer is far from the question"
    ]
    // this function is being used for changing format of custom hook out put obect
    const questionReader = (obj)=>{
        let trueAnswear= [false,false,false,false];
        trueAnswear[Math.floor(Math.random()*3)]=true;
        return {
            question : obj.question,
            options : obj.options.split(/\r?\n/),
            answear : trueAnswear,
            answeared : false,
            selectedOption : undefined,
            result: 0
        }
    }

    // this hook is a custom hook for reciving data from server
    const {isLoading, error, sendRequest: fetchQuestions} = useHttp();

    // used effect hook delared here for using useHtto hook
    useEffect(()=>{
        const transformQuestions = questionOBJ =>{
            const loadedQuestions = [];
            for (const questionKey in questionOBJ){
                loadedQuestions.push({ id:questionKey, question: questionOBJ[questionKey].title, options: questionOBJ[questionKey].body})
            }
            setQuestions(loadedQuestions.map(questionReader));
        };
    
        fetchQuestions({url: "https://jsonplaceholder.typicode.com/posts"},transformQuestions);
  
    }, [fetchQuestions]);
  

    // this useEffect hook is here for managing the present question for showing on other components
    useEffect(()=>{
        if(isLoading){
            setPeresentQuestion({question : "Loading"});
        }
        if(error){
            setPeresentQuestion({question : "A problem accured during the loading"})
        }
        if(questions){
            setPeresentQuestion(questions[currentQuestion])
        }
    },[questions,currentQuestion,isLoading,error]);

    // this useEffect hook is here for updating lastQuestion variable
    useEffect(()=>{
        if(currentQuestion>lastQuestion){
            setLastQuestion(currentQuestion);
        }
    },[currentQuestion,lastQuestion])

    // calculating score for header
    useEffect(()=>{
        if(questions ){
            let j;
            let sum=0;
            for(let i=0 ; i<=lastQuestion ; i++){
                j=0;
                if(questions[i].result===1){j=1}
                sum=sum+j
            }
            setScore(sum);
        }
    },[questions,lastQuestion])

    // showing hint for footer
    useEffect(()=>{
        if(questions && presentQuestion.question!=="Loading"){
            console.log(questions,presentQuestion)
            for(let i=0; i<4 ; i++ ){
                if(presentQuestion.answear[i]===true){
                    hintShower(hintArray[i]);
                }
            }
        }
    },[questions,presentQuestion])
    console.log(hint)

  return (
    <CenteralContext.Provider value={{
        presentQuestion,
        questions,
        currentQuestion,
        lastQuestion,
        score,
        hint,
        setCurrentQuestion,
        setQuestions,
        setLastQuestion
      }}>
      {children}
    </CenteralContext.Provider>
  );
};

export { CenteralContext, CenteralContextProvider };