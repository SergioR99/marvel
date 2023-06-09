import './App.css';
import { Navegacion } from './components/Header';
import { Progreso } from './components/Progreso';

function App() {
  return (
    <div className="App">
      <Navegacion/>
      <Progreso></Progreso>
    </div>
  );
}

export default App;
