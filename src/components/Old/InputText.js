import {React, useState} from "react";

const InputText =(props)=>{

    const[text, setText] = useState('');

    const transforUpper =()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const transforLower =()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const changeFun =(event)=>{
        setText(event.target.value);
    }



    return(
        <>
        <div className="container my-3">
            <h3 className="text-white">{props.title}</h3>
            <div className="form">
                <textarea className="form-control mb-3" value={text} onChange={changeFun} placeholder="Leave a comment here" rows="8" id="floatingTextarea"></textarea>
            </div>
            <button className="btn btn-primary me-3" onClick={transforUpper}>Convert Text To UpperCase</button>
            <button className="btn btn-primary" onClick={transforLower}>Convert Text To LowerCase</button>
        </div>

        <div className="container my-3">
            <h3 className="text-white">Words {text.split(" ").length} and  {text.length} Characters</h3>
        </div>

        <div className="container my-3">
        <h4 className="text-white">Preview</h4>

        <div className="text-white">{text}</div>

        </div>


        </>
    );

}

export default InputText;