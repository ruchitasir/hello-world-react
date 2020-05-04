import React from 'react';
import './App.css';
import Hello from './Hello'
import Yello from './world'
import LovelyDay from './LovelyDay'

function App(props) {
  return (
    <div className="App">
      <h3>Hey </h3>
      <Hello />
      <Yello />
      <LovelyDay/>
      <LovelyDay/>
      <LovelyDay/>
      <hr/>
     <footer> {props.footer}  </footer> 
    </div>
  );
}

export default App;
