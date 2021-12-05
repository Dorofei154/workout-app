import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sagaCreator } from '../../store/actionCreators/sagaCreator';
import MainImg from '../../img/image.png';
import { useHistory } from 'react-router';
import { Store } from 'antd/lib/form/interface';
import { OverviewView } from '../views/Overview/Overview';
import { LoaderView } from '../views/Loader/Loader';

const Overview = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: Store) => state);
  const sagaLoader = useCallback(() => {
    dispatch(sagaCreator());
  }, [dispatch]);
  const history = useHistory();
  useEffect(() => {
    sagaLoader();
  }, [sagaLoader]);

  if (!state?.exersice || !state?.warmUp || !state?.stretching) {
    return (
      <>
        <LoaderView />
      </>
    );
  }
  return (
    <>
      <OverviewView
        mainImg={MainImg}
        history={history}
        arrayOfExercises={state.arrayOfExercises}
      />
    </>
  );
};

export const OverviewContainer = Overview;
