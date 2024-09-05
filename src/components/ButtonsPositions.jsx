import React from "react";
import { FaLongArrowAltRight, FaLongArrowAltDown } from "react-icons/fa";


const ButtonsPositions = ({ setShipDirectionsArrows, setInvalidButtonsPositions, onAddShip }) => {
   

    return (
        <>  
            <div id="buttons-select-directions">
                <button onClick={() =>{setShipDirectionsArrows(false), onAddShip("horizontal"), setInvalidButtonsPositions(false) }} id="buttons-modal" type="button" className="btn btn-success me-1"><FaLongArrowAltRight /></button>
                <button onClick={() =>{setShipDirectionsArrows(false), onAddShip("vertical"), setInvalidButtonsPositions(false) }} id="buttons-modal" type="button" className="btn btn-success"><FaLongArrowAltDown /></button>
            </div>
        </>
    )
}

export default ButtonsPositions