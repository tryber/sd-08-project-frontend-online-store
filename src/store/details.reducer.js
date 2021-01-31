export function actionClear() {
  return {
    type: 'DETAILS_CLEAR',
  };
}

export function actionAdd(payload) {
  return {
    type: 'DETAILS_ADD',
    payload,
  };
}

const INITIAL_STATE = [];

export default function details(state = INITIAL_STATE, action) {
  // console.log(state, action);
  // console.log(state);
  switch (action.type) {
  case 'DETAILS_CLEAR': {
    return [];
  }
  case 'DETAILS_ADD': {
    return [...state, { ...action.payload }];
  }

  default:
    return state;
  }
}
