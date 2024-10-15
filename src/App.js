import { useState } from 'react';
import './App.css';
import Jatekter from './components/Jatekter';

function App() {
  // react state-k -> Leírja a program állapotát. Ha a state-ben megadott változó értéke változik, akkor a react frissíti az oldal tartalmát azon a részen, amelyik a változótól függ
  // statek létrehozásához useState hook-ot használunk, ami egy beállító függvény
  const [lista, setLista]=useState([
    " ", 
    " ", 
    " ", 
    " ", 
    " ", 
    " ", 
    " ", 
    " ", 
    " "
  ]);
  const [lepes, setLepes]=useState(0);

  function katt(adat){
    // itt akarjuk lekezelni, hogy melyik elemre kattintottunk és mit írjunk a listába
    lista[adat] = "X";
    // stateket közvetlenül nem módosíthatjuk, csak a beállítófüggvényen keresztül
    // 1. másolatot készítünk az adatról
    // 2. másolatot módosítjuk
    // 3. másolatot értékül adjuk az eredetinek
    const sLista=[...lista] // másolat //ne referenciát adjunk át -> const sLista=lista, hanem másolatot készítsünk, ezért [...lista]
    if(lepes % 2 == 0){
      sLista[adat]="X" // módosítás
    }
    else{
      sLista[adat]="O" // módosítás
    }
    let sLepes=lepes
    sLepes++
    setLepes(sLepes)
    setLista([...sLista]) // értékadás
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>TicTacToe</h1>
      </header>
      <article>
        <Jatekter lista={lista} katt={katt}/>

      </article>
      <footer><p>Horváth Nauzika</p></footer>
    </div>
  );
}

export default App;
