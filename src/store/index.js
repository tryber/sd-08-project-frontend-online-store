import { createStore, combineReducers } from 'redux';

import cart from './cart.reducer';
import categories from './categories.reducer';
import products from './products.reducer';

const rootReducer = combineReducers({
  cart,
  categories,
  products,
});

const store = createStore(rootReducer);

export default store;
