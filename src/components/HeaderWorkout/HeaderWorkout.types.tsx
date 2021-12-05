import { RouteComponentProps } from 'react-router';
import { MyType } from '../Workout/Workout.types';

export interface IProps {
  arrowButtonLeft: string;
  arrowButtonRight: string;
  index?: string;
  seconds: number;
  duration: number;
  indexItem: number;
  arrLength: number;
  arrayOfExercises: MyType;
  setSeconds: (e: number) => void;
  setGetReady: () => void;
  setIndexItemPlus: () => void;
  history: RouteComponentProps['history'];
}
