import { ACTIONS } from '../../constants/actions';

export const secondsCreator = (e: any) => {
  return {
    type: ACTIONS.SET_SECONDS,
    value: e
  };
};