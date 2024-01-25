import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import {doc, getDoc, getFirestore} from "firebase/firestore"

const ItemDetailContainer = () => {
    const {id} = useParams()
    const [product, setProduct] = useState([])

    useEffect(() => {
        const db = getFirestore()

        const oneItem = doc(db, "productos", `${id}`)
        getDoc(oneItem).then((snapshot) => {
            if(snapshot.exists()){
                const doc = {...snapshot.data()}
                setProduct(doc)
            }
        })
    }, [])

    return (
    <div>
        {product && <ItemDetail product = {product}/>}
    </div>
    )
}

export default ItemDetailContainer