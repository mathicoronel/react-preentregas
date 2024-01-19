import React, { useState } from 'react'

const ItemCount = ({addProduct, removeProduct, addToCart, itemCount, setItemCount}) => {

    return (
        <div className='add-product-container'>
            {itemCount >= 1 ? <button className='add-button' onClick={removeProduct}>-</button> : setItemCount(1)}
            <button onClick={addToCart} className='add-product'>Agregar {itemCount} al carrito</button>
            <button className='remove-button' onClick={addProduct}>+</button>
        </div>
    )
}

export default ItemCount