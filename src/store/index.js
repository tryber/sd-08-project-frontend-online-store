import { createStore, combineReducers } from 'redux';

import cart from './cart.reducer';
import categories from './categories.reducer';
import products from './products.reducer';
import details from './details.reducer';
import control from './control.reducer';

const rootReducer = combineReducers({
  cart,
  categories,
  products,
  details,
  control,
});

const store = createStore(rootReducer);

export default store;
