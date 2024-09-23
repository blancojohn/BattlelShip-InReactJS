import React, { useState } from "react";
import Human from "./components/Human";
import Machine from "./components/Machine";
import { buildBoard/* , firstBoardMachine, secondBoardMachine */ } from "./functions";
import Messagge from "./components/Messagge";
import { GrUpdate } from "react-icons/gr";


const App = () => {
    const [shipsMachine, setShipsMachine]= useState("Mostrar barcos")
    const [newGameHuman, setNewGameHuman]= useState(false)/* <Squre /> accede para setear el estado a true y limpiar las casillas en el tablero humano */
    const [newGameMachine, setNewGameMachine]= useState(false)/* <Squre /> accede para setear el estado a true y limpiar las casillas en el tablero machine */
    const [turn, setTurn] = useState(0); /* Permite el intercambio de disparos */
    const [winHuman, setWinHuman] = useState(0); /* En 17 declara victoria */
    const [winMachine, setWinMachine] = useState(0); /* En 17 declara victoria */
    const [boardMachine, setBoardMachine] = useState(buildBoard())
    const [human, setHuman] = useState({
        board: buildBoard(), /* Se actualiza con los barcos que se posicionen y los disparos que reciba la persona*/
        nameShip: "Porta Aviones", /* Se actualiza con un tipo de barco distinto cada vez que se coloca un barco en el tablero humano. */
    });
    
    /* Se ejecuta al mostrar con el evento click con un botón que se muestra cuando alguien gana la partida */
    const playAgain= ()=>{
        setNewGameHuman(true)
        setNewGameMachine(true)
        setTurn(0)
        setWinHuman(0)
        setWinMachine(0)
        setShipsMachine("Mostrar barcos")
        setBoardMachine(buildBoard())
        setHuman({
            board: buildBoard(),
            nameShip: "Porta Aviones"
        })
    }

    return (
        <>
            <Messagge>BATTLESHIP IN REACT</Messagge>
            {
                (winHuman == 17) &&
                    <Messagge>
                        ¡Haz ganado!. Jugar de nuevo <button onClick={playAgain} className="btn btn-dark"><GrUpdate size={15}/></button>
                    </Messagge>
            }
            {
                (winMachine == 17) &&
                    <Messagge>
                        ¡Ha ganado la máquina!. Jugar de nuevo <button onClick={playAgain} className="btn btn-dark"><GrUpdate /></button>
                    </Messagge>
            }
            <div className="d-flex">
                <Human turn={turn} human={human} setHuman={setHuman} winHuman={winHuman} setWinMachine={setWinMachine} newGameHuman={newGameHuman} setNewGameHuman={setNewGameHuman}/>
                {/* Recibe el estado de human para validar disparo después de que la persona posicione todos sus barcos  */}
                {/* Recibe los estados winMachine y WinHuman para validar que la persona no siga disparando cuando gana o pierde */}
                <Machine setTurn={setTurn} boardMachine={boardMachine} setBoardMachine={setBoardMachine} human={human} winMachine={winMachine} winHuman={winHuman} setWinHuman={setWinHuman} newGameMachine={newGameMachine} setNewGameMachine={setNewGameMachine} shipsMachine={shipsMachine} setShipsMachine={setShipsMachine}/>
            </div>
        </>
    )
}

export default App































