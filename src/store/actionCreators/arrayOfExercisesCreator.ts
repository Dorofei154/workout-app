import { MyTypeWithout } from '../../components/Workout/Workout.types';
import { ACTIONS } from '../../constants/actions';

export const arrayOfExercisesCreator = (e: MyTypeWithout[]) => {
  return {
    type: ACTIONS.SET_ARRAY_OF_EXERCISES,
    value: e
  };
};
