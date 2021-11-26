import { ACTIONS } from '../../constants/actions';

export const warmUpCreator = (e: any) => {
  return {
    type: ACTIONS.SET_WARM_UP,
    value: e
  };
};
