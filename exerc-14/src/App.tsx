import { useState } from 'react';
import './App.css';

function App() {
  const [dataSelecionada, setDataSelecionada] = useState('');
  const dataAlvo = new Date('2024-12-31'); // Data específica para cálculo

  const calcularDiasRestantes = () => {
    if (!dataSelecionada) return null;
    const dataAtual = new Date(dataSelecionada);
    const diferencaTempo = dataAlvo - dataAtual;
    const diasRestantes = Math.ceil(diferencaTempo / (1000 * 60 * 60 * 24));
    return diasRestantes;
  };

  return (
    <div className="App">
      <h1>Calculador de Dias Restantes</h1>

      <div>
        <label htmlFor="seletorData">Selecione uma data:</label>
        <input
          id="seletorData"
          type="date"
          value={dataSelecionada}
          onChange={(e) => setDataSelecionada(e.target.value)}
        />
      </div>

      {dataSelecionada && (
        <div>
          <h2>
            {calcularDiasRestantes() >= 0
              ? `Faltam ${calcularDiasRestantes()} dias para ${dataAlvo.toLocaleDateString()}`
              : `A data ${dataAlvo.toLocaleDateString()} já passou!`}
          </h2>
        </div>
      )}
    </div>
  );
}

export default App;
