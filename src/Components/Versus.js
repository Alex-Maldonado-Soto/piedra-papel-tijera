import React from 'react'
import img from '../images/img'

export const Versus = ({attack}) => {

  let results = "YOU WIN";


  if (attack) {

    return (
      <section className="versus">
        <div className='versus__player' id='player'>
          <figure className={ attack + ' versus__player--img' }>
            <img src={img[attack]} alt=""/>
          </figure>
          <span className='versus__span'>YOU PICKED</span>
  
        </div>
        <div className='versus__enemy' id='enemy'>
          <figure className='scissor versus__enemy--background'>
            <img src={img.scissor} alt=""/>
          </figure>
          <span className='versus__span'>THE HOUSE PICKED</span>
        </div>

          <div className='versus__again'>
          <span className='versus__again--results'>{results}</span>
            <button className='versus__again--play'>PLAY AGAIN</button>
          </div>

      </section>
    )
  }
}
