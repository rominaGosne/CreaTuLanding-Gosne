import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'

const Item = ({ product }) => {
  return (
    <Card className="bg-white shadow">
      <Card.Img
        variant="top"
        src={product.img}
        className="img-fluid"
        style={{ maxHeight: '300px', maxWidth: '100%', objectFit: 'contain' }}
      />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Link to={`/producto/${product.id}`}>
          <Button variant="primary">Ver detalles</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default Item