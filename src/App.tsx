import React, {useState} from 'react'
import '@/index.scss'
import {Demo} from "./constant"

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>APP demo 3 5 7</h1>
      <h2>{Demo.first}</h2>
      <span>count is {count}</span>
      <button className='button' onClick={() => setCount((c) => c + 1)}>add</button>
    </>
  )
}

export default App
