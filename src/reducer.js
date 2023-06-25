import { DECREMENT, INCREMENT, SET } from './actions';

export const intitialState = { count: 1 };

export const reducer = (state = intitialState, action) => {
  if (action.type === INCREMENT) {
    return { count: state.count + 1 };
  }

  if (action.type === DECREMENT) {
    return { count: state.count - 1 };
  }

  if (action.type === SET) {
    return { count: parseInt(action.payload, 10) };
  }

  return state;
};
