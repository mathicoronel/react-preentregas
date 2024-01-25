import React, { useContext, useState } from 'react'
import { Card } from 'react-bootstrap'
import ItemCount from './ItemCount'
import CartContext from '../../context/CartContext'

const ItemDetail = ({ product }) => {

    const [itemCount, setItemCount] = useState(1)

    const {addToCart} = useContext(CartContext)

    const addItem = () => {
        setItemCount(itemCount + 1)
    }

    const removeItem = () => {
        setItemCount(itemCount - 1)
    }

    return (
        <div className='card-detail-container'>
            <Card className='card-detail' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.imagen} alt={product.nombre} />
                <Card.Body>
                    <Card.Title>{product.nombre}</Card.Title>
                    <Card.Text className='card-description'>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Card.Text className='product-price'>
                        ${product.precio}
                    </Card.Text>
                    <ItemCount 
                    handleAddToCart={() => {addToCart(product, itemCount) }} 
                    addItem={addItem} 
                    removeItem={removeItem} 
                    itemCount={itemCount} 
                    setItemCount={setItemCount} />
                </Card.Body>
            </Card>
        </div>
    )
}

export default ItemDetail