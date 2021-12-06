import { MyTypeWithout } from '../../components/Workout/Workout.types';
import { ACTIONS } from '../../constants/actions';

export const exerciseCreator = (e: MyTypeWithout[]) => {
  return {
    type: ACTIONS.SET_EXERCISE,
    value: e
  };
};
