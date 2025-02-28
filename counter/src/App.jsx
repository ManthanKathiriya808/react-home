import { useState } from 'react'
import './App.css'

function App() {
const [ count, addCount] = useState(10)
 
  const addValue= ()=>{
    if(count <20){
      addCount(count+1)
    }
    // console.log(counter)
  }
 
  const decValue= ()=>{
    if(count >0){
      addCount(count-1)
    }
    // console.log(counter)
  }

  return (
    <>
        <h1>chain or react</h1>
        <h2>counter value : {count}</h2>
        <button className="btn btn-danger btn-lg me-3" onClick={addValue}>Add Value</button>
        <button className="btn btn-dark btn-lg"  onClick={decValue}>REmove Value</button>
    </>
  )
}

export default App
