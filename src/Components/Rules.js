import React from 'react'
import img from '../images/img'

export const Rules = () => {
  return (
    <section className="rules">
        <h2 className='rules__title'>RULES</h2>
          <figure className='rules__img'>
            <img src={img.rules} alt='Reglas del juego'/>
          </figure>
          <figure className='rules__close'>
            <img src={img.close} alt='cerrar menu de reglas'/>
          </figure>
    </section>
  )
}
