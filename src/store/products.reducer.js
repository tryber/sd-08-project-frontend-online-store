export function actionClear() {
  return {
    type: 'PRODUCTS_CLEAR',
  };
}

export function actionUpdate(payload) {
  return {
    type: 'PRODUCTS_UPDATE',
    payload,
  };
}

const INITIAL_STATE = [];

export default function cart(state = INITIAL_STATE, action) {
  // console.log(state, action);
  switch (action.type) {
  case 'PRODUCTS_CLEAR': {
    return [];
  }
  case 'PRODUCTS_UPDATE': {
    return action.payload;
  }

  default:
    return state;
  }
}
