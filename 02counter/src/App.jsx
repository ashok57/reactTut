import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  //hooks :
  let [counter, setCounter] = useState(5)
//  counter is the variable here and the setcounter is the function in the above hook and this is the representation of the hook  
  // let counter  = 5

  const addValue = () => {

    // if(counter < 20){
    // counter +=1
    setCounter(prevCounter => prevCounter +1);
    setCounter(prevCounter => prevCounter +1);
    setCounter(prevCounter => prevCounter +1);
    setCounter(prevCounter => prevCounter +1);
    // setCounter(counter)
    // console.log("Clicked", counter);
  // }
}


  const removeValue = () => {
    if(counter > 0){
      setCounter(counter - 1)
    }
  }

  return (
    <>
    <h1>chai or react</h1>
    <h2>counter value : {counter}</h2>

    <button
    onClick={addValue}
    >Add Value {counter}</button>
    <br />

    <button
     onClick={removeValue}
    >Remove Value {counter}</button>

    <p>footer: {counter}</p>
    
    </>
  )
}

export default App
