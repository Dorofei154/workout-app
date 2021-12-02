import { GroupExercises } from '../../components/Workout/Workout.types';
import { ACTIONS } from '../../constants/actions';

export const stretchingCreator = (e: GroupExercises) => {
  return {
    type: ACTIONS.SET_STRETCHING,
    value: e
  };
};
