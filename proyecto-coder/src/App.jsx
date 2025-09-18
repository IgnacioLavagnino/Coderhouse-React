import { useState } from 'react'

import './App.css'

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetail from './components/ProductoDetail'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavBar/>}>
          <Route index element={<ItemListContainer></ItemListContainer>}/>
          <Route path='/:idCategoria' element={<ItemListContainer/>}/>
          <Route path='/item/:idItem' element={<ItemDetail/>}/>
          <Route path='*' element={<h1>Error 404: Página no encontrada</h1>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
