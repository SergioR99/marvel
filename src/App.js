import './App.css';
import { Navegacion } from './components/Header';
import { Progreso } from './components/Progreso';
import { Carrusel } from './components/Carrusel';

function App() {
  return (
    <div className="App">
      <Navegacion/>
      <Progreso/>
      <Carrusel>
      </Carrusel>
    </div>
  );
}

export default App;
