import React, { useState } from "react";
import Human from "./components/Human";
import Machine from "./components/Machine";
import { buildBoard } from "./functions";
import Messagge from "./components/Messagge";
import { GrUpdate } from "react-icons/gr";


const App = () => {
    const [turn, setTurn] = useState(0); /* Permite el intercambio de disparos */
    const [winHuman, setWinHuman] = useState(0); /* En 17 declara victoria */
    const [winMachine, setWinMachine] = useState(0); /* En 17 declara victoria */
    const [human, setHuman] = useState({
        board: buildBoard(), /* Se actualiza con los barcos que se posicionen y los disparos que reciba la persona*/
        nameShip: "Porta Aviones", /* Se actualiza con un tipo de barco distinto cada vez que se coloca un barco en el tablero humano. */
    });

    return (
        <>
            <Messagge>BATTLESHIP IN REACT</Messagge>
            {
                (winHuman == 17) &&
                    <Messagge>
                        ¡Haz ganado!. Jugar de nuevo <button className="btn btn-dark"><GrUpdate size={15}/></button>
                    </Messagge>
            }
            {
                (winMachine == 17) &&
                    <Messagge>
                        ¡Ha ganado la máquina!. Jugar de nuevo <button className="btn btn-dark"><GrUpdate /></button>
                    </Messagge>
            }
            <div className="d-flex">
                <Human turn={turn} human={human} setHuman={setHuman} winHuman={winHuman} setWinMachine={setWinMachine} />

                {/* Recibe el estado de human para validar disparo después de que la persona posicione todos sus barcos  */}
                {/* Recibe los estados winMachine y WinHuman para validar que la persona no siga disparando cuando gana o pierde */}
                <Machine setTurn={setTurn} human={human} winMachine={winMachine} winHuman={winHuman} setWinHuman={setWinHuman} />
            </div>
        </>
    )
}

export default App































