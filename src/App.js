import { useContext } from 'react';
import './App.css';
import Jatekter from './components/Jatekter';
import { KattContext } from './context/KattContext';

function App() {
  // itt akarjuk használni a listát, useContext hook segítségével
  const {lista}= useContext(KattContext)

  return (
    <div className="App">
      <header className="App-header">
        <h1>TicTacToe</h1>
      </header>
      <article>
          <Jatekter lista={lista}/>
      </article>
      <footer><p>Horváth Nauzika</p></footer>
    </div>
  );
}

export default App;
