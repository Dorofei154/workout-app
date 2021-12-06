import { call, put, select, takeEvery } from 'redux-saga/effects';
import { MyTypeWithout } from '../components/Workout/Workout.types';
import { ACTIONS } from '../constants/actions';
import { addExersice, getArrExercise, getCollection } from '../firebase';
import { arrayOfExercisesCreator } from './actionCreators/arrayOfExercisesCreator';
import { exerciseCreator } from './actionCreators/exerciseCreator';

import { stretchingCreator } from './actionCreators/stretchingCreator';
import { warmUpCreator } from './actionCreators/warmUpCreator';
import { SagasProps } from './sagasTypes';
import { getEmail } from './selectors';

function* FetchApi() {
  const user: Response = yield call(() =>
    fetch(String(process.env.REACT_APP_API_URL))
  );
  const data: SagasProps = yield user.json();
  const email: string = yield select(getEmail);
//TODO Выглядит не понятно, и страшно исправь, можешь добавить функцию addExersiceS чтоб там можно было массивом кидать а не так
  yield addExersice(
    email,
    data.data.questions[0],
    data.data.questions[0].title
  );
  yield addExersice(
    email,
    data.data.questions[1],
    data.data.questions[1].title
  );
  yield addExersice(
    email,
    data.data.questions[2],
    data.data.questions[2].title
  );
// TODO эту функцию можно вынести отсюда
  const handleGetExercises = async (title: string) => {
    const res = await getCollection(email, title);
    return res;
  };
  const resWarm: Promise<MyTypeWithout[]> = yield call(
    handleGetExercises,
    data.data.questions[0].title
  );
  const resExercise: Promise<MyTypeWithout[]> = yield call(
    handleGetExercises,
    data.data.questions[1].title
  );
  const resStretching: Promise<MyTypeWithout[]> = yield call(
    handleGetExercises,
    data.data.questions[2].title
  );
  yield put(warmUpCreator(resWarm));
  yield put(exerciseCreator(resExercise));
  yield put(stretchingCreator(resStretching));
  //TODO зачем складывать в redux store promise, он тут его и не возвращает скорее всего ?
  const todos: Promise<MyTypeWithout[]> = yield call(getArrExercise, email);
  yield put(arrayOfExercisesCreator(todos));
}

function* mySaga() {
  yield takeEvery(ACTIONS.SET_SAGA, FetchApi);
}

export default mySaga;
