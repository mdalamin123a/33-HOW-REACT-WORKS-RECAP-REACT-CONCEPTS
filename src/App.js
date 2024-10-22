import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nayok></Nayok>
      <Nayok></Nayok>
      <Nayok></Nayok>
      <Nayok></Nayok>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>hello World</h1>
      </header>
    </div>
  );
}

function Nayok(){

  const nayokStyle = {
    border: '2px solid purple',
    margin: '10px',
  } 
  return <div style={nayokStyle}>
    <h1>Ami Khol Nayok</h1>
    <p>I have done 5 movies</p>
  </div>
}

export default App;
