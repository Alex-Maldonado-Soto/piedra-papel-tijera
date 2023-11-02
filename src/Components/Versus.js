import React, { useState } from 'react'
import { Victory } from './subComponentesVersus/Victory';
import { Player } from './subComponentesVersus/Player';
import { Enemy } from './subComponentesVersus/Enemy';

export const Versus = ({attack, moveEnemy, attackEnemy}) => {

  const randomMoves = (newMove) => {
    moveEnemy(newMove)
  }

  if (attack) {

    return (
      <section className="versus">
      <Player attack={attack}/>
      <Enemy randomMoves={randomMoves} attacker={attackEnemy}/>
      <Victory/>
      </section>
    )
  }
}
