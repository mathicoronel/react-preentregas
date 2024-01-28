import React from 'react'
import ComponenteNavBar from './components/Navbar/ComponenteNavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './components/Cart/Cart'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import {CartContextProvider} from './context/CartContext'
import Form from './components/Cart/Form'
import { ToastContainer } from 'react-toastify'

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <CartContextProvider>
          <ComponenteNavBar/>
      
          <Routes>
            <Route exact path='/' element={<ItemListContainer/>} />
            <Route exact path='/category/:categoryId' element={<ItemListContainer />} />
            <Route exact path='/product/:id' element={<ItemDetailContainer/>} />
            <Route exact path='/cart' element={<Cart />} />
            <Route exact path='/form' element={<Form />} />
          </Routes>

          </CartContextProvider>
          <ToastContainer />
        </BrowserRouter>

    </div>
  )
}

export default App