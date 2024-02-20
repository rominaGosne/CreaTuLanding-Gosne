import React from 'react'
import Item from '../Item/Item'

const ItemList = ({ products }) => {
  return (
    <div className='grid grid-cols-3 gap-4'>
      {products.map(product => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ItemList
