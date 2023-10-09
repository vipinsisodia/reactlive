import { useState, React } from "react";

const Form =(props)=>{
    
    const [text, setNewText] = useState('Your text is here');

    const textEditable = (evet) => {
        setNewText(evet.target.value);
    }

    const toupperCase = () => {
        let newText = text.toUpperCase();
        setNewText(newText);
    }
    
    return(
        <div className="container">
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label text-white">{props.heading}</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={textEditable} rows="8"></textarea>
  <button className="btn btn-primary" onClick={toupperCase}>To UpperCase</button>
</div>
</div>
    );
}

export default Form;