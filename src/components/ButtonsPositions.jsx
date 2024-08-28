import React from "react";
import { FaLongArrowAltRight, FaLongArrowAltDown } from "react-icons/fa";


const ButtonsPositions = ({ getFunction, setShipDirectionsArrows, setNameShip }) => {

    return (
        <>  
            <div id="buttons-select-directions">
                <button onClick={() =>{getFunction("horizontal"), setShipDirectionsArrows(false), setNameShip("Acorazado")}} id="buttons-modal" type="button" className="btn btn-success me-1"><FaLongArrowAltRight /></button>
                <button onClick={() =>{getFunction("vertical"), setShipDirectionsArrows(false)}} id="buttons-modal" type="button" className="btn btn-success"><FaLongArrowAltDown /></button>
            </div>
        </>
    )
}

export default ButtonsPositions