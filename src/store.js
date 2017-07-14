import { createStore } from 'redux';
import reducer from './ducks/productsReducer';

export default createStore(reducer);
