import React, {useState} from "react";
import Human from "./components/Human";
import Machine from "./components/Machine";


const App = () => {
    const [turn, setTurn] = useState(0);

    return (
        <>  
            <Human turn={turn} />
            <Machine setTurn={setTurn}/>
        </>
    )
}

export default App

            

    
    
 
                    
            












                                        










