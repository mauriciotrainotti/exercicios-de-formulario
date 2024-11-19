import { useState } from 'react';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div>
      <input type="file" onChange={handleFileSelect} />
      {selectedFile && <p>Arquivo selecionado: {selectedFile.name}</p>}
    </div>
  );
}

export default App;