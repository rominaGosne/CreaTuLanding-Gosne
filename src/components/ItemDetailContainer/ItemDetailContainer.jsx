import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../asyncMock.js'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const { id } = useParams()
    const [producto, setProducto] = useState(null)
    console.log(producto)

    useEffect(() => { 
      getProductById(id).then(res => setProducto(res))
    }, [id])
    


  return (
    <>

        <ItemDetail producto={producto}/>
    
    </>
  )
}

export default ItemDetailContainer