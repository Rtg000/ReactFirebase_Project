import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header, Main } from './barril';
// import { Header } from './Pages/Header/Header';
// import { Main } from './Pages/Main/Main';
import { Ruticas } from './routes';
import {Route,Routes} from 'react-router-dom'
import { ListadoBruto } from './Pages/ListadoBruto/ListadoBruto';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}>
          {
            Ruticas.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component/>}
              />
            ))
          }
          <Route path='/ListadoBruto' element={<ListadoBruto/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;