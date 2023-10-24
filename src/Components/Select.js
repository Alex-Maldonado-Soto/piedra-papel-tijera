import React from 'react'
import img from '../images/img'

export const Select = ({piece, attack}) => {

  const move = (newMove) => {
    piece(newMove);
  }

  if (!attack) {
    
  return (
    <section className="select">
      <figure className='select__scissors' id='scissors'>
       <img src={img.scissor} onClick={() => move("scissor")} alt="select scissor"/>
      </figure>
      <figure className='select__paper' id='paper'>
       <img src={img.paper} onClick={() => move("paper")} alt="select paper"/>
      </figure>
      <figure className='select__rock' id='rock'>
       <img src={img.rock} onClick={() => move("rock")} alt="select rock"/>
      </figure>
      <figure className='select__lizard' id='lizard'>
       <img src={img.lizard} onClick={() => move("lizard")} alt="seelct lizard"/>
      </figure>
      <figure className='select__spock' id='spock'>
       <img src={img.spock} onClick={() => move("spock")} alt="select spock"/>
      </figure>
      <figure className='select__pentagon' id='pentagon'>
       <img src={img.pentagon} alt="select pentagon"/>
      </figure>
    </section>
  )
  }

}

