import { GroupExercises } from '../../components/Workout/Workout.types';
import { ACTIONS } from '../../constants/actions';

export const exerciseCreator = (e: GroupExercises) => {
  return {
    type: ACTIONS.SET_EXERCISE,
    value: e
  };
};
