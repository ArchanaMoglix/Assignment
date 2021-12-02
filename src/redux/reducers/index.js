import changeTheNumber from './counter';
import products from './products';
import cart from './cart';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  changeTheNumber,
  products,
  cart,
});

export default rootReducer;
