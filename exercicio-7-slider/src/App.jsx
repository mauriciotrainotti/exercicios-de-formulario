import { useState } from 'react';
import './App.css';

function App() {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  };

  return (
    <>
      <div>
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={sliderValue} 
          onChange={handleSliderChange} 
        />
        <p>Valor: {sliderValue}</p>
      </div>
    </>
  );
}

export default App;
