import { MyType } from '../Workout/Workout.types';

export interface IProps {
  arrowButtonLeft: string;
  arrowButtonRight: string;
  index?: string;
  seconds: number;
  indexItem: number;
  duration: number;
  arrayOfExercises: MyType[];
  setSeconds: (e: number) => void;
  setIndexItemMinus: () => void;
  setGetReady: () => void;
}
