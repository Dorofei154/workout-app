import { call, put, takeEvery } from 'redux-saga/effects';
import { ACTIONS } from '../constants/actions';
import { exerciseCreator } from './actionCreators/exerciseCreator';
import { stretchingCreator } from './actionCreators/stretchingCreator';
import { warmUpCreator } from './actionCreators/warmUpCreator';

function* fetchApi() {
  try {
    const user: Response = yield call(() =>
      fetch(String(process.env.REACT_APP_API_URL))
    );
    const data: { data: { questions: [{}, {}, {}] } } = yield user.json();
    console.log(data.data);
    yield put(warmUpCreator(data.data.questions[0]));
    yield put(exerciseCreator(data.data.questions[1]));
    yield put(stretchingCreator(data.data.questions[2]));
  } catch (e: any) {
    yield put({ type: 'SET_NEW_HEADER', value: 3 });
  }
}

function* mySaga() {
  yield takeEvery(ACTIONS.SET_SAGA, fetchApi);
}

export default mySaga;
