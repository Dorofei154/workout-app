import { ACTIONS } from '../../constants/actions';

export const stretchingCreator = (e: any) => {
  return {
    type: ACTIONS.SET_STRETCHING,
    value: e
  };
};
