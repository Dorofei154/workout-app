import { ACTIONS } from '../../constants/actions';

export const passwordCreator = (e: string) => {
  return {
    type: ACTIONS.SET_PASSWORD,
    value: e
  };
};
