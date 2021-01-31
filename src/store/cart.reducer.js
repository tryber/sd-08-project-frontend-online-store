export function actionClear() {
  return {
    type: 'CART_CLEAR',
  };
}

export function actionAdd(payload) {
  return {
    type: 'CART_ADD',
    payload,
  };
}

export function actionRemove(payload) {
  return {
    type: 'CART_REMOVE',
    payload,
  };
}

const INITIAL_STATE = [
  {
    id: 'MLB1474180944',
    title: 'Sandália Kenner Kivah Cushy Masculina ',
    price: '177,90',
  },
  {
    id: 'MLB1243505647',
    title: 'Aspirador De Pó Wap Silent Speed 1000w 220v Com Nf',
    price: '203,90',
  },
  {
    id: 'MLB1243505647',
    title: 'Aspirador De Pó Wap Silent Speed 1000w 220v Com Nf',
    price: '203,90',
  },
];

// const INITIAL_STATE = [];

export default function cart(state = INITIAL_STATE, action) {
  // console.log(state, action);
  switch (action.type) {
  case 'CART_CLEAR': {
    return [];
  }
  case 'CART_ADD': {
    return [...state, action.payload];
  }
  case 'CART_REMOVE': {
    const index = state.findIndex((i) => i.id === action.payload);
    // console.log('index', index);
    state[index] = null;
    return state.filter((i) => i !== null);
  }

  default:
    return state;
  }
}
