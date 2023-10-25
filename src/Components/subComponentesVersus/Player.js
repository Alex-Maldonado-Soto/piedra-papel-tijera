import React from 'react'
import img from '../../images/img'

export const Player = ({attack}) => {

        return (
            <div className='versus__player' id='player'>
            <figure className={ attack + ' versus__player--img' }>
              <img src={img[attack]} alt=""/>
            </figure>
            <span className='versus__span'>YOU PICKED</span>
    
          </div>
        )
  }
  