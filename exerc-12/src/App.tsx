import { useState } from 'react';
import './App.css';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedImage(URL.createObjectURL(file));
    } else {
      alert('Por favor, selecione um arquivo de imagem válido!');
      setSelectedImage(null);
    }
  };

  return (
    <div className="App">
      <h1>Envie sua foto de perfil</h1>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      {selectedImage && (
        <div>
          <h2>Pré-visualização:</h2>
          <img
            src={selectedImage}
            alt="Foto de perfil"
            style={{ width: '200px', height: '200px', borderRadius: '50%' }}
          />
        </div>
      )}
    </div>
  );
}

export default App;
