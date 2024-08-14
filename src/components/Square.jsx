import React, { useState, useEffect } from "react";


const Square = ({ getFunction, children }) => {
    const [colorAction, setColorAction] = useState("btn btn-light");

    const addColorsActions = () => {
        if (children === 1) {
            setColorAction("btn btn-dark")
            return children
        }
        else if (children === 2) {
            setColorAction("btn btn-danger")
            return children
        }
        else if (children === 3) {
            setColorAction("btn btn-primary")
            return children
        }
        else {
            setColorAction("btn btn-light")
            return children
        }
    }

    useEffect(() => {
        if(children != null){
            console.log(addColorsActions())
        }
    }, [children])

    return (
        <>
            <div id="box" type="button" className={colorAction} onClick={getFunction}>
                <span id="childrenBox">{children}</span>
            </div>
        </>
    )
}

export default Square


