import React from 'react';
import Cella from './Cella';

export default function Jatekter(props){ // props = szülőelemtől kap paraméterként
    //console.log(props.lista) //props = objektum, első kulcsához tartozó érték a lista
    
    return(
        <>
            {
                props.lista.map( (elem, index) => {
                    return(<Cella jel={elem} key={index} index={index}/>)
                })
            }
        </>
    )
}