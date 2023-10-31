import React, { useState } from 'react'
import { Victory } from './subComponentesVersus/Victory';
import { Enemy } from './subComponentesVersus/Enemy';
import { Player } from './subComponentesVersus/Player';

export const Versus = ({attack, moveEnemy}) => {


  const pieceEnemy = (newMove) => {
    moveEnemy(newMove)
  }


  if (attack) {

    return (
      <section className="versus">
      <Player attack={attack}/>
      <Enemy attackEnemy={moveEnemy}/>
      <Victory/>
      </section>
    )
  }
}
