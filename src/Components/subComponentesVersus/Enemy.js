import React from 'react'
import img from '../../images/img'

export const Enemy = () => {



    const moves = ["scissor", "lizard", "paper", "rock", "spock"];
    const randomMoves = moves[Math.floor(Math.random() * moves.length)];

        return (
            <div className='versus__enemy' id='enemy'>
            <figure className={randomMoves + ' versus__player--img'}>
              <img src={img[randomMoves]} alt=""/>
            </figure>
            <span className='versus__span'>THE HOUSE PICKED</span>
          </div>
        )
  }
  