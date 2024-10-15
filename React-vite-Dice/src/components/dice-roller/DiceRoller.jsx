import React from 'react'
import SingleDieRoll from './SingleDieRoll'

const DiceRoller = () => {
  return (
    <>
    <div>DiceRoller</div>
    <SingleDieRoll diceSize={6}/>{/* I need to make the props passed be the die size which shouldnt be that hard*/}
    <SingleDieRoll />{/* It also needs to be the number of dice that are used*/}
    </>
  )
}

export default DiceRoller