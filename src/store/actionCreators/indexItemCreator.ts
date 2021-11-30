import { ACTIONS } from '../../constants/actions';

export const indexItemCreator = (e: any) => {
  return {
    type: ACTIONS.SET_INDEX_ITEM,
    value: e
  };
};
