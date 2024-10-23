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
  let [count, setCount] = useState(0);

  const handleclick = () => setCount(count + 1);

  return (
    <div>
      <button style={{marginTop: '10px'}} className="counter-button" onClick={handleclick}>Add Movie</button>
      <h5>Number of Movies: {count}</h5>
      <MovieDisplay movies={count}></MovieDisplay>
      <MovieDisplay movies={count + 10}></MovieDisplay>
      <MovieDisplay movies={count + 5}></MovieDisplay>
      <MovieDisplay movies={count}></MovieDisplay>
    </div>
  );
}

function MovieDisplay(props){
  return (
    <div>
      <h4>Movies I have acted: {props.movies} </h4>
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
