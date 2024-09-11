import React, { useState, useEffect } from "react";
import Square from "./Square";



const Human = ({ turn, human, setHuman }) => {

    const [invalidButtonsPositions, setInvalidButtonsPositions] = useState(false);
    const [winMachine, setWinMachine]= useState(1);

    /* Esta función es llamada en el renderizado */
    const addShip = (indexFirstDimension, indexSecondDimension, sizeShip, positionShip) => {
        let shipCoordinates = [...human.board] 
        let nameShip = human.nameShip /* Inicializa con el nombre actual de la propiedad del estado */

        /* Se ejecuta bloque de código cuando obtiene el parámetro position en la función onAddShip pasada como prop <Square /> */
        if (positionShip == "horizontal") {
            let accesCoordinate = shipCoordinates[indexFirstDimension] /* Primer parámetro accede al array 1ra dimensión al hacer click en una casilla del tablero */
            let ship = indexSecondDimension + sizeShip /* Segundo parámetro inidica a partir de cual posición  y tercer parámetro cuantas posiciones del array previo accedido*/
            let boxsInvalids = false /* Según valor en el que se encuentre no permite que sobreponer barcos */

            /* Recorre el tablero para validar las posiciones ocupadas */
            for (let i = indexSecondDimension; i < ship; i++) {
                if (accesCoordinate[i] == "") {
                    boxsInvalids = true
                }
            }

            /* Valida para ocupar solo casillas vacías y para no extender la longitud del array */
            if (boxsInvalids == false && ship <= accesCoordinate.length) {
                for (let i = indexSecondDimension; i < ship; i++) {
                    accesCoordinate[i] = "" /* Posiciona el barco accediendo a los valores del array de la segunda dimensión */
                }
                /* Se cambia el valor con el que se inicializa la variable solo si no se sobreponen barcos y no se 
                extiende la longitud del array accesCoordinate. La función setea la propiedad del estado nameShip 
                cada vez que se hace click en los botones del <ButtonsPositions />. */
                nameShip = selectShip()
            }
            else {
                /* Si se sobre ponen barcos muestra la alerta pero, mantiene en la propiedad del estado el barco que se 
                intento posicionar para posicionarlo de nuevo correctamente. */
                alert("Posicionamiento inválido. Repetir")
                return human.board
            }

            console.log("DESPLIEGUE PIEZAS HUMAN HORIZONTAL", shipCoordinates)
        }

        /* Se ejecuta bloque de código cuando obtiene el parámetro position en la función onAddShip pasada como prop al <Square /> */
        else if (positionShip == "vertical") {
            let ship = indexFirstDimension + sizeShip /* Primer parámetro cual posición y tercer parámetro cuantas posiciones de la misma por cada array en la segunda dimensión */
            let boxsInvalids = false /* Según valor en el que se encuentre no permite que se sobrepongan los barcos */
            
            /* Valida la suma de los parámetros en la declaración de la variable ship para que los barcos no pasen el límite vertical del tablero */
            if (ship > 10) { 
                alert("Posicionamineto inválido. Repetir")
                return human.board
            }

            /* Recorre el tablero para condiconar las posiciones ocupadas */
            for (let i = indexFirstDimension; i < ship; i++) {
                if (shipCoordinates[i][indexSecondDimension] == "" /* && ship > 10 */) {
                    boxsInvalids = true
                }
            }

            /* Valida para ocupar solo casillas vacías  y para cambia el valor inicial de la variable nameShip */
            if (boxsInvalids == false) {
                for (let i = indexFirstDimension; i < ship; i++) {
                    shipCoordinates[i][indexSecondDimension] = "" /* Posiciona el barco accediendo a la misma posición de la segunda dimensión por cada array de la primera dimensión */
                }
                nameShip = selectShip()
            }
            else {
                alert("Posicionamiento inválido. Repetir")
                return human.board
            }

            console.log("DESPLIEGUE PIEZAS HUMAN VERTICAL", shipCoordinates)
        }
        setHuman({
            board: shipCoordinates, /* Barco posicionado */
            nameShip
        })
    }

    const selectShip = () => {
        if (human.nameShip == "Porta Aviones") {
            return "Acorazado"
        }
        else if (human.nameShip == "Acorazado") {
            return "Destructor"
        }
        else if (human.nameShip == "Destructor") {
            return "Submarino"
        }
        else if (human.nameShip == "Submarino") {
            return "Bote Patrulla"
        }
        else if (human.nameShip == "Bote Patrulla"){
            return "Haz click en una coordenada del tablero de la máquina para disparar"
        } 
    }

    /* Función que permite recibir disparo en tablero de machine solo en casillas disponibles según validaciones a continuación */
    const getGunShotMachine = () => {
        let shotCoordinates = [...human.board];
        let indexRow = Math.floor(Math.random() * 10);
        let indexBox = Math.floor(Math.random() * 10);
        if (shotCoordinates[indexRow][indexBox] == "") {
            shotCoordinates[indexRow][indexBox] = "Y"
            countShotAcert()
        }
        else if (shotCoordinates[indexRow][indexBox] == null) {
            shotCoordinates[indexRow][indexBox] = "N"
        }
        else{
            getGunShotMachine()
            return human.board
        }
        
        console.log("TIRO DE MACHINE", indexRow, indexBox)
        console.log("VERIFICACIÓN DE TIRO MACHINE", shotCoordinates[indexRow][indexBox]) 
        return shotCoordinates
    }

    const countShotAcert= ()=>{
        if(winMachine == 17){
            alert("Ganó Machine")
        }
        setWinMachine(countShot => countShot + 1)
    }
    

    /* Permite recibir el disparo de machine luego de disparar a su tablero porque setea turn */
    useEffect(() => {
        if (turn != 0) {
            setHuman({
                board: getGunShotMachine(),
                ...human
            })
        }
    }, [turn])

    return (
        <>
            <div id="board">
                {
                    (human.board != null) &&
                    human.board.map((row, indexRow) => (
                        <span key={indexRow}>
                            {
                                row.map((box, indexBox) => (
                                    <Square key={indexBox} human={human} onAddShip={(positions) => {
                                        if (human.nameShip === "Porta Aviones") {
                                            addShip(indexRow, indexBox, 5, positions)
                                        }
                                        else if (human.nameShip === "Acorazado") {
                                            addShip(indexRow, indexBox, 4, positions)
                                        }
                                        else if (human.nameShip === "Destructor") {
                                            addShip(indexRow, indexBox, 3, positions)
                                        }
                                        else if (human.nameShip === "Submarino") {
                                            addShip(indexRow, indexBox, 3, positions)
                                        }
                                        else if (human.nameShip === "Bote Patrulla") {
                                            addShip(indexRow, indexBox, 2, positions)
                                        }
                                    }} invalidButtonsPositions={invalidButtonsPositions} setInvalidButtonsPositions={setInvalidButtonsPositions}>
                                        {box}
                                    </Square>
                                ))
                            }
                        </span>
                    ))
                }
                <div className="text-center">
                    {
                        (human.nameShip == "Porta Aviones" || human.nameShip == "Acorazado" || human.nameShip == "Destructor" || human.nameShip == "Submarino" || human.nameShip == "Bote Patrulla") &&
                            <span>Haz clikc en una coordenada para inciar posicionamiento del {human.nameShip}</span>
                    }
                    {
                        (human.nameShip == "Haz click en una coordenada del tablero de la máquina para disparar") &&
                            <span>Haz click en una coordenada del tablero de la máquina para disparar</span>
                    }
                </div>
            </div>
        </>
    )
}

export default Human

















