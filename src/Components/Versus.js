import React, { useState } from 'react'
import { Victory } from './subComponentesVersus/Victory';
import { Player } from './subComponentesVersus/Player';
import { Enemy } from './subComponentesVersus/Enemy';

export const Versus = ({attack, moveEnemy, attackEnemy, battle, winner, piece}) => {

  const randomMoves = (newMove) => {
    moveEnemy(newMove)
  }

  const gameOver = (newMove) => {
    piece(newMove);
    battle(newMove);
  }

  if (attack) {

    return (
      <section className="versus">
      <Player attack={attack}/>
      <Enemy randomMoves={randomMoves} attacker={attackEnemy} attack={attack}/>
      <Victory winner={winner} gameOver={gameOver}/>
      </section>
    )
  }
}
