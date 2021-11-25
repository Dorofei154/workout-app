import { combineReducers } from 'redux';
import { ACTIONS } from '../../constants/actions';

const reducerEmail = (state = '', action: any) => {
  switch (action.type) {
    case ACTIONS.SET_EMAIL:
      return action.value;
    default:
      return state;
  }
};

const reducerPassword = (state = '', action: any) => {
  switch (action.type) {
    case ACTIONS.SET_PASSWORD:
      return action.value;
    default:
      return state;
  }
};

const reducerMonth = (state: number = 0, action: any) => {
  switch (action.type) {
    case ACTIONS.SET_MONTH:
      return action.value;
    default:
      return state;
  }
};
const reducerDate = (state: number = 0, action: any) => {
  switch (action.type) {
    case ACTIONS.SET_DATE:
      return action.value;
    default:
      return state;
  }
};

const reducerValue = (state = 0, action: any) => {
  switch (action.type) {
    case ACTIONS.SET_VALUE:
      return action.value;
    default:
      return state;
  }
};

const reducerCurrentUser = (state = null, action: any) => {
  switch (action.type) {
    case ACTIONS.SET_CURRENT_USER:
      return action.value;
    default:
      return state;
  }
};

const reducerTodo = (state: any = [], action: any) => {
  switch (action.type) {
    case ACTIONS.SET_ARRTODO:
      return action.value;
    default:
      return state;
  }
};

const reducerNewTodo = (state = '', action: any) => {
  switch (action.type) {
    case ACTIONS.SET_NEW_TODO:
      return action.value;
    default:
      return state;
  }
};

const reducerNewHeader = (state = '', action: any) => {
  switch (action.type) {
    case ACTIONS.SET_NEW_HEADER:
      return action.value;
    default:
      return state;
  }
};

const reducerNewDate = (state = 0, action: any) => {
  switch (action.type) {
    case ACTIONS.SET_NEW_DATE:
      return state;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  password: reducerPassword,
  email: reducerEmail,
  month: reducerMonth,
  date: reducerDate,
  value: reducerValue,
  arrtodo: reducerTodo,
  currentUser: reducerCurrentUser,
  newTodo: reducerNewTodo,
  header: reducerNewHeader,
  newDate: reducerNewDate
});
