import React from 'react'
import SingleDieRoll from './SingleDieRoll'

const DiceRoller = () => {
  return (
    <>
    <div>DiceRoller</div>
    <SingleDieRoll />{/* I need to make the props passed be the die size */}
    </>
  )
}

export default DiceRoller