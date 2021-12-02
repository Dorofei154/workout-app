import { ExercisesWithDone } from '../../components/Workout/Workout.types';
import { ACTIONS } from '../../constants/actions';

export const arrayOfExercisesCreator = (e: ExercisesWithDone[]) => {
  return {
    type: ACTIONS.SET_ARRAY_OF_EXERCISES,
    value: e
  };
};
