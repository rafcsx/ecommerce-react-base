import React from 'react';
import { useDispatch } from 'react-redux';

const Product = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: product, // O produto que você está adicionando
        });
    };

    return (
        <div>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <button onClick={handleAddToCart}>Adicionar ao Carrinho</button>
        </div>
    );
};

export default Product;
