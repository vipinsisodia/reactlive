import {React, useState} from "react";

const UseBtnState =()=>{

    const[value, setNewValue] = useState(0);

    const DescreaseValue =()=>{
        setNewValue(value - 1)
    }
    const IncreaseValue =()=>{
        setNewValue(value + 1)
    }

    return(
        <div className="container">
            <button type="button" className="btn btn-primary" onClick={DescreaseValue}>-</button>
            <h2>{value}</h2>
            <button type="button" className="btn btn-primary" onClick={IncreaseValue}>+</button>
        </div>
    );
}

export default UseBtnState;