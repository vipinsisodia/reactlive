import { useState, React } from "react";

const IncreasingDecreasingCount = () => {

    const [count, newCount] = useState(0);

    const MinClick = () => {
        newCount (count - 1);
    }
    const MaxClick = () => {
        newCount (count + 1);
    }

    return(
        <>
            <button onClick={MinClick}>-</button>
            <h2>{count}</h2>
            <button onClick={MaxClick}>+</button>
        </>
    );
}

export default IncreasingDecreasingCount;