import React from 'react';
import "./card.css";

const Card = ({emoji, heading, detail}) => {
  return (
    <div className='card'>
      <img src={emoji} alt="emoji" />
      <span>{heading}</span>
      <span>{detail}</span>
      <button className="c-button">LEARN MORE</button>
    </div>
  )
}

export default Card
