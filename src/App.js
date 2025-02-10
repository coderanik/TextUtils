import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  const [mode, setMode] = useState('light');

  const togglemode = ()=>{
    if(mode === 'light' ){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }


  return (
    <>
      <Navbar title="Textutils" aboutText="About TextUtils" mode={mode} toggleMode={togglemode}/>
      <div className="container my-3">
        <Textform heading="Enter a text to analyze"/>
      </div>
      {/* <About/> */}
      <Footer/>
    </>
  );
}

export default App;
