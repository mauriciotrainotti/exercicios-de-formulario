import { useState } from 'react';
import './App.css';

function App() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const handleRedChange = (event) => setRed(event.target.value);
  const handleGreenChange = (event) => setGreen(event.target.value);
  const handleBlueChange = (event) => setBlue(event.target.value);

  const textColor = `rgb(${red}, ${green}, ${blue})`;

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>R</h1>
      <input 
        type="range" 
        min="0" 
        max="255" 
        value={red} 
        onChange={handleRedChange} 
      />
      <h1>G</h1>
      <input 
        type="range" 
        min="0" 
        max="255" 
        value={green} 
        onChange={handleGreenChange} 
      />
      <h1>B</h1>
      <input 
        type="range" 
        min="0" 
        max="255" 
        value={blue} 
        onChange={handleBlueChange} 
      />
      <p style={{ color: textColor }}>Texto</p>
      <p>Cor atual: {textColor}</p>
    </div>
  );
}

export default App;
