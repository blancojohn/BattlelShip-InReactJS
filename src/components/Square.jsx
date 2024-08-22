import React, { useState, useEffect } from "react";
import ButtonsPositions from "./ButtonsPositions";
import { addColorsActions } from "../functions";


const Square = ({ getFunction, children}) => {
    const [colorAction, setColorAction] = useState("btn btn-light");
    const [shipDirectionsArrows, setShipDirectionsArrows] = useState(false);

    const set = () => {
        setShipDirectionsArrows(true)
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
                    <ButtonsPositions shipDirectionsArrows={shipDirectionsArrows} setShipDirectionsArrows={setShipDirectionsArrows} getFunction={getFunction}/>
            }
        </>
    )
}

export default Square








