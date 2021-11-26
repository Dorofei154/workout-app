import { ACTIONS } from '../../constants/actions';

export const exerciseCreator = (e: any) => {
  return {
    type: ACTIONS.SET_EXERCISE,
    value: e
  };
};
