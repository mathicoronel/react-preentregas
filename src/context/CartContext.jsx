import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addToCart = (product, cantidad) => {
        const addedItem = {...product, cantidad}

        const newCart = [...cart]

        const isInCart = newCart.find((p) => p.id === addedItem.id)

        if(isInCart) {
            isInCart.cantidad += cantidad
        } else {
            newCart.push(addedItem)
        }
        setCart(newCart)
    }

    const productsQuantity = () => {
        return cart.reduce((acc, p) => acc + p.cantidad, 0)
    }

    const totalPrice = () => {
        return cart.reduce((acc, p) => acc + p.precio * p.cantidad, 0)
    }

    const deleteCart = () => {
        setCart([])
    }

    return(
        <CartContext.Provider value={{cart, setCart, addToCart, productsQuantity, totalPrice, deleteCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext