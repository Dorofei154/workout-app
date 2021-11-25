import { call, put, takeEvery } from 'redux-saga/effects';

const url =
  'https://rnd.kilohealthservices.com/api/quizzes/workouts?api_token=4bfcebd0-0216-4572-bdb7-939e9600b9b2';

// worker Saga: будет запускаться на экшены типа `USER_FETCH_REQUESTED`
function* fetchUser(action: any) {
  try {
    const user: null = yield call<(...args: any[]) => any>(() => fetch(url));
    console.log(user);
    yield put({ type: 'SET_NEW_HEADER', value: user });
  } catch (e: any) {
    yield put({ type: 'SET_NEW_HEADER', value: 3 });
  }
}

/*
  Запускаем `fetchUser` на каждый задиспатченый экшен `USER_FETCH_REQUESTED`.
  Позволяет одновременно получать данные пользователей.
*/
function* mySaga() {
  yield takeEvery('SET_NEW_DATE', fetchUser);
}

/*
  В качестве альтернативы вы можете использовать `takeLatest`.

  Не допускает одновременное получение данных пользователей. Если `USER_FETCH_REQUESTED`
  диспатчится в то время когда предыдущий запрос все еще находится в ожидании ответа,
  то этот ожидающий ответа запрос отменяется и срабатывает только последний.
*/

export default mySaga;
