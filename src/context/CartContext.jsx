import { createContext, useEffect, useState } from "react";

export const CartContext = createContext(null)

export const CartContextProvider = ({children}) => {

    const firstCart = JSON.parse(localStorage.getItem("cart")) || []

    const [cart, setCart] = useState(firstCart)

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
        console.log(newCart)
    }

    const totalPrice = () => {
        return cart.reduce((acc, p) => acc + p.precio * p.cantidad, 0)
    }

    const productsQuantity = () => {
        return cart.reduce((acc, p) => acc + p.cantidad, 0)
    }

    const clear = () => {
        setCart([])
    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    return(
        <CartContext.Provider value={{cart, setCart, addToCart, totalPrice, productsQuantity, clear}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext