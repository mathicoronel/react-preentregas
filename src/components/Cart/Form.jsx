import React, { useContext, useState } from 'react'
import {collection, addDoc, getFirestore} from "firebase/firestore"
import CartContext from '../../context/CartContext'

const Form = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [orderId, setOrderId] = useState("")
    const {cart, totalPrice} = useContext(CartContext)

    const db = getFirestore()

    const sendOrder = (e) => {
        e.preventDefault()

        addDoc(ordersCollection, order).then(({id}) => 
            setOrderId(id))
        }

        const order = {
            datos: {name, email},
            orden: cart,
            total: totalPrice()
        }

        const ordersCollection = collection(db, "orden")

    return (
        <div className='form-container'>
            <h3>Ingresa tus datos para finalizar la compra</h3>
                <form action="submit" className='form' onSubmit={sendOrder}>
                    <input type="text" placeholder='Nombre' className='name-form' onChange={(e) => setName(e.target.value)} value={name}/>
                    <input type="email" placeholder='Email' className='email-form' onChange={(e) => setEmail(e.target.value)} value={email}/>
                    <button className='confirm-button' type='submit'>Enviar</button>
                </form>
                <div className='identificator-container'>
                    <h4>Aquí aparecerá el identificador de tu pedido</h4>
                    <span className='order-id'>{orderId}</span>
                </div>
        </div>
    )
}
export default Form