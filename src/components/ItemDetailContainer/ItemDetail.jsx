import React from 'react'
import { Card, Button } from 'react-bootstrap'

const ItemDetail = ({product}) => {
    return (
        <div className='card-detail-container'>
            <Card className='card-detail' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.imagen} alt={product.nombre}/>
                <Card.Body>
            <Card.Title>{product.nombre}</Card.Title>
            <Card.Text className='card-description'>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
            </Card.Text>
            <Card.Text className='product-price'>
                ${product.precio}
            </Card.Text>
            <Button className='add-product' variant="primary">Agregar al carrito</Button>
            </Card.Body>
        </Card>
        </div>
    )
}

export default ItemDetail