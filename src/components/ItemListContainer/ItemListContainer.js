import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where} from 'firebase/firestore'
import { db } from '../../services/firebaseConfig'
import { Row, Col } from 'react-bootstrap'
import Item from '../Item/Item'

const ItemListContainer = () => {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])
  const { category } = useParams()

  useEffect(() => {
    setLoading(true)
    const productsRef = category
      ? query(collection(db, 'products'), where('category', '==', category))
      : collection(db, 'products')

    getDocs(productsRef)
      .then(snapshot => {
        const productsFormatted = snapshot.docs.map(doc => {
          const data = doc.data()
          return { id: doc.id, ...data }
        })
        setProducts(productsFormatted)
      })
      .catch(error => {
        console.error("Error fetching data from Firestore: ", error);
      })
      .finally(() => {
        setLoading(false)
      })
  }, [category]);

  return (
    <Row xs={1} md={3} className="g-4">
      {loading
        ? <div>Cargando..... </div>
        : products.map(product => (
            <Col key={product.id}>
              <Item product={product} />
            </Col>
          ))
      }
    </Row>
  )
}

export default ItemListContainer
