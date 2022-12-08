import React from 'react';
import { Link } from "react-router-dom";
import "./Home.scss"
import { useSelector } from 'react-redux';
import { selectScore} from '../Exam/ExamSlice';

const Home = ()=>{
    
const globalScore = useSelector(selectScore);

    return(
        <div>
            <div className='globalScore'>Your total score: {globalScore}</div>
        <Link to="/examjs"><button className='btn'>js Exam</button></Link>
        </div>
    )
}

export default Home;