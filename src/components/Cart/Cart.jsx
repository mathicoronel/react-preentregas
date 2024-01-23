import React, { useContext } from 'react'
import CartContext from '../../context/CartContext'

const Cart = () => {

  const {cart} = useContext(CartContext)

  return (
    <div className='cart-container'>
      <h1 className='cart-title'>Tu carrito</h1>

      {
        cart.map((p) => {
          return (
          <div key={p.id} className='products-container'>
            <h2>{p.nombre}</h2>
          </div>
          )
        })
      }
    </div>
  )
}

export default Cart