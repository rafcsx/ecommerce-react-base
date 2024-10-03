import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Cart = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (item) => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: item,
        });
    };

    return (
        <div>
            <h2>Carrinho de Compras</h2>
            {cart.length === 0 ? (
                <p>O carrinho está vazio.</p>
            ) : (
                <ul>
                    {cart.map(item => (
                        <li key={item.id}>
                            {item.name} - {item.price} 
                            <button onClick={() => handleRemoveFromCart(item)}>Remover</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
