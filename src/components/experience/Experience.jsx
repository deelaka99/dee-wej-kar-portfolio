import React from 'react'
import "./experience.css";
import { themeContext } from '../../Context';
import { useContext } from "react";

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='experience' id='Experience'>
      <div className="achievement">
        <div className="circle" style={{color:darkMode?'black':''}}>4+</div>
        <span>Years</span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color:darkMode?'black':''}}>4+</div>
        <span>Completed</span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color:darkMode?'black':''}}>2+</div>
        <span>Companies</span>
        <span>Work</span>
      </div>
    </div>
  )
}

export default Experience
