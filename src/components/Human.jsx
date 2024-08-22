import React, { useEffect } from "react";
import { getGunShotMachine } from "../functions";


const Human = ({ turn, children, boardHuman, setBoardHuman }) => {

    useEffect(() => {
        if (turn != 0) {
            setBoardHuman(getGunShotMachine(boardHuman))
        }
    }, [turn])

    return (
        <>  
            {children}
        </>
    )
}

export default Human;

















