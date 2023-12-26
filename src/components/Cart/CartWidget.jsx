import React from 'react'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  return (
    <div className='cart-container'>
      <Link to={"./cart"}>
        <button className='btn-cart'>
          <span className="material-symbols-outlined">
            shopping_cart
          </span>
          <span className='numero-carrito'>
            0
          </span>
        </button>
      </Link>
    </div>
  )
}

export default CartWidget