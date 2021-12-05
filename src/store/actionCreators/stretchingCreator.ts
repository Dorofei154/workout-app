import { MyTypeWithout } from '../../components/Workout/Workout.types';
import { ACTIONS } from '../../constants/actions';

export const stretchingCreator = (e: Promise<MyTypeWithout[]>) => {
  return {
    type: ACTIONS.SET_STRETCHING,
    value: e
  };
};
