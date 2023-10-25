import React from 'react'

export const Victory = () => {

    let results = "YOU WIN";
    let end = false;

    if (end) {
        return (
            <div className='versus__again'>
            <span className='versus__again--results'>{results}</span>
            <button className='versus__again--play'>PLAY AGAIN</button>
            </div>
        )
    }
  }
  