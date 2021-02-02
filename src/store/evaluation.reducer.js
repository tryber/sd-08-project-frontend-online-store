export function actionAdd(payload) {
  return {
    type: 'EVALUATION_ADD',
    payload,
  };
}

const INITIAL_STATE = [];

export default function evaluation(state = INITIAL_STATE, action) {
  // console.log(state, action);
  // console.log(state);
  switch (action.type) {
  case 'EVALUATION_ADD': {
    return [...state, action.payload];
  }

  default:
    return state;
  }
}
