import React from 'react'

const ItemCount = ({addItem, removeItem, itemCount, setItemCount, handleAddToCart}) => {

    return (
        <div className='add-product-container'>
            {itemCount >= 1 ? <button className='remove-button' onClick={removeItem}>-</button> : setItemCount(1)}
            <button onClick={handleAddToCart} className='add-product'>Agregar {itemCount} al carrito</button>
            <button className='add-button' onClick={addItem}>+</button>
        </div>
    )
}

export default ItemCount