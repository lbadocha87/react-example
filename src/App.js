import React, { useState, useEffect } from 'react';
import './App.css';

import ClassExample from './ClassExample';

function App() {

  const [buttonDisplay, setButtonDisplay] = useState(true);
  const [buttonClass, setButtonClass] = useState('');

  useEffect(()=>{
    console.log('jestem w hooku efektu');
    setButtonClass('bg-green');
  }, [buttonDisplay]);

  return (
    <div className="App">

      {buttonDisplay ? <ClassExample /> : null} 
  
      <button onClick={()=>setButtonDisplay(false)}>Usuń drugi button</button>
      <button className={buttonClass} onClick={()=>setButtonClass('bg-blue')}>Zmieniam tło</button>
    </div>
  );
}

export default App;
