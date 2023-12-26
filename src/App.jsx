import React from 'react'
import ComponenteNavBar from './components/Navbar/ComponenteNavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './components/Cart/Cart'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <ComponenteNavBar/>
      
      <Routes>
        <Route exact path='/' element={<ItemListContainer/>} />
        <Route exact path='/category/:categoryId' element={<ItemListContainer />} />
        <Route exact path='/product/:id' element={<ItemDetailContainer/>} />
        <Route exact path='/components/cart/cart.jsx' element={<Cart />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App