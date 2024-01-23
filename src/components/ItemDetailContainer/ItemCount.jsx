import React, { useContext, useState } from 'react'

const ItemCount = ({addProduct, removeProduct, itemCount, setItemCount, handleAgregar}) => {

    return (
        <div className='add-product-container'>
            {itemCount >= 1 ? <button className='add-button' onClick={removeProduct}>-</button> : setItemCount(1)}
            <button onClick={handleAgregar} className='add-product'>Agregar {itemCount} al carrito</button>
            <button className='remove-button' onClick={addProduct}>+</button>
        </div>
    )
}

export default ItemCount