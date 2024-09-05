import React, { useState, useEffect } from "react";
import ButtonsPositions from "./ButtonsPositions";
import { addColorsActions } from "../functions";

/* <Square /> es hijo de <Human /> y <Machine /> y por cada valor en los arrays bidimensionales de los estados human y machine renderiza 
las casillas de los tableros en <Human /> y <Machine />.*/
const Square = ({ children, human, get, onAddShip, invalidButtonsPositions, setInvalidButtonsPositions }) => {
    const [colorAction, setColorAction] = useState("btn btn-light");
    const [shipDirectionsArrows, setShipDirectionsArrows] = useState(false);/* Cada <Square /> tiene un estado independiente para mostrar u 
    ocultar al hijo <ButtonsPositions /> en <Human />. */
    
    /* Función para condicionar no mostrar otro <ButtonsPositions /> sin terminar el posicinamineto del barco accediendo al estado 
    invalidButtonsPositions que recibe como propo <Square /> */
    const handleInActiveButtonsPositions=()=>{
       if(invalidButtonsPositions == false){
        handleButtonsPositions()
        setInvalidButtonsPositions(true)
       }
       if(invalidButtonsPositions == true){
        alert("Indica dirección en los botones para terminar posicionamiento del barco")
       }
    }

    /* Función para condicionar mostrar unicamente <ButtonsPosition /> en las <Square /> de <Human /> accediendo al estado human que recibe 
    como prop <Square />. Y en los <Square /> de <Machine /> solo reciben disparos */
    const handleButtonsPositions = () => {
        if(human && children == null){
            setShipDirectionsArrows(true)/* Muestra los botones de posicionamiento. Son ocultados nuevamente al hacer clik en uno de los botones
             de <ButtonsPositions />, el cual se pasa como prop la función setShipDirectionsArrows y el estado shipDirectionsArrows */
        }
        else{
            get()/* Función que se ejecuta al hacer click en las <Square /> de <Machine /> para recibir agregar disparos pasada como prop en
            <Square /> */
        }
    }

    useEffect(() => {
        if (children != null) {
            setColorAction(addColorsActions(children))
        }
    }, [children])

    return (
        <>
            <div id="box" type="button" className={colorAction} onClick={handleInActiveButtonsPositions}>
                <span className={`${(children === "Y" || children === "N") || children === 0 ? "childrenBox" : Number}`}>
                    {children}
                </span>
            </div>
            {
                (shipDirectionsArrows == true) &&
                    <ButtonsPositions shipDirectionsArrows={shipDirectionsArrows} setShipDirectionsArrows={setShipDirectionsArrows} setInvalidButtonsPositions={setInvalidButtonsPositions} onAddShip={onAddShip}/>
            }
        </>
    )
}

export default Square








