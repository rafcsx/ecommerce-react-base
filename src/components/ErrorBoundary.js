// src/components/ErrorBoundary.js
import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true }; // Atualiza o estado se um erro for capturado
    }

    componentDidCatch(error, errorInfo) {
        console.error("Erro capturado em ErrorBoundary: ", error, errorInfo); // Registra o erro
    }

    render() {
        if (this.state.hasError) {
            return <h1>Algo deu errado.</h1>; // Mensagem de erro
        }

        return this.props.children; // Renderiza os filhos normalmente se não houver erro
    }
}

export default ErrorBoundary; // Exportação padrão
