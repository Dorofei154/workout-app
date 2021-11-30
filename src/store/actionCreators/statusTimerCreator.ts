import { ACTIONS } from '../../constants/actions';

export const statusTimerCreator = (e: any) => {
  return {
    type: ACTIONS.SET_STATUS_TIMER,
    value: e
  };
};
