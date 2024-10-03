// store/index.js
import { createStore, combineReducers } from 'redux';
import exampleReducer from './reducers/exampleReducer'; // Ajuste o caminho se necessário
import rootReducer from './reducers/ReducerB'; // Importa o rootReducer

const store = createStore(
    rootReducer,
    // Aqui você pode adicionar o DevTools, se necessário
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const rootReducer = combineReducers({
    example: exampleReducer, // Adicione outros redutores conforme necessário
    // Exemplo: cart: cartReducer,
});

export default store;
