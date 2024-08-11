
//Crea el tablero y es pasada como argumento para setear el estado de board.
export const showBoardHuman = () => {
    let row = [];
    for (let i = 1; i <= 10; i++) {
        let box = Array(10).fill(null)
        row.push(box)
    }
    return row
}

export const showBoardMachine = () => {
    let board = [];
    let indexRow = Math.floor(Math.random() * 4)
    let indexBox = Math.floor(Math.random() * 4 + 5)

    for (let i = 0; i < 10; i++) {
        board[i] = [];
        for (let j = 0; j < 10; j++) {
            if (j == indexRow) {
                board[i][j] = "";
            }
            else if (j == indexBox) {
                board[i][j] = "";
            }
            else {
                board[i][j] = null;
            }
        }
    }
    return board
}
console.log("DESPLIEGUES DE PIEZAS MACHINE", showBoardMachine());

//FUNCIONES PARA QUE IMPORTARÉ LUEGO PARA TENER MENOS CÓDIGO EN LOS COMPONENTES
/* export const getShotMachine = (arr) => {
    let coordinates = [...arr];
    let indexRow = Math.floor(Math.random() * 9);
    let indexBox = Math.floor(Math.random() * 9);
    if (coordinates[indexRow][indexBox] == "") {
        coordinates[indexRow][indexBox] = "I HIT YOU!"
    }
    else if (coordinates[indexRow][indexBox] == null) {
        coordinates[indexRow][indexBox] = "I FAILED!"
    }
    console.log("TIRO EN LA BOX POR MACHINE", indexRow, indexBox)
}

export const getShotHuman = (arr, indexRow, indexBox) => {
    let coordinates = [...arr]
    if (coordinates[indexRow][indexBox] == "") {
        coordinates[indexRow][indexBox] = "ON TARGET!"
        console.log(coordinates)
    }
    else if (coordinates[indexRow][indexBox] == null) {
        coordinates[indexRow][indexBox] = "YOU FAILED!"
        console.log(coordinates)
    }
}


 */