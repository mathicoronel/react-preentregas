import React from 'react'
import Item from './Item'

const ItemList = ({products}) => {
  return (
    <div className='card-container'>
      {
        products.map((p) => {
          return (
            <Item 
            imagen = {p.imagen}
            nombre = {p.nombre}
            key = {p.id}
            id = {p.id}
            />
          )
        })
      }
    </div>
  )
}

export default ItemList