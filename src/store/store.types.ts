import { User } from 'firebase/auth';
import { MyType, MyTypeWithout } from '../components/Workout/Workout.types';

export interface Store {
  router: any;
  exersice: MyTypeWithout[];
  warmUp: MyTypeWithout[];
  stretching: MyTypeWithout[];
  email: string;
  currentUser: User | null | undefined;
  password: string;
  indexItem: number;
  seconds: number;
  statusTimer: string;
  isGetReady: boolean;
  arrayOfExercises: MyType;
}
