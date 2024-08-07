import React, { useState, useEffect } from "react";


const App = () => {
    const [board, setBoard] = useState(null);

    const showBoard = () => {
        let row = [];
        for (let i = 1; i <= 10; i++) {
            let box = Array(10).fill(0)
            row.push(box)
        }
        setBoard(row)
        return row
    }

    useEffect(() => {
        showBoard()
    }, [])


    return (
        <>
            <div id="board">
                {
                    (board != null) &&
                        board.map((row, indexRow) => (
                            <div key={indexRow}>
                                {row.map((box, indexBox) => (
                                    <div key={indexBox}>
                                        {box}
                                    </div>
                                ))}
                            </div>
                        ))
                }
            </div>
        </>
    )
}

export default App