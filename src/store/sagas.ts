import { call, put, takeEvery } from 'redux-saga/effects';
import { ExercisesWithDone, MyType } from '../components/Workout/Workout.types';
import { ACTIONS } from '../constants/actions';
import { addExersice } from '../firebase';
import { arrayOfExercisesCreator } from './actionCreators/arrayOfExercisesCreator';
import { exerciseCreator } from './actionCreators/exerciseCreator';

import { stretchingCreator } from './actionCreators/stretchingCreator';
import { warmUpCreator } from './actionCreators/warmUpCreator';
import { SagasProps } from './sagasTypes';

function* fetchApi() {
  const user: Response = yield call(() =>
    fetch(String(process.env.REACT_APP_API_URL))
  );

  const data: SagasProps = yield user.json();
  let arr: ExercisesWithDone[] = [];
  arr = arr.concat(
    data.data.questions[0].exercises.map((item: MyType) => {
      return { ...item, done: false };
    }),
    data.data.questions[1].exercises.map((item: MyType) => {
      return { ...item, done: false };
    }),
    data.data.questions[2].exercises.map((item: MyType) => {
      return { ...item, done: false };
    })
  );
  yield put(warmUpCreator(data.data.questions[0]));
  yield put(exerciseCreator(data.data.questions[1]));
  yield put(stretchingCreator(data.data.questions[2]));
  yield put(arrayOfExercisesCreator(arr));
  yield arr.forEach((element: MyType) => {
    addExersice(element);
  });
}

function* mySaga() {
  yield takeEvery(ACTIONS.SET_SAGA, fetchApi);
}

export default mySaga;
