import React, { useEffect, useState } from 'react'
import { getProducts, getProductsByCategory } from '../../asyncMock.js'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'


const ItemListContainer = ({ greeting }) => {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])

  const { category } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const res = category ? await getProductsByCategory(category) : await getProducts();
        setProducts(res);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  return (

    <div className='w-full flex justify-center items-center text-3xl bg-orange-300'>
      {loading
        ?
        <div>Cargando..... </div>
        :
        <ItemList products={products} />
      }
    </div>
  )
}

export default ItemListContainer