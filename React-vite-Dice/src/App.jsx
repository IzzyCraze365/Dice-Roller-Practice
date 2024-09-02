import { useState } from 'react'
import DiceRoller from './components/dice-roller/DiceRoller'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <DiceRoller />
    </>
  )
}

export default App
