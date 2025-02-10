import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#27445D';
    } else {
      setMode('light');
      document.body.style.backgroundColor = '#EFE9D5';
    }
  }

  return (
    <div className={`app ${mode}`}>
      <Navbar 
        title="TextUtils" 
        aboutText="About TextUtils" 
        mode={mode} 
        toggleMode={toggleMode}
      />
      <main className="container my-3">
        <Textform 
          heading="Enter text to analyze" 
          mode={mode}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;