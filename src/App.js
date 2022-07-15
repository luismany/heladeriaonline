import './App.css';
import Productos from './Components/Productos/Productos';
import TopMenu from './Components/TopMenu/TopMenu';
import UseFetch from './Hooks/UseFetch';
import {UrlApiProducts } from './utils/Constans';


function App() {

  const listaProductos = UseFetch(UrlApiProducts);
  //console.log(listaProductos);
  
  return (
    <div className="App">
      <TopMenu />
      
      <Productos listaProductos={listaProductos} />
    </div>
  );
}

export default App;
