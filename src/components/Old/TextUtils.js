import {React, useState} from 'react';
 



const TextUtils=(props)=>{

    const[text, setText]=useState('');

    const textChange=(e)=>{
        setText(e.target.value)
    }

    const toUpCase=()=>{
        let updatedTxt = text.toUpperCase();
        setText(updatedTxt);
    }
    const toLwCase=()=>{
        let updatedTxt = text.toLowerCase();
        setText(updatedTxt);
    }
    const toClearText=()=>{
        setText('');
    }

    const[button, setButton] = useState('Enable Dark Mode')

    const[myStyle, setMyStyle]=useState({
            backgroundColor: 'rgb(36 35 35)',
            color: 'black'
    });

    const enableDarkMode = ()=>{
        if(myStyle.color == 'black'){
            setMyStyle({
                backgroundColor: '#333',
                color: 'white'  
            })
            setButton('Disable Dark Mode')
        }
        else{
            setMyStyle({
                backgroundColor: 'rgb(36 35 35)',
                color: 'black'  
            })
            setButton('Enable Light Mode')
        }
    }


    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="/" tabIndex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
        <div className="container my-3" style={myStyle}>
            <h2 className="text-white">{props.title}</h2>
            <textarea className="form-control" placeholder="write your text here.." onChange={textChange} value={text} rows="8"></textarea>
            <button className="btn btn-primary my-3" onClick={toUpCase}>To UpperCase</button>
            <button className="btn btn-warning my-3 ms-3" onClick={toLwCase}>To LowerCase</button>
            <button className="btn btn-danger my-3 ms-3" onClick={toClearText}>Clear Text</button>
            <button className="btn btn-light my-3 ms-3" onClick={enableDarkMode}>{button}</button>
        </div>

        <div className="container text-white">
            <h4>Your typed text</h4>
            <p>{text.split(' ').filter((value)=> value.length !==0).length} Words {text.length} Characters</p>
            <p>{text}</p>
        </div>
        </>
    );
}

export default TextUtils;