// Azt szeretnénk, hogy egyetlen helyen tudjuk kezelni "globális változókat", azokat a változókat, amelyeket más komponensekben is használunk, pl. a katt függvényt, listát
// így nem lesz szsükség a buborékoltatásra, azaz az adatok több komponensen való átadására
// Provider fogja tartalmazni az állapotot, az adatokat itt módosítjuk és ezt rendeli hozzá a context
// Provider által körbeölelt komponensek számára tudja átadni az adatokat
// useContext hookra lesz szükség, itt mondjuk meg az egyes komponensekben, hogy melyik adatot akarjuk ott felhasználni
import React from 'react';
import { useState } from 'react';
import { createContext } from "react"
export const KattContext= createContext("")
//  létrehozunk egy Providert ehhez a contexthez
export const KattProvider=({children})=>{ 
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
        if(lepes % 2 === 0){
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

    return( <KattContext.Provider value={{lista, katt}}>

            {children}

        </KattContext.Provider>
    )
}