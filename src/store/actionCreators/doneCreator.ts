import { ACTIONS } from '../../constants/actions';

export const doneCreator = (e: string) => {
  return {
    type: ACTIONS.SET_DONE,
    value: e
  };
};
