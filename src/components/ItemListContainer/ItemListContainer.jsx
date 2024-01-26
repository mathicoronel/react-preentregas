import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import Loader from '../Loader/Loader'

const ItemListContainer = () => {
    const {categoryId} = useParams()

    const [products, setProducts] = useState([])

    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        const db = getFirestore()
        const itemsCollection = collection(db, "productos")

        setTimeout(() => {
            getDocs(itemsCollection).then((snapshot) => {
                const docs = snapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }));
            setProducts(docs)
            setLoading(false)
            })
        }, 600);
    }, [])

    if(loading) {
        return <Loader />
    }

    const filteredProducts = products.filter((p) => p.categoria === categoryId)

    return (
        <div>
            <h1 className='title'>{categoryId ? filteredProducts[0]?.categoria : 'Todos los productos'}</h1>
            {
                categoryId ? <ItemList products={filteredProducts} /> : <ItemList products={products} />
            }
        </div>
    )
}

export default ItemListContainer