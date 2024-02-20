import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../services/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import './Checkout.css'; // Importa tu archivo de estilos CSS para Checkout

const Checkout = () => {
    const { cart, emptyCart, total } = useContext(CartContext);
    const navigate = useNavigate();

    const [values, setValues] = useState({
        name: '',
        address: '',
        email: '',
    });

    const [orderId, setOrderId] = useState(null);

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (values.name.length < 3 || values.address.length < 6 || values.email.length < 3) {
            alert('Por favor, completa todos los campos correctamente.');
            return;
        }

        const order = {
            cart,
            datosCliente: values,
            fyh: new Date(),
            total: total(),
        };

        try {
            
            cart.forEach(async (item) => {
                const docRef = doc(db, 'products', item.id);
                const docSnap = await getDoc(docRef);
                const stock = docSnap.data().stock;
                
                if (stock - item.cantidad >= 0) {
                    await updateDoc(docRef, { stock: stock - item.cantidad });
                } else {
                    alert('No hay suficiente stock de ' + docSnap.data().name);
                }
            });
            const docRef = await addDoc(collection(db, 'orders'), order);
            setOrderId(docRef.id);
            emptyCart();
            
            alert(`Orden Generada con éxito!\nNº: ${docRef.id}`);
            navigate('/');
        } catch (error) {
            console.error('Error al procesar la orden:', error);
        }
    };

    if (orderId) {
        return (
            <div className="checkout-success">
                <h3>Tu orden se generó correctamente</h3>
                <p>Guarda el número de orden: <strong>{orderId}</strong></p>
            </div>
        );
    }

    if (cart.length === 0) {
        return (
            <div className="checkout-empty">
                <p>El carrito está vacío. Agrega productos para continuar con la compra.</p>
                <button className='btn btn-primary' onClick={() => navigate('/')}>Volver a la tienda</button>
            </div>
        );
    }

    return (
        <div className="checkout">
            <table className="checkout-table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.cantidad}</td>
                            <td>${item.price}</td>
                            <td>${item.cantidad * item.price}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Total:</td>
                        <td style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>${total()}</td>
                    </tr>
                </tfoot>
            </table>

            <form onSubmit={handleSubmit} className="checkout-form">
                <input
                    type="text"
                    required
                    placeholder='Tu nombre'
                    name='name'
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    required
                    placeholder='Dirección'
                    name='address'
                    onChange={handleInputChange}
                />
                <input
                    type="email"
                    required
                    placeholder='Tu email'
                    name='email'
                    onChange={handleInputChange}
                />
                <button className='btn btn-success' type='submit'>Confirmar compra</button>
            </form>
        </div>
    );
};

export default Checkout;