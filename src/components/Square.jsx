import React from "react";


const Square= ({getFunction, children})=>{
    return(
        <>
            <div id="box" type="button" className="btn btn-light" onClick={getFunction}>
                {children}
            </div>
        </>
    )
}

export default Square