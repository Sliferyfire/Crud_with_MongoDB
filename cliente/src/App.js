// import logo from './logo.svg';
import './App.css';
import ListaUsuarios from './listaUsuarios';
import AgregarUsuarios from './agregarUsuarios';
import EditarUsuarios from './editarUsuarios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>CRUD MERN STACK</h1>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListaUsuarios/>}></Route>
          <Route path='agregarUsuario' element={<AgregarUsuarios/>}></Route>
          <Route path='editarUsuario' element={<EditarUsuarios/>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
