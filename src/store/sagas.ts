import { call, put, select, takeEvery } from 'redux-saga/effects';
import { MyTypeWithout } from '../components/Workout/Workout.types';
import { ACTIONS } from '../constants/actions';
import { addExersices, getArrExercise, getCollection } from '../firebase';
import { arrayOfExercisesCreator } from './actionCreators/arrayOfExercisesCreator';
import { exerciseCreator } from './actionCreators/exerciseCreator';

import { stretchingCreator } from './actionCreators/stretchingCreator';
import { warmUpCreator } from './actionCreators/warmUpCreator';
import { SagasProps } from './sagasTypes';
import { getEmail } from './selectors';

const handleGetExercises = async (title: string, email: string) => {
  const res = await getCollection(email, title);
  return res;
};

function* FetchApi() {
  const user: Response = yield call(() =>
    fetch(String(process.env.REACT_APP_API_URL))
  );
  const data: SagasProps = yield user.json();
  const email: string = yield select(getEmail);

  yield addExersices(email, data.data.questions);

  const resWarm: MyTypeWithout[] = yield call(
    handleGetExercises,
    data.data.questions[0].title,
    email
  );
  const resExercise: MyTypeWithout[] = yield call(
    handleGetExercises,
    data.data.questions[1].title,
    email
  );
  const resStretching: MyTypeWithout[] = yield call(
    handleGetExercises,
    data.data.questions[2].title,
    email
  );
  yield put(warmUpCreator(resWarm));
  yield put(exerciseCreator(resExercise));
  yield put(stretchingCreator(resStretching));

  const todos: MyTypeWithout[] = yield call(getArrExercise, email);
  yield put(arrayOfExercisesCreator(todos));
}

function* mySaga() {
  yield takeEvery(ACTIONS.SET_SAGA, FetchApi);
}

export default mySaga;
