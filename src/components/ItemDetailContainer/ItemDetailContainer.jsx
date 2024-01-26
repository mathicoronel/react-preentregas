import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import {doc, getDoc, getFirestore} from "firebase/firestore"
import Loader from '../Loader/Loader'

const ItemDetailContainer = () => {
    const {id} = useParams()
    const [product, setProduct] = useState([])

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const db = getFirestore()
        const oneItem = doc(db, "productos", `${id}`)

        setTimeout(() => {
            getDoc(oneItem).then((snapshot) => {
                if(snapshot.exists()){
                    const doc = snapshot.data()
                    setProduct({...doc, id: id})
                    setLoading(false)
                }
            })
        }, 700);

    }, [id])

    if(loading) {
        return <Loader />
    }

    return (
    <div>
        {product && <ItemDetail product = {product}/>}
    </div>
    )
}

export default ItemDetailContainer