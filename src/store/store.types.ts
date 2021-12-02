import { MyType } from '../components/Workout/Workout.types';

export interface Store {
  router: any;
  exersice: any;
  warmUp: any;
  stretching: any;
  indexItem: number;
  seconds: number;
  statusTimer: string;
  isGetReady: boolean;
  arrayOfExercises: MyType;
}
