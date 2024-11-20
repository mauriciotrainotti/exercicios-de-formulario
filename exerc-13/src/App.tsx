import { useState } from 'react';
import './App.css';

function App() {
  const [textareaWidth, setTextareaWidth] = useState(300); // Largura inicial da textarea
  const [textareaHeight, setTextareaHeight] = useState(100); // Altura inicial da textarea
  const [fontSize, setFontSize] = useState(16); // Tamanho inicial do texto

  return (
    <div className="App">
      <h1>Controle de Tamanho da Textarea</h1>

      <div>
        <label htmlFor="sliderWidth">Largura: {textareaWidth}px</label>
        <input
          id="sliderWidth"
          type="range"
          min="100"
          max="600"
          value={textareaWidth}
          onChange={(e) => setTextareaWidth(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="sliderHeight">Altura: {textareaHeight}px</label>
        <input
          id="sliderHeight"
          type="range"
          min="50"
          max="400"
          value={textareaHeight}
          onChange={(e) => setTextareaHeight(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="fontSize">Tamanho do texto:</label>
        <input
          id="fontSize"
          type="number"
          min="10"
          max="50"
          value={fontSize}
          onChange={(e) => setFontSize(e.target.value)}
        />
      </div>

      <textarea
        style={{
          width: `${textareaWidth}px`,
          height: `${textareaHeight}px`,
          fontSize: `${fontSize}px`,
          resize: 'none',
        }}
        placeholder="Digite algo aqui..."
      />
    </div>
  );
}

export default App;
