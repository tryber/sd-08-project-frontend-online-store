export function actionClear() {
  return {
    type: 'CATEGORIES_CLEAR',
  };
}

export function actionUpdate(payload) {
  return {
    type: 'CATEGORIES_UPDATE',
    payload,
  };
}

const INITIAL_STATE = [];

export default function categories(state = INITIAL_STATE, action) {
  // console.log(state, action);
  switch (action.type) {
  case 'CATEGORIES_CLEAR': {
    return [];
  }
  case 'CATEGORIES_UPDATE': {
    return action.payload;
  }

  default:
    return state;
  }
}
