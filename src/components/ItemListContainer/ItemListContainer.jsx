import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore } from 'firebase/firestore'

const ItemListContainer = () => {
    const {categoryId} = useParams()

    const [products, setProducts] = useState([])
    
    useEffect(() => {
        const db = getFirestore()
        const itemsCollection = collection(db, "productos")

        getDocs(itemsCollection).then((snapshot) => {
            const docs = snapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
        setProducts(docs)
        })
    }, )

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