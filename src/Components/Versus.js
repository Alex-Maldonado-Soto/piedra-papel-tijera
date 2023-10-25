import React, { useState } from 'react'
import { Victory } from './subComponentesVersus/Victory';
import { Enemy } from './subComponentesVersus/Enemy';
import { Player } from './subComponentesVersus/Player';

export const Versus = ({attack}) => {

  let results = "YOU WIN";

  const [attackEnemy, setAttack] = useState("");

  const pieceEnemy = (newMove) => {
    setAttack(newMove)
  }


  if (attack) {

    return (
      <section className="versus">
      <Player attack={attack}/>
      <Enemy attackEnemy={attackEnemy}/>
      <Victory/>
      </section>
    )
  }
}
