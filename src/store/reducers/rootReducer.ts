import { combineReducers } from 'redux';
import { ACTIONS } from '../../constants/actions';

const reducerExersice = (state = {}, action: any) => {
  switch (action.type) {
    case ACTIONS.SET_EXERCISE:
      return action.value;
    default:
      return state;
  }
};
const reducerWarmUp = (state = {}, action: any) => {
  switch (action.type) {
    case ACTIONS.SET_WARM_UP:
      return action.value;
    default:
      return state;
  }
};
const reducerStretching = (state = {}, action: any) => {
  switch (action.type) {
    case ACTIONS.SET_STRETCHING:
      return action.value;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  exersice: reducerExersice,
  warmUp: reducerWarmUp,
  stretching: reducerStretching
});
