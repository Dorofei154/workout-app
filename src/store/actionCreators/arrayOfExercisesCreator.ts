import { ACTIONS } from '../../constants/actions';

export const arrayOfExercisesCreator = (e: any) => {
  return {
    type: ACTIONS.SET_ARRAY_OF_EXERCISES,
    value: e
  };
};
