import React, { useState } from 'react'
import img from '../images/img'

export const Rules = () => {

  const [open, setOpen] = useState('close');

  const state = (nuevoNombre) => {
    setOpen(nuevoNombre);
}

  if (open === 'open') {
    return (
      <section className="rules">
          <h2 className='rules__title'>RULES </h2>
            <figure className='rules__img'>
              <img src={img.rules} alt='Reglas del juego'/>
            </figure>
            <figure className='rules__close'>
              <img src={img.close} onClick={() => state('close')} alt='cerrar menu de reglas'/>
            </figure>
      </section>
    )
  } else {
    return (
      <button className="button" onClick={() => state('open')} id="rulesButton">RULES</button>
    )
  }

}
