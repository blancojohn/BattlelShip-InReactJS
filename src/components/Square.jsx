import React, { useState, useEffect } from "react";
import ButtonsPositions from "./ButtonsPositions";
import { addColorsActions } from "../functions";


const Square = ({ getFunction, children, boardHuman, get, setState }) => {
    const [colorAction, setColorAction] = useState("btn btn-light");
    const [shipDirectionsArrows, setShipDirectionsArrows] = useState(false);

    const set = () => {
        /* Muestra componente ButtonsPosition en el componente square hijo del componente Human. */
        if(boardHuman && children == null){
            setShipDirectionsArrows(true)
        }
        /* Recibe el disparo del Humano en en componente Square hijo del componente Machine */
        else{
            get()
        }
    }

    useEffect(() => {
        if (children != null) {
            setColorAction(addColorsActions(children))
        }
    }, [children])

    return (
        <>
            <div id="box" type="button" className={colorAction} onClick={set}>
                <span className={`${(children === "Y" || children === "N") || children === 0 ? "childrenBox" : Number}`}>
                    {children}
                </span>
            </div>
            {
                (shipDirectionsArrows == true) &&
                    <ButtonsPositions shipDirectionsArrows={shipDirectionsArrows} setShipDirectionsArrows={setShipDirectionsArrows} getFunction={getFunction} setState={setState}/>
            }
        </>
    )
}

export default Square








