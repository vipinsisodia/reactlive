import { useState, React } from "react";
import './ButtonClick.css';

const ButtonClick = () => {
    
    const [count, setCounter] = useState(0);

    const UpdateCounter = () => {
        setCounter ( count + 1 );
    }

    return(
        <>
            <h1>Now click is {count}</h1>
            <button onClick={UpdateCounter}>click</button>
        </>
    );

}

export default ButtonClick;