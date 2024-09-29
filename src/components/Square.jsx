import React, { useState, useEffect } from "react";
import ButtonsPositions from "./ButtonsPositions";

const Square = ({ children, human, boardMachine, onGetShotHuman, onAddShip, invalidButtonsPositions, setInvalidButtonsPositions, newGameHuman, setNewGameHuman, newGameMachine, setNewGameMachine, shipsMachine }) => {
    const [colorAction, setColorAction] = useState("btn btn-light");
    const [shipDirectionsArrows, setShipDirectionsArrows] = useState(false);/* Cada <Square /> tiene un estado independiente para mostrar u ocultar al hijo <ButtonsPositions /> en <Human />. */

    const addColorsActions = (children) => {
        let colorAction = ""
        /* Validación para ver posicionados los barcos en el tablero humano  */
        if (human && children == "") {
            colorAction = "btn btn-dark"
        }
        else if (children == "Y") {
            colorAction = "btn btn-danger"
        }
        else if (children == "N") {
            colorAction = "btn btn-primary"
        }
        else {
            colorAction = "btn btn-light"
        }

        /* Validación para no mostrar posicionados los barcos en el tablero machine */
        if (boardMachine && shipsMachine == "Mostrar barcos" && children == "") {
            colorAction = "btn btn-light"
        }
        /* Muestra los barcos posicionados si se presiona el botón  */
        if (boardMachine && shipsMachine == "Ocultar barcos" && children == "") {
            colorAction = "btn btn-dark"
        }
        return colorAction
    }

    /* Atribuye acciones distintas a las <Square /> de <Human /> y <Machine /> */
    const validStatesandActions = () => {
        /* Muestra los botones de posicionamiento por cada inicio de posicinamiento. Son ocultados nuevamente al hacer clik en uno de los 
        botones de <ButtonsPositions /> */
        if (human && children == null) {
            setShipDirectionsArrows(true)
            setInvalidButtonsPositions(true)
        }

        if (invalidButtonsPositions == true) {
            alert("Indica dirección en los botones para terminar posicionamiento del barco")
            setShipDirectionsArrows(false)
        }

        /* Valida la acción de disparar en los <Square /> de <Machine />*/
        if (boardMachine) {
            onGetShotHuman()
        }
    }

    useEffect(() => {
        if (children != null) {
            setColorAction(addColorsActions(children))
        }
        /* Las casillsa se ponen en blanco para posicionar barcos luego de terminar una partida */
        if (newGameHuman == true) {
            setColorAction("btn btn-light")
            setNewGameHuman(false)
        }
        /* Las casillsa se ponen en blanco para posicionar barcos luego de terminar una partida */
        if (newGameMachine == true) {
            setColorAction("btn btn-light")
            setNewGameMachine(false)
        }
    }, [children, shipsMachine])/* se ejecuta cada vez que ocurren acciones en los tableros o si muestran u ocultan los barcos de machine */

    return (
        <>
            <div id="box" type="button" className={colorAction} onClick={validStatesandActions}>
                <span className={`${(children == "Y" || children == "N") && "childrenBox" } d-flex justify-content-center`}>
                    {children}
                </span>
            </div>
            {
                (shipDirectionsArrows == true) &&
                <ButtonsPositions shipDirectionsArrows={shipDirectionsArrows} setShipDirectionsArrows={setShipDirectionsArrows} setInvalidButtonsPositions={setInvalidButtonsPositions} onAddShip={onAddShip} />
            }
        </>
    )
}

export default Square








