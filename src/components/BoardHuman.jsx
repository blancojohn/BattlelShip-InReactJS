import React, { useEffect } from "react";



const BoardHuman = ({ boardHuman, setBoardHuman }) => {

    const addShip = (indexRow, indexBox) => {
        let shipInBoard = [...boardHuman];
        shipInBoard[indexRow].splice(indexBox, 5, "", "", "", "", "")
        console.log("DESPLIEGUE DE PIEZAS HUMAN",shipInBoard)
        setBoardHuman(shipInBoard)
    }
    
    const getGunShotMachine= ()=>{
        let shot= [...boardHuman];
        let indexRow= Math.floor(Math.random() * 9);
        let indexBox= Math.floor(Math.random() * 9);
        console.log("TIRO POR MACHINE",indexRow, indexBox)
    }

    useEffect(()=>{
        getGunShotMachine()
    },[])



    return (

        <>
            <div id="board">
                {
                    (boardHuman != null) &&
                    boardHuman.map((row, indexRow) => (
                        <div key={indexRow}>
                            {row.map((box, indexBox) => (
                                <button key={indexBox} onClick={()=>addShip(indexRow, indexBox)} id="box" type="button" className="btn btn-light">{box}</button>
                            ))}
                        </div>
                    ))
                }
            </div>
        </>

    )
}

export default BoardHuman;
   


        