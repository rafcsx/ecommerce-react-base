// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client'; // Importar createRoot
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import exampleReducer from './store/reducers/exampleReducer'; // Certifique-se de que esta linha apareça apenas uma vez
import App from './App';

// Combinando os reducers
const rootReducer = combineReducers({
    example: exampleReducer,
    // outros reducers...
});

// Criando a store do Redux
const store = createStore(rootReducer);

// Seleciona o elemento do DOM onde a aplicação será montada
const rootElement = document.getElementById('root');

// Cria uma instância do root
const root = createRoot(rootElement); // Use createRoot em vez de render

// Renderiza o aplicativo
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
