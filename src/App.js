import React from 'react'
import { useState } from 'react'
import './App.css'



function App() {
  const [value, setValue,] = useState(2)
  const [password, setPassword] = useState("");

  const  genPassword = () => {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = value;
    let password = "";
  
    for (let i = 0; i < passwordLength; i++) {
      const randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber + 1);
    }
     return password;
  }

      const handleClick = () => {
        setPassword(genPassword());
      }


  return (
    <div className='container'>
    <h1>Password Generator</h1>
      <div className='sub-container'>
    <input className='result' value={password}/>
        
        <div className='length'>Password Length:<span>{value}</span></div>
      <input type='range' className='range' max={14} value={value} onChange={((e)=>setValue(e.target.value))} />
      <br></br>
  <button className='generate' onClick={handleClick}>Generate</button>
  </div>
    </div>
  )
}

export default App