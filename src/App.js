import {React, useState} from 'react';
import TextUtils from "./components/TextUtils";

const App = () => {

  const[mode, setMode]=useState('light')

  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor="#282c34";
      document.body.style.color="#fff";
    }else{
      setMode('light');
      document.body.style.backgroundColor="#fff";
      document.body.style.color="#000"
    }
  }

  return (
    <>
       <TextUtils title="Write your text here" mode={mode} toggleMode={toggleMode} />  
    </>
  );
}

export default App;
