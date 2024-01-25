import React, { useState } from 'react'
import {collection, addDoc, getFirestore} from "firebase/firestore"

const Form = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [orderId, setOrderId] = useState("")

    const db = getFirestore()

    const sendOrder = (e) => {
        e.preventDefault()

        addDoc(ordersCollection, order).then(({id}) => 
        setOrderId(id))
        }

        const order = {
            name,
            email
        }

        const ordersCollection = collection(db, "orden")

    return (
        <div>
            <h3>Ingresa tus datos para el envío del pedido</h3>
                <form action="submit" onSubmit={sendOrder}>
                    <input type="text" placeholder='Nombre' onChange={(e) => setName(e.target.value)} value={name}/>
                    <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email}/>
                    <button type='submit'>Enviar</button>
                </form>
                <h4>Este es el identificador de tu pedido</h4>
                <span>{orderId}</span>
        </div>
    )
}
export default Form