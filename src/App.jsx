import React, { useState, useEffect } from "react";
import { showBoard } from "./functions";

const App = () => {
    const [board, setBoard] = useState(null);

    useEffect(() => {
        setBoard(showBoard())
    }, [])


    return (
        <>
            <div id="board">
                {
                    (board != null) &&
                        board.map((row, indexRow) => (
                            <div key={indexRow}>
                                {row.map((box, indexBox) => (
                                    <div id="box" key={indexBox}>{box}</div>
                                ))}
                            </div>
                        ))
                }
            </div>
        </>
    )
}

export default App
    
