import { ACTIONS } from '../../constants/actions';

export const apiResCreator = (e: any) => {
  return {
    type: ACTIONS.SET_API_RES,
    value: e
  };
};
