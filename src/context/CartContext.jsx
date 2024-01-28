import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartContext = createContext(null)

const firstCart = JSON.parse(localStorage.getItem("cart")) || []

export const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState(firstCart)

    const deleteCartMessage = () => {
        Swal.fire({
        title: "¿Quieres eliminar tu carrito?",
        text: "Esto eliminará todos tus productos",
        icon: "question",
        showConfirmButton: true,
        showDenyButton: true,
        confirmButtonText: "Eliminar",
        denyButtonText: "No eliminar"
        }).then((result) => {
            if(result.isConfirmed) {
                setCart([])
                Swal.fire("Carrito eliminado", "", "success")
            }
        })
    }

    const addToCart = (product, cantidad) => {
        const addedToCart = () => {
            toast.success(`${product.nombre} agregado al carrito`, {
                position: "top-right",
                autoClose: 900,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
                });
        }

        const addedItem = {...product, cantidad}

        const newCart = [...cart]

        const isInCart = newCart.find((p) => p.id === addedItem.id)

        if(isInCart) {
            addedToCart()
            isInCart.cantidad += cantidad
        } else {
            addedToCart()
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
        deleteCartMessage()
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