import { ACTIONS } from '../../constants/actions';

export const getReadyCreator = (e: boolean) => {
  return {
    type: ACTIONS.SET_GET_READY,
    value: e
  };
};
