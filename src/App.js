import React, {useState} from 'react'
import Circle from './components/circle/Circle';


function App() {

  const [text, setText] = useState("Circle Name");



  return (
    <div className="container-fluid d-flex p-0 app">
        <Circle text={text}/>
    </div>
  );
}

export default App;
