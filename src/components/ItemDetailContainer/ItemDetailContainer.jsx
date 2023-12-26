import React from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const {id} = useParams()
    
    const products = [
        {
            nombre: "Zapatillas Stan Smith",
            precio: 71000,
            id: 10,
            imagen: "../src/img/stan-smith.webp",
            categoria: "Exclusive",
            cantidad: 1
        },
        {
            nombre: "Zapatillas Duramo 10",
            precio: 51000,
            id: 6,
            imagen: "../src/img/duramo10.webp",
            categoria: "Running",
            cantidad: 1
        },
        {
            nombre: "Zapatillas Response",
            precio: 42000,
            id: 2,
            descuento: 20,
            imagen: "../src/img/zapatillas-response.webp",
            categoria: "Running",
            cantidad: 1
        },
        {
            nombre: "Zapatillas Forum (marrón)",
            precio: 65000,
            id: 3,
            imagen: "../src/img/forum-marron.webp",
            categoria: "Exclusive",
            cantidad: 1
        },
        {
            nombre: "Zapatillas Superstar",
            precio: 50000,
            id: 4,
            imagen: "../src/img/superstar-negras.webp",
            categoria: "Exclusive",
            cantidad: 1
        },
        {
            nombre: "Zapatillas Forum (blanco)",
            precio: 77000,
            id: 5,
            imagen: "../src/img/forum-blancas.webp",
            categoria: "Exclusive",
            cantidad: 1
        },
        {
            nombre: "Zapatillas Avryn",
            precio: 40000,
            id: 1,
            descuento: 30,
            imagen: "../src/img/zapatillas-avryn.webp",
            categoria: "Deportivas",
            cantidad: 1
        },
        {
            nombre: "Zapatillas Court plataforma",
            precio: 60000,
            id: 7,
            imagen: "../src/img/court-plataforma.webp",
            categoria: "Exclusive",
            cantidad: 1
        },
        {
            nombre: "Zapatillas Gamecourt 2",
            precio: 69000,
            id: 8,
            imagen: "../src/img/gamecourt2.webp",
            categoria: "Deportivas",
            cantidad: 1
        },
        {
            nombre: "Zapatillas Run 60s",
            precio: 47000,
            id: 9,
            imagen: "../src/img/run60s.webp",
            categoria: "Deportivas",
            cantidad: 1
        },
        {
            nombre: "Zapatillas Tensaur",
            precio: 45000,
            id: 0,
            descuento: 15,
            imagen: "../src/img/zapatillas-tensaur.webp",
            categoria: "Exclusive",
            cantidad: 1
        },
        {
            nombre: "Zapatillas USA 84",
            precio: 53000,
            id: 11,
            imagen: "../src/img/usa84.webp",
            categoria: "Deportivas",
            cantidad: 1
        },
        {
            nombre: "Zapatillas Ultraboost",
            precio: 68000,
            id: 12,
            imagen: "../src/img/ultraboost.webp",
            categoria: "Running",
            cantidad: 1
        }
    ]
    
    const findProduct = products.find((p) => p.id == id)

    return (
    <div>
        <ItemDetail product = {findProduct}/>
    </div>
    )
}

export default ItemDetailContainer