import React from 'react'

export const Victory = ({winner}) => {

        return (
            <div className='versus__again'>
            <span className='versus__again--results'>{winner}</span>
            <button className='versus__again--play' id=''>PLAY AGAIN</button>
            </div>
        )

  }
  