import React from 'react'
import { useState } from 'react'
import './App.css'

function App() {
  const [minVal,setMinVal] = useState()
  const [maxVal,setMaxVal] = useState()
  const [ranVal,setRanVal] = useState()
  const generate=() =>{
    setRanVal(Math.floor(Math.random()*(maxVal-minVal+1)+minVal))
  }
  return (
    <>
    

    <h1>Number Generator</h1>
    <div className="hero">
      <div className="rand">
        <div>Random Number:<span>{ranVal}</span></div>
      </div>
      <div className="min_max">
        <p>Min:</p>
        <input type="number" value={minVal} 
        onChange={e=>setMinVal(+e.target.value)}></input>
        <br></br>
        <p>Max:</p>
        <input type="number" value={maxVal} 
        onChange={e=>setMaxVal(+e.target.value)}></input>
      </div>
      <div className="button">
        <button onClick={generate}>Generate Number</button></div>  
    </div>
    </>
  )
}

export default App