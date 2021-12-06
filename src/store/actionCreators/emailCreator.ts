import { ACTIONS } from '../../constants/actions';

export const emailCreator = (e: string) => {
  return {
    type: ACTIONS.SET_EMAIL,
    value: e
  };
};
