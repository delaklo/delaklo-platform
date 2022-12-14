import React, {useState} from 'react';
import SvgComponentHome from "../../img/SvgComponentHome";
import { Link } from "react-router-dom";
import "./Sidebar.scss";
import SvgPlayground from '../../img/SvgPlayground';
import SvgDiscussions from '../../img/SvgDiscussions';

const Sidebar = ()=>{


    const [isShown, setIsShown] = useState(false);




    return(
        <div className={isShown ? "sidebar_full" : "sidebar"}
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        >
        <div className='sidebar__icons'>

        <Link to="/"><SvgComponentHome height="40px" width="40px" /></Link>
        <Link to="/404"><SvgPlayground height="40px" width="40px" /></Link>
        <a href='https://github.com/delaklo/delaklo-platform/discussions' target="_blank"  rel="noreferrer">
            <SvgDiscussions height="36px" width="36px" />
            </a>
        </div>
              {isShown && (
        <div className='sidebar__desc'>
            <Link to="/">
                <div className='position'>
                <span className='position__header'>Home</span><br/>
                <span className='position__text'>Complete the exam test in the <br/>
                language you are learning.</span></div></Link>
                <Link to="/404">
            <div className='position'>
            <span className='position__header'>Playground</span><br/>
            <span className='position__text'>Experiment with code, create code snippets</span></div>
            </Link>
            <a href='https://github.com/delaklo/delaklo-platform/discussions' target="_blank"  rel="noreferrer">
            <div className='position'>
            <span className='position__header'>Discussion</span><br/>
            <span className='position__text'>Join our Github Discussions board <br/>
             to discuss something interesting</span>
            </div>
        </a>
            
        </div>
      )}
      </div>
    )
}

export default Sidebar;