import { ACTIONS } from '../../constants/actions';

export const indexItemCreator = (e: number) => {
  return {
    type: ACTIONS.SET_INDEX_ITEM,
    value: e
  };
};
