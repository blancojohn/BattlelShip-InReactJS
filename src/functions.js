
//Crea el tablero y es pasada como argumento para setear el estado de board.
export const showBoardHuman = () => {
    let row = [];
    for (let i = 1; i <= 10; i++) {
        let box = Array(10).fill(null)
        row.push(box)
    }
    return row
}

export const showBoardMachine= ()=>{
    let board = []; 
    let randomPositionY1= Math.floor(Math.random()* 4)
    let randomPositionY2= Math.floor(Math.random() * 4 + 5)
    
    for(let i = 0; i < 10; i++) {  
        board[i] = [];  
        for(let j = 0; j < 10; j++) {  
            if(j == randomPositionY1) {  
                board[i][j] = "";  
            } 
            else if(j == randomPositionY2){  
                board[i][j] = "";   
            }
            else{
                board[i][j] = null; 
            }  
        }  
    } 
    return board 
}
console.log(showBoardMachine());  

/* let arrayBidimensional = [];  
let valorIgual = 1; // el valor que se repite  
let valorConsecutivo = 2; // el valor que se coloca en índices consecutivos  

// Crear un array de 3 filas  
for (let i = 0; i < 10; i++) {  
    arrayBidimensional[i] = []; // Inicializa cada fila como un array  
    // Rellenar cada fila  
    for (let j = 0; j < 10; j++) {  
        if (j === 2) { // en el índice 2, coloca los cuatro valores consecutivos  
            arrayBidimensional[i][j] = valorConsecutivo;  
            arrayBidimensional[i][j + 1] = valorConsecutivo;  
            arrayBidimensional[i][j + 2] = valorConsecutivo;  
            arrayBidimensional[i][j + 3] = valorConsecutivo;  
            j += 3; // Salta los siguientes índices  
        } else {  
            arrayBidimensional[i][j] = valorIgual; // Coloca el valor repetido  
        }  
    }  
}  

console.log(arrayBidimensional); */

/* function generarArray(filas, columnas, valor) {  
    const array = [];  
    for (let i = 0; i < filas; i++) {  
        const fila = [];  
        for (let j = 0; j < columnas; j++) {  
            fila.push(j === 0 ? valor : 0); // Asignar valor solo a la primera columna  
        }  
        array.push(fila);  
    }  
    return array;  
}  

const resultado = generarArray(10, 10, 5); // 3 filas, 4 columnas, valor 5 en la primera columna  
console.log(resultado);  */

