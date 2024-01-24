import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'

const CartWidget = () => {

  const {productsQuantity} = useContext(CartContext)

  return (
    <div className='cart-widget-container'>
      <Link to={"/cart"}>
        <button className='btn-cart'>
          <span className="material-symbols-outlined">
            shopping_cart
          </span>
          <span className='cart-number'>
            {productsQuantity()}
          </span>
        </button>
      </Link>
    </div>
  )
}

export default CartWidget