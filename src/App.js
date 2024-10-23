import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ["Josim", "Deepjol", "Bappa Raz"];
  return (
    <div className="App">
      <MovieCounter></MovieCounter>
      <Nayok name={nayoks[1]} age="56"></Nayok>
      <Nayok name="Shakib Khanna"></Nayok>
      <Nayok name={nayoks[0]}></Nayok>
      <Nayok></Nayok>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>hello World</h1>
      </header>
    </div>
  );
}

function MovieCounter(){
  const [count, setCount] = useState(0);
  return (
    <div>
      <button style={{marginTop: '10px'}} className="counter-button">Add Movie</button>
      <h5>Number of Movies: {count}</h5>
    </div>
  );
}

function Nayok(props){

  const nayokStyle = {
    border: '2px solid purple',
    margin: '10px',
  } 

  return (
    <div style={nayokStyle}>
      <h1>Ami Nayok-{props.name}</h1>
      <p>I have done 5 movies in {props.age || 30} years</p>
  </div>
  );
}

export default App;
