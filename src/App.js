// src/App.js
import React from 'react';
import ErrorBoundary from './components/ErrorBoundary'; // Certifique-se de que o caminho está correto
import Home from './views/Home'; // Certifique-se de que o caminho está correto

const App = () => {
    return (
        <ErrorBoundary>
            <Home /> {/* O componente Home está encapsulado no ErrorBoundary */}
        </ErrorBoundary>
    );
};

export default App; // Exportação padrão
