import logo from './logo.svg';
import './App.css';

function HolaMundo(nombre, edad){
  var presentacion =<div>
  <h2>{nombre}</h2>
  <h2>Mi edad actual es {edad}</h2>
  </div>

  return presentacion;
}

function App() {
  var nombre = 'Rafael Torres';
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola Bienvenidos Alumnps DPS mi nombre es  {HolaMundo(nombre,35)}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
