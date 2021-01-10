import React, { useState, useEffect } from 'react'
import Input from './components/input/Input'
import Circle from './components/circle/Circle';


function App() {
  const [text, setText] = useState("Circle Name");
  const [disabled, setDisabled] = useState(false);
  const [brokenCounter, setBrokenCounter] = useState(0)
  const [litCounter, setLitCounter] = useState(0)


  const handleEdit = (e) => {
    e.preventDefault();
    if (e.target.name === "name") {
      setText(e.target.value)
    };
    if (text.length >= 15) {
      setDisabled(true)
    }
  }

  const handleCounter = (e) => {
    e.preventDefault();
    if (e.target.name === 'increaseBroken') {
      if(brokenCounter<8) {
        setBrokenCounter(brokenCounter+1)
      }
    } else if (e.target.name === 'decreaseBroken') {
      if(brokenCounter>0){
        setBrokenCounter(brokenCounter-1)
      }
    } else if (e.target.name === 'increaseLit') {
      if(litCounter<8) {
        setLitCounter(litCounter+1)
      }
    } else if (e.target.name === 'decreaseLit') {
      if(litCounter>0){
        setLitCounter(litCounter-1)
      }
    };
  }

  const handleReset = (e) => {
    e.preventDefault();
    setText('Circle Name');
    setBrokenCounter(0)
    setLitCounter(0)
  }

  return (
    <div className="container-fluid d-flex p-0 app">
      <div className="input pt-5 pr-5">
        <Input
          handleEdit={handleEdit}
          disabled={disabled}
          handleReset={handleReset}
          brokenCounter={brokenCounter}
          handleCounter={handleCounter}
          litCounter={litCounter}
        />
      </div>
      <div>
        <Circle 
        text={text} 
        brokenCounter={brokenCounter}
        litCounter={litCounter}
        />
      </div>
    </div>

  );
}

export default App;
