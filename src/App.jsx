import React, {useState} from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <h1>APP</h1>
      <h2>qwe</h2>
      <span>count is {count}</span>
      <button onClick={() => setCount((c) => c + 1)}>add</button>
    </>
  )
}

export default App
