import React from "react";


const Messagge = ({ children }) => {
    return (
        <>
            <span className="d-flex justify-content-center">
                <h3>{children}</h3>
            </span>
        </>
    )
}

export default Messagge