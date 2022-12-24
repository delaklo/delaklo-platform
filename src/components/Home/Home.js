import React from 'react';
import { Link } from "react-router-dom";
import "./Home.scss"
import { useSelector } from 'react-redux';
import { selectScore} from '../Exam/ExamSlice';
import Sidebar from "../Sidebar/Sidebar";

const Home = ()=>{
    
const globalScore = useSelector(selectScore);

    return(
        <div className='home__wrapper'>
            <Sidebar />
        <div className='home'>
            <div className='rightSide'>
            <div className='globalScore'>Your total score: {globalScore}</div>
        <Link to="/examjs">
         <div className='block'>
            <h2>Javascript Examination</h2>
            <p>With this quiz you can test your knowledge of JavaScript</p><br/>
            <span className='block__info'>Number of questions in  this exam: </span>12 <br/>
            <span className='block__info'>Total questions: </span>22 <br/>
            <span className='block__info'>Time duration: </span>No limit
        </div></Link>
        <div className='block'>
            <h2>Soon...</h2>
            <p>In developing....</p><br/>
            <span className='block__info'>Number of questions in  this exam: </span>12 <br/>
            <span className='block__info'>Total questions: </span>58 <br/>
            <span className='block__info'>Time duration: </span>No limit
        </div>
        <div className='block'>
            <h2>Soon...</h2>
            <p>In developing....</p><br/>
            <span className='block__info'>Number of questions in  this exam: </span>12 <br/>
            <span className='block__info'>Total questions: </span>58 <br/>
            <span className='block__info'>Time duration: </span>No limit
        </div>
        <div className='block'>
            <h2>Soon...</h2>
            <p>In developing....</p><br/>
            <span className='block__info'>Number of questions in  this exam: </span>12 <br/>
            <span className='block__info'>Total questions: </span>58 <br/>
            <span className='block__info'>Time duration: </span>No limit
        </div>
        <div className='block'>
            <h2>Soon...</h2>
            <p>In developing....</p><br/>
            <span className='block__info'>Number of questions in  this exam: </span>12 <br/>
            <span className='block__info'>Total questions: </span>58 <br/>
            <span className='block__info'>Time duration: </span>No limit
        </div>
        </div>
    </div>
</div>
    )
}

export default Home;