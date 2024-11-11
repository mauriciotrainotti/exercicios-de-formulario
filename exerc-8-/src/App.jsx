import React, { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState(''); // Estado para armazenar a cor da div

  const handleButtonClick = (color) => {
    setColor(color); // Altera a cor da div
  };

  return (
    <div className="container">
      <button className="btn" style={{ backgroundColor: 'red' }} onClick={() => handleButtonClick('red')}>Vermelho</button>
      <button className="btn" style={{ backgroundColor: 'green' }} onClick={() => handleButtonClick('green')}>Verde</button>
      <button className="btn" style={{ backgroundColor: 'blue' }} onClick={() => handleButtonClick('blue')}>Azul</button>
      <button className="btn" style={{ backgroundColor: 'yellow' }} onClick={() => handleButtonClick('yellow')}>Amarelo</button>

      <div className="color-box" style={{ backgroundColor: color }}></div>
    </div>
  );
}

export default App;
