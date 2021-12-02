import { combineReducers } from 'redux';
import { ACTIONS } from '../../constants/actions';
import { CONSTANTS } from '../../constants/constants';
import { connectRouter } from 'connected-react-router';
import {
  ActionBoolean,
  ActionNumber,
  ActionString
} from '../actionCreators/actionTypes';
import { MyType } from '../../components/Workout/Workout.types';

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
const reducerIndexItem = (state = 0, action: ActionNumber) => {
  switch (action.type) {
    case ACTIONS.SET_INDEX_ITEM:
      return action.value;
    default:
      return state;
  }
};
const reducerSeconds = (state = 5, action: ActionNumber) => {
  switch (action.type) {
    case ACTIONS.SET_SECONDS:
      return action.value;
    default:
      return state;
  }
};

const reducerStatusTimer = (state = CONSTANTS.PAUSED, action: ActionString) => {
  switch (action.type) {
    case ACTIONS.SET_STATUS_TIMER:
      return action.value;
    default:
      return state;
  }
};

const reducerGetReady = (state = true, action: ActionBoolean) => {
  switch (action.type) {
    case ACTIONS.SET_GET_READY:
      return action.value;
    default:
      return state;
  }
};

const reducerArrayOfExercises = (state: MyType[] = [], action: any) => {
  switch (action.type) {
    case ACTIONS.SET_ARRAY_OF_EXERCISES:
      return action.value;
    case ACTIONS.SET_DONE:
      return state.map((item: any) => {
        if (item.id === action.value.id) {
          return { ...item, done: true };
        }
        return item;
      });
    default:
      return state;
  }
};

export const rootReducer = (history: any) =>
  combineReducers({
    router: connectRouter(history),
    exersice: reducerExersice,
    warmUp: reducerWarmUp,
    stretching: reducerStretching,
    indexItem: reducerIndexItem,
    seconds: reducerSeconds,
    statusTimer: reducerStatusTimer,
    isGetReady: reducerGetReady,
    arrayOfExercises: reducerArrayOfExercises
  });
