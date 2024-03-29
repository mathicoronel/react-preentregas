import React, { useContext } from 'react'
import CartContext from '../../context/CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {

  const {cart, totalPrice, clear, formVisibility} = useContext(CartContext)

  return (
    <div className='cart-container'>
      <h1 className='cart-title'>Carrito</h1>

      {
        cart.map((p) => {
          return (
          <div key={p.id} className='products-container'>
            <p className='product-quantity'>x{p.cantidad}</p>
            <h2 className='product-name'>{p.nombre}</h2>
            <h3 className='unit-price'>Precio por unidad: ${p.precio}</h3>
            <h3 className='product-total-price'>Precio total: ${p.precio * p.cantidad}</h3>
          </div>
          )
        })
      }

      <div className='total-price-container'>
        {cart.length > 0 ?
        (<h3 className='total-price'>Total: ${totalPrice()}</h3>)
        : <h3 className='empty-cart'>Tu carrito está vacío</h3>}
      </div>
        <div className='buttons-container'>
          {cart.length > 0 && <button className='clear-cart' onClick={clear}>Vaciar carrito</button>}
          <Link to={"/form"}>
            {cart.length > 0 && <button className='confirm-button' onClick={formVisibility}>Confirmar compra</button> }
          </Link>
      </div>
    </div>
  )
}

export default Cart