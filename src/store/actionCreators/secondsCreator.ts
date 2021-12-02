import { ACTIONS } from '../../constants/actions';

export const secondsCreator = (e: number) => {
  return {
    type: ACTIONS.SET_SECONDS,
    value: e
  };
};
