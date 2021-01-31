import { createStore, combineReducers } from 'redux';

import cart from './cart.reducer';
import categories from './categories.reducer';
import products from './products.reducer';
import details from './details.reducer';

const rootReducer = combineReducers({
  cart,
  categories,
  products,
  details,
});

const store = createStore(rootReducer);

export default store;
