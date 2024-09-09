import React, {useState} from "react";
import Human from "./components/Human";
import Machine from "./components/Machine";
import { buildBoard } from "./functions";


const App = () => {
    /* Permite el intercambio de disparos */
    const [turn, setTurn] = useState(0);

    const [human, setHuman] = useState({
        board: buildBoard(), /* Se actualiza con los barcos que se posicionen y los disparos que reciba la persona*/
        nameShip: "Porta Aviones", /* Se actualiza con un tipo de barco distinto cada vez que se coloca un barco en el tablero humano. */
    });

    return (
        <>  
            <Human turn={turn} human={human} setHuman={setHuman}/>

            {/* NameShip valida disparar en el tablero de machine luego de posicionar todos los barcos en <Human />  */}
            <Machine setTurn={setTurn} human={human}/>
        </>
    )
}

export default App

            

    
    
 
                    
            












                                        










