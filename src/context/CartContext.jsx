import { createContext, useEffect, useState } from "react";
import Form from "../components/Cart/Form";

export const CartContext = createContext(null)

const firstCart = JSON.parse(localStorage.getItem("cart")) || []

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState(firstCart)
    const [form, setForm] = useState(false)

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
        setForm(false)
    }

    const formVisibility = () => {
        setForm(!form) 
    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    return(
        <CartContext.Provider value={{cart, setCart, addToCart, totalPrice, productsQuantity, clear, formVisibility}}>
            {children}
            {form && <Form />}
        </CartContext.Provider>
    )
}

export default CartContext