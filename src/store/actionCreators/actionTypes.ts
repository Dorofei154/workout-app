import { MyType } from '../../components/Workout/Workout.types';

export interface ActionNumber {
  type: string;
  value: number;
}

export interface ActionBoolean {
  type: string;
  value: boolean;
}

export interface ActionString {
  type: string;
  value: string;
}

export interface ActionArrNumber {
  type: string;
  value: number[];
}

export interface ActionArrMyType {
  type: string;
  value: MyType[];
}
