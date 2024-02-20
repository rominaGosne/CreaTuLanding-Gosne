import React, { useState, useContext } from 'react'
import Button from '../Button/Button'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({ producto }) => {
    const [counter, setCounter] = useState(1)
    const { addToCart, isInCart } = useContext(CartContext)

    const handleAdd = () => setCounter(counter + 1)
    const handleSubstract = () => setCounter(counter - 1)
    const handleAddToCart = () => addToCart({ ...producto, cantidad: counter })

    return (
        <div className="card mt-5">
            {producto &&
                <>
                    <div className="card-body">
                        <h5 className="card-title">{producto.name}</h5>
                        <p className="card-text">{producto.description}</p>
                        <img src={producto.img} className="card-img-top" alt="" style={{ maxWidth: '50%', height: 'auto' }} />
                        <p className="card-text">$ {producto.price}</p>
                        <div className="btn-group" role="group">
                            <button className="btn btn-light" onClick={handleSubstract}>-</button>
                            <span className="btn btn-light">{counter}</span>
                            <button className="btn btn-light" onClick={handleAdd}>+</button>
                        </div>
                        {isInCart(producto.id) ?
                            <Link to='/cart' className="btn btn-primary mt-2">Ir al Carrito</Link> :
                            <button className="btn btn-primary mt-2" onClick={handleAddToCart}>Agregar al Carrito</button>
                        }
                    </div>
                </>
            }
        </div>
    )
}

export default ItemDetail