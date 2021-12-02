import { GroupExercises } from '../../components/Workout/Workout.types';
import { ACTIONS } from '../../constants/actions';

export const warmUpCreator = (e: GroupExercises) => {
  return {
    type: ACTIONS.SET_WARM_UP,
    value: e
  };
};
