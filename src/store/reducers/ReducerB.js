import { combineReducers } from 'redux';
import exampleReducer from './reducers/exampleReducer';  // Adjust path as needed

const rootReducer = combineReducers({
    example: exampleReducer, // Adicione o reducer aqui
    // Você pode adicionar outros reducers aqui
});

export default rootReducer;
