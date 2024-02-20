import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../services/firebaseConfig'

const ItemDetailContainer = () => {
    const { id } = useParams()
    const [producto, setProducto] = useState(null)

    useEffect(() => {
        const productRef = doc(db, 'products', id)

        getDoc(productRef)
            .then(snaposhot => {
                const data = snaposhot.data()
                const productFormatted = { id: snaposhot.id, ...data }
                setProducto(productFormatted)
            })
            .catch(error => console.error("Error fetching product data:", error))
    }, [id])

    return (
        <div className="container">
            <ItemDetail producto={producto} />
        </div>
    )
}

export default ItemDetailContainer