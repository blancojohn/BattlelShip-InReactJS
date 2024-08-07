
//Crea el tablero y es pasada como argumento para setear el estado de board.
export const showBoard = () => {
    let row = [];
    for (let i = 1; i <= 10; i++) {
        let box = Array(10).fill(0)
        row.push(box)
    }
    return row
}