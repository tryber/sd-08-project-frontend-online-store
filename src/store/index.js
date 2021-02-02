import { createStore, combineReducers } from 'redux';

import cart from './cart.reducer';
import categories from './categories.reducer';
import products from './products.reducer';
import details from './details.reducer';
import control from './control.reducer';
import evaluation from './evaluation.reducer';

const rootReducer = combineReducers({
  cart,
  categories,
  products,
  details,
  control,
  evaluation,
});

const store = createStore(rootReducer);

export default store;
