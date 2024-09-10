import React, { useState, useEffect } from "react";
import ButtonsPositions from "./ButtonsPositions";
import { addColorsActions } from "../functions";

/* <Square /> es hijo de <Human /> y <Machine /> */
const Square = ({ children, human, boardMachine, onGetShotHuman, onAddShip, invalidButtonsPositions, setInvalidButtonsPositions }) => {
    const [colorAction, setColorAction] = useState("btn btn-light");
    const [shipDirectionsArrows, setShipDirectionsArrows] = useState(false);/* Cada <Square /> tiene un estado independiente para mostrar u 
    ocultar al hijo <ButtonsPositions /> en <Human />. */

     /* Atribuye acciones distintas a las <Square /> de <Human /> y <Machine /> */
    const validStatesandActions = () => {
         /* Muestra los botones de posicionamiento por cada inicio de posicinamiento. Son ocultados nuevamente al hacer clik en uno de los 
         botones de <ButtonsPositions /> */
        if (human && children == null) {
            setShipDirectionsArrows(true)
            setInvalidButtonsPositions(true)
        }

        if(invalidButtonsPositions == true){
            alert("Indica dirección en los botones para terminar posicionamiento del barco")
            setShipDirectionsArrows(false)
        }

        /* Valida la acción de disparar en los <Square /> de <Machine />*/
        if(boardMachine){
            onGetShotHuman()
        }
    }

    useEffect(() => {
        if (children != null) {
            setColorAction(addColorsActions(children))
        }
    }, [children])

    return (
        <>
            <div id="box" type="button" className={colorAction} onClick={validStatesandActions}>
                <span className={`${(children == "Y" || children == "N") ? "childrenBox" : Number} d-flex justify-content-center`}>
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








