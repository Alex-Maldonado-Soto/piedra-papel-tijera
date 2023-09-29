import React from 'react'
import img from '../images/img'

export const Select = () => {
  return (
    <section className="select">
      <figure className='select__scissors'>
       <img src={img.scissor} alt=""/>
      </figure>
      <figure className='select__paper'>
       <img src={img.paper} alt=""/>
      </figure>
      <figure className='select__rock'>
       <img src={img.rock} alt=""/>
      </figure>
      <figure className='select__lizard'>
       <img src={img.lizard} alt=""/>
      </figure>
      <figure className='select__spock'>
       <img src={img.spock} alt=""/>
      </figure>
      <figure className='select__pentagon'>
       <img src={img.pentagon} alt=""/>
      </figure>
    </section>
  )
}
