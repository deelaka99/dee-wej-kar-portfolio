import React from 'react';
import "./card.css";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Card = ({emoji, heading, detail}) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='card'>
      <img src={emoji} alt="emoji" />
      <span>{heading}</span>
      <span style={{color:darkMode?"white":""}}>{detail}</span>
      <button className="c-button">LEARN MORE</button>
    </div>
  )
}

export default Card
