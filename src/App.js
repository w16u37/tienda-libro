import './App.css';
import {NavBar} from "./components/NavBar/NavBar";
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer title="listado" greeting="LISTADO DE LIBROS"/>
    </div>
  );
}

export default App;
