import React from 'react'
import img from '../../images/img'

export const Enemy = ({randomMoves, attacker}) => {

    const moves = ["scissor", "lizard", "paper", "rock", "spock"];
    const move = (newMove) => {
      randomMoves(newMove);
    }

    const random = moves[Math.floor(Math.random() * moves.length)]

    if (!attacker) {
      move(random);
    }

    return (
            <div className='versus__enemy' id='enemy'>
            <figure className={attacker + ' versus__player--img'}>
              <img src={img[attacker]} alt=""/>
            </figure>
            <span className='versus__span'>THE HOUSE PICK HERE</span>
          </div>
        )
  }
  