import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';

function App(){
const [mode, setMode] = useState('white');
const [alert, setAlert] = useState(null);

const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
}

const toggleMode = ()=>{
  if(mode === 'black'){
    setMode('white')
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enable", "Success");
  }else{
    setMode('black')
    document.body.style.backgroundColor = 'black';
    showAlert("Dark mode has been enable", "Success");

  }
}
  return (
    <div>
      <Navbar   mode={mode} toggleMode={toggleMode} />
      <div><TextForm mode={mode} showAlert={showAlert} /> </div>
        <Alert alert={alert} />
    </div>
  )
}

export default App;


