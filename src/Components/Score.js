import React, { useState } from 'react';
import img from '../images/img';



export const Score = ({winner}) => {


  let [score, setScore] = useState(1000);

  const points = (newScore) => {
    setScore(newScore)
  }


if(!score) {
  if (winner === "WINNER") {
    points(score++)
  } else if (winner === "DEFEAT") {
    points(score--)
  }
}

  return (

    <header className="score">
      <figure className='score__figure'>
        <img src={img.logo} alt=""/>
      </figure>
      <div className='score__points'>
        <span className='score__points--title'>SCORE</span>
        <span className='score__points--point'>{score}</span>
      </div>

  
        </header>
  )
}
