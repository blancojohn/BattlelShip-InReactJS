import React, { useState, useEffect } from "react";
import Square from "./Square";
import Messagge from "./Messagge";



const Human = ({ turn, human, setHuman, winHuman, setWinMachine, newGameHuman, setNewGameHuman }) => {
    const [invalidButtonsPositions, setInvalidButtonsPositions] = useState(false);

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
                if (shipCoordinates[i][indexSecondDimension] == "") {
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
        else if (human.nameShip == "Bote Patrulla") {
            return "Haz click en una coordenada del tablero de la máquina para disparar"
        }
    }

    /* Función que permite recibir disparo en tablero del humano solo en casillas disponibles según validaciones a continuación */
    const getGunShotMachine = () => {
        let shotCoordinates = [...human.board];
        let indexRow = Math.floor(Math.random() * 9);
        let indexBox = Math.floor(Math.random() * 9);
        /* El "" es parte de un barco posicionado, al recibir un disparo el valor cambia "Y" y setea winMachine */
        if (shotCoordinates[indexRow][indexBox] == "") {
            shotCoordinates[indexRow][indexBox] = "Y"
            setWinMachine(countShot => countShot + 1)
        }
        /* Los null son casillas sin partes de barcos, al recibir un disparo cambia a "N" */
        else if (shotCoordinates[indexRow][indexBox] == null) {
            shotCoordinates[indexRow][indexBox] = "N"
        }
        else {
            /* Evita recibir un disparo en casillas que han recibido disparos */
            getGunShotMachine()
            return human.board
        }

        console.log("TIRO DE MACHINE", indexRow, indexBox)
        console.log("VERIFICACIÓN DE TIRO MACHINE", shotCoordinates[indexRow][indexBox])
        return shotCoordinates
    }

    /* Permite recibir el disparo de machine luego de disparar a su tablero porque seteando turn y valida para que machine no ejecute disparos 
    cuando gana la persona */
    useEffect(() => {
        if (turn != 0 && winHuman != 17) {
            setHuman({
                board: getGunShotMachine(),
                ...human
            })
        }
    }, [turn])

    return (
        <>
            <div id="board">
            <Messagge>Human</Messagge> 
                <div className="d-flex">
                    {
                        [" ", 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
                            <div key={index} id="box" type="button" className="btn btn-light">
                                {item}
                            </div>
                        ))
                    }
                </div>
                
                {
                    (human.board != null) &&
                    human.board.map((row, indexRow) => (
                        <span key={indexRow}>
                            <div id="box" type="button" className="btn btn-light">
                                {indexRow + 1}
                            </div>

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
                                    }} invalidButtonsPositions={invalidButtonsPositions} setInvalidButtonsPositions={setInvalidButtonsPositions} newGameHuman={newGameHuman} setNewGameHuman={setNewGameHuman}>
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
                        <Messagge>Haz clikc en una coordenada para inciar posicionamiento del {human.nameShip}</Messagge>
                    }
                    {
                        (human.nameShip == "Haz click en una coordenada del tablero de la máquina para disparar") &&
                        <Messagge>Dispara haciendo click en una casilla del enemigo</Messagge>
                    }
                </div>
            </div>
        </>
    )
}

export default Human

















