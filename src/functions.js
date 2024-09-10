

export const buildBoard = () => {
  let board = [
    ["BS",1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, null, null, null, null, null, null, null, null, null],
    [2, null, null, null, null, null, null, null, null, null],
    [3, null, null, null, null, null, null, null, null, null],
    [4, null, null, null, null, null, null, null, null, null],
    [5, null, null, null, null, null, null, null, null, null],
    [6, null, null, null, null, null, null, null, null, null],
    [7, null, null, null, null, null, null, null, null, null],
    [8, null, null, null, null, null, null, null, null, null],
    [9, null, null, null, null, null, null, null, null, null]
  ]
  return board
}

/* export const addShip = (arr, indexFirstDimension, indexSecondDimension, size, position) => {
  if (position === "horizontal") {
    let board = [...arr]
    let first = board[indexFirstDimension]
    let ship = indexSecondDimension + size
    let boxsInvalids= false

    for(let i= indexSecondDimension; i < ship; i++){
      if(first[i] == ""){
        boxsInvalids= true
      }
    }
    
    if(boxsInvalids == false){
      for (let i = indexSecondDimension; i < ship; i++) {
        first[i]= ""
      }
    }
    else{
      alert("Posicionamiento Inválido")
    }
    console.log("DESPLIEGUE PIEZAS HUMAN HORIZONTAL", board)
    return board

  } else if (position === "vertical") {
    let board = [...arr]
    let ship = indexFirstDimension + size
    let boxsInvalids= false

    for (let i = indexFirstDimension; i < ship; i++) {
      if(board[i][indexSecondDimension] == ""){
        boxsInvalids= true
      }
    }

    if(boxsInvalids == false){
      for (let i = indexFirstDimension; i < ship; i++) {
        board[i][indexSecondDimension] = "";
      }
    }
    else{
      alert("Posicionamiento inválido") 
    }
    console.log("DESPLIEGUE PIEZAS HUMAN VERTICAL", board)
    return board
  }
} */


/* export const getGunShotMachine = (board) => {
  let coordinates = [...board];
  let indexRow = Math.floor(Math.random() * 9);
  let indexBox = Math.floor(Math.random() * 9);
  if (coordinates[indexRow][indexBox] == "") {
    coordinates[indexRow][indexBox] = "Y"
  }
  else if (coordinates[indexRow][indexBox] == null) {
    coordinates[indexRow][indexBox] = "N"
  }
  console.log("TIRO DE MACHINE", indexRow, indexBox)
  console.log("VERIFICACIÓN DE TIRO MACHINE", coordinates[indexRow][indexBox])
  return coordinates
} */

/* export const getGunShotHuman = (board, indexRow, indexBox) => {
  let coordinates = [...board]
  if (coordinates[indexRow][indexBox] == "") {
    coordinates[indexRow][indexBox] = "Y"
  }
  else if (coordinates[indexRow][indexBox] == null) {
    coordinates[indexRow][indexBox] = "N"
  }
  console.log("TIRO HUMAN", indexRow, indexBox)
  console.log("VERIFICACIÓN TIRO HUMAN", coordinates[indexRow][indexBox])
  return coordinates
} */

export const addColorsActions = (children) => {
  let colorAction = ""
  if (children === "") {
    colorAction = "btn btn-dark"
  }
  else if (children === "Y") {
    colorAction = "btn btn-danger"
  }
  else if (children === "N") {
    colorAction = "btn btn-primary"
  }
  else {
    colorAction = "btn btn-light"
  }
  return colorAction
}

