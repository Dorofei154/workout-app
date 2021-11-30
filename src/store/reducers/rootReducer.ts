import { combineReducers } from 'redux';
import { ACTIONS } from '../../constants/actions';
import { CONSTANTS } from '../../constants/constants';
import { connectRouter } from 'connected-react-router';

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
const reducerIndexItem = (state = 0, action: any) => {
  switch (action.type) {
    case ACTIONS.SET_INDEX_ITEM:
      return action.value;
    default:
      return state;
  }
};
const reducerSeconds = (state = 5, action: any) => {
  switch (action.type) {
    case ACTIONS.SET_SECONDS:
      return action.value;
    default:
      return state;
  }
};

const reducerStatusTimer = (state = CONSTANTS.PAUSED, action: any) => {
  switch (action.type) {
    case ACTIONS.SET_STATUS_TIMER:
      return action.value;
    default:
      return state;
  }
};

const reducerGetReady = (state = true, action: any) => {
  switch (action.type) {
    case ACTIONS.SET_GET_READY:
      return action.value;
    default:
      return state;
  }
};

const reducerSecondsGetReady = (state = true, action: any) => {
  switch (action.type) {
    case ACTIONS.SET_GET_READY:
      return action.value;
    default:
      return state;
  }
};

const reducerStretchingSeconds = (state: number[] = [], action: any) => {
  switch (action.type) {
    case ACTIONS.SET_SECONDS_STRETCHING:
      return action.value;
    default:
      return state;
  }
};

const reducerWarmUpSeconds = (state: number[] = [], action: any) => {
  switch (action.type) {
    case ACTIONS.SET_SECONDS_WARM_UP:
      return action.value;
    default:
      return state;
  }
};

const reducerExcersiceSeconds = (state: number[] = [], action: any) => {
  switch (action.type) {
    case ACTIONS.SET_SECONDS_EXERSICES:
      return action.value;
    default:
      return state;
  }
};
const reducerArrayOfExercises = (state: number[] = [], action: any) => {
  switch (action.type) {
    case ACTIONS.SET_ARRAY_OF_EXERCISES:
      return action.value;
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
    secondsGetReady: reducerSecondsGetReady,
    statusTimer: reducerStatusTimer,
    isGetReady: reducerGetReady,
    secondsStretching: reducerStretchingSeconds,
    secondsExercise: reducerExcersiceSeconds,
    secondsWarmUp: reducerWarmUpSeconds,
    arrayOfExercises: reducerArrayOfExercises
  });
