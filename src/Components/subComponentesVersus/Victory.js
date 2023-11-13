import React from 'react'

export const Victory = ({winner, gameOver}) => {

    const end = (newMove) => {
        gameOver(newMove);
      }


        return (
            <div className='versus__again'>
            <span className='versus__again--results'>{winner}</span>
            <button className='versus__again--play' onClick={() => end(false)}>PLAY AGAIN</button>
            </div>
        )

  }
  