import React from 'react';
import img from '../images/img';



export const Score = () => {

  let score = 12;


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
