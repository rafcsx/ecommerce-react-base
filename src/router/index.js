import { createStore } from 'redux';

// Estado inicial
const initialState = {
    cart: [], // Carrinho de compras
};

// Redutor
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.payload], // Adiciona item ao carrinho
            };
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id), // Remove item do carrinho
            };
        case 'CLEAR_CART':
            return {
                ...state,
                cart: [], // Limpa o carrinho
            };
        default:
            return state;
    }
};

// Criação da loja
const store = createStore(rootReducer);

export default store;
