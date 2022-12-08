import React, { useEffect, useState, useMemo } from 'react';
import { allQuestions } from './questions';
import { Link } from "react-router-dom";

import './Exam.scss';
import CodeBlock from './CodeBlock';
import { useDispatch, useSelector } from 'react-redux';
import { selectScore, setGlobalScore } from './ExamSlice';

const Exam = ()=>{

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [questions, setQuestions] = useState(shuffleQuestions(allQuestions));
    const [answers, setAnswers] = useState([]);
    const [correctAnswers, setCorrectAnswers] = useState([]);

    const globalScore = useSelector(selectScore);
    const dispatch = useDispatch();

  

    const handleClick = (isCorrect, answerText, array)=>{
        if(isCorrect){
            setScore(score+1);
            
            setCorrectAnswers([...correctAnswers, answerText])
        }else{
            for(let i=0;i<array.length;i++){
                if(array[i].isCorrect){
                    setCorrectAnswers([...correctAnswers, array[i].answerText]);
                    break;
                }
            }
        }
        setAnswers([...answers, answerText]);
        const nextQuestion = currentQuestion+1;
        nextQuestion < questions.length 
        ?
        setCurrentQuestion(currentQuestion+1) 
        :
        setShowScore(true);

    }

    const reset = ()=>{
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
        setQuestions(shuffleQuestions(allQuestions))
        setAnswers([]);
        setCorrectAnswers([]);
        dispatch(setGlobalScore(score));
    }

    const exit = ()=>{
        dispatch(setGlobalScore(score));
    }

    function shuffleQuestions (list){
        let res = Array.from(list);
        let len = list.length;
        while (len) {
          const i = Math.floor(Math.random() * len--);
          [res[len],res[i]] = [res[i], res[len]];
        }
        res = res.slice(0, 5)
        return res;
      }

    return(
         <div className='exam'>
         {showScore ?   
         <div className='exam__end'>
            <div className='result__buttons'>
                <p className='result__score'>Your Score: {score} / 5</p>
                <button className='answer__btn' onClick={reset}>
                Try Again
                </button>
                <Link to="/"><button className='answer__btn' onClick={exit}>
                    Back to Home
                </button>
                </Link>
                </div>
                {questions.map((el, index)=>(
                    <div className='exam__result__wrapper'>
                <div className='exam__result'>
                    <div className='question__block'>
                    {questions[index].questionText}
                    <CodeBlock id={questions[index].id} />
                    </div>
                    <div className='result__answers'>
                   Your answer was ' {answers[index]} '<br/>
                    Correct answer is ' {correctAnswers[index]} '
                   </div>
                   <div className='exam__explanation'>{questions[index].explanation}</div>
                    </div> 
                    </div>
                ))}
            </div>

            :
            <>
            <div className='exam__question'>
                <div className='question__count'>
                    <span>{currentQuestion + 1}</span> / 5
                </div>
                <div className='question__text'>{questions[currentQuestion].questionText}</div>
                <div><CodeBlock id={questions[currentQuestion].id} /></div>
            </div>
            <div className='exam__answer'>
                {questions[currentQuestion].answerOptions.map(el=>(
                    <button className='answer__btn'
                    onClick={()=>handleClick(el.isCorrect, el.answerText, questions[currentQuestion].answerOptions)}>
                        {el.answerText}
                    </button>
                ))}
                </div>
                </>
        }
            </div>

    )
}

export default Exam;