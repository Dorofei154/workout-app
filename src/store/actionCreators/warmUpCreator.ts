import { MyTypeWithout } from '../../components/Workout/Workout.types';
import { ACTIONS } from '../../constants/actions';

export const warmUpCreator = (e: MyTypeWithout[]) => {
  return {
    type: ACTIONS.SET_WARM_UP,
    value: e
  };
};
