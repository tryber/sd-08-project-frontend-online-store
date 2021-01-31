export function actionSlideOpen() {
  return {
    type: 'CONTROL_SLIDE_OPEN',
  };
}

export function actionSlideClose() {
  return {
    type: 'CONTROL_SLIDE_CLOSE',
  };
}

export function actionCartUpdate() {
  return {
    type: 'CONTROL_CART_UPDATE',
  };
}

const INITIAL_STATE = {
  visibility: {
    slide: false,
  },
  updatecart: 0,
};

export default function cart(state = INITIAL_STATE, action) {
  // console.log(state, action);
  switch (action.type) {
  case 'CONTROL_SLIDE_OPEN': {
    return {
      ...state,
      visibility: {
        slide: true,
      },
    };
  }
  case 'CONTROL_SLIDE_CLOSE': {
    return {
      ...state,
      visibility: {
        slide: false,
      },
    };
  }
  case 'CONTROL_CART_UPDATE': {
    return {
      ...state,
      updatecart: state.updatecart + 1,
    };
  }

  default:
    return state;
  }
}
