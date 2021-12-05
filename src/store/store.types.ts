import { User } from 'firebase/auth';
import { MyType } from '../components/Workout/Workout.types';

export interface Store {
  router: any;
  exersice: any;
  warmUp: any;
  stretching: any;
  email: string;
  currentUser: User | null | undefined;
  password: string;
  indexItem: number;
  seconds: number;
  statusTimer: string;
  isGetReady: boolean;
  arrayOfExercises: MyType;
}
