import { RouteComponentProps } from 'react-router';
import { MyType } from '../../Workout/Workout.types';

export interface IProps {
  arrayOfExercises: MyType;
  mainImg: string;
  history: RouteComponentProps['history'];
}
