import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { S } from '../../Global.styles';

import ArrowButtonRight from '../../img/Vector2.png';
import StopButton from '../../img/Pause.png';
import PlayButton from '../../img/Play.png';
import ArrowButtonLeft from '../../img/Vector1.png';
import { indexItemCreator } from '../../store/actionCreators/indexItemCreator';
import { secondsCreator } from '../../store/actionCreators/secondsCreator';
import { CONSTANTS } from '../../constants/constants';
import { statusTimerCreator } from '../../store/actionCreators/statusTimerCreator';
import ReactPlayer from 'react-player';
import { useHistory } from 'react-router';
import { doneCreator } from '../../store/actionCreators/doneCreator';
import { getReadyCreator } from '../../store/actionCreators/getReadyCreator';
import { MyType } from './Workout.types';
import { Store } from 'antd/lib/form/interface';
import { HeaderView } from '../HeaderWorkout/HeaderWorkout';
import { HeaderGetReadyView } from '../HeaderWorkoutGetReady/HeaderWorkoutGetReady';
import { changeDone } from '../../firebase';

const Workout = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const states = useSelector((state: Store) => state);
  const setSeconds = useCallback(
    (e: number) => {
      dispatch(secondsCreator(e));
    },
    [dispatch]
  );

  const setStatusTimer = useCallback(
    (e: string) => {
      dispatch(statusTimerCreator(e));
    },
    [dispatch]
  );

  const setGetReady = useCallback(() => {
    dispatch(getReadyCreator(!states.isGetReady));
  }, [dispatch, states.isGetReady]);

  const setIndexItemPlus = useCallback(() => {
    dispatch(indexItemCreator(states.indexItem + 1));
  }, [dispatch, states.indexItem]);

  const setIndexItemMinus = useCallback(() => {
    dispatch(indexItemCreator(states.indexItem - 1));
  }, [dispatch, states.indexItem]);

  const setDone = useCallback(
    (e) => {
      dispatch(doneCreator(e));
    },
    [dispatch]
  );

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (states.statusTimer === CONSTANTS.WORKING && !states.isGetReady) {
      interval = setInterval(() => {
        setSeconds(states.seconds - 1);
      }, 1000);

      if (
        states.seconds <= 0 &&
        states.indexItem <= states.router.location.state.length
      ) {
        setIndexItemPlus();
        setGetReady();
        setDone(states.router.location.state[states.indexItem]);
        setSeconds(5);

        clearInterval(interval);
      }
    }
    if (states.statusTimer === CONSTANTS.WORKING && states.isGetReady) {
      interval = setInterval(() => {
        setSeconds(states.seconds - 1);
      }, 1000);
      if (
        states.seconds <= 0 &&
        states.indexItem <= states.router.location.state.length
      ) {
        setGetReady();
        setSeconds(states.router.location.state[states.indexItem].duration);
        changeDone(
          states?.currentUser?.email,
          states.router.location.state[states.indexItem]
        );
        clearInterval(interval);
      }
    }
    return () => {
      return clearInterval(interval);
    };
  }, [
    setDone,
    setGetReady,
    setIndexItemPlus,
    setSeconds,
    states,
    states.seconds
  ]);

  return (
    <S.Wrapper>
      {/*TODO states.router.location.state  избався от таких длинных цепочек,  вынеси все if из ретурн и сдлай несколько return по условию( в компоненте)*/}
      {states.router.location.state.map(
        // eslint-disable-next-line array-callback-return
        (item: MyType, index: string) => {
          if (index === states.indexItem) {
            if (states.isGetReady) {
              return (
                <S.Wrapper>
                  <S.H1>Get Ready</S.H1>
                  <HeaderGetReadyView
                    arrowButtonLeft={ArrowButtonLeft}
                    index={index}
                    seconds={states.seconds}
                    indexItem={states.indexItem}
                    arrowButtonRight={ArrowButtonRight}
                    duration={item.duration}
                    arrayOfExercises={states.router.location.state}
                    setGetReady={setGetReady}
                    setSeconds={setSeconds}
                    setIndexItemMinus={setIndexItemMinus}
                  />
                  <ReactPlayer
                    playing={
                      states.statusTimer === CONSTANTS.WORKING ? true : false
                    }
                    loop
                    url={item.video}
                  ></ReactPlayer>
                  <img
                    onClick={() => {
                      states.statusTimer === CONSTANTS.WORKING
                        ? setStatusTimer(CONSTANTS.PAUSED)
                        : setStatusTimer(CONSTANTS.WORKING);
                    }}
                    src={
                      states.statusTimer === CONSTANTS.WORKING
                        ? StopButton
                        : PlayButton
                    }
                    alt=""
                  />
                </S.Wrapper>
              );
            }
            return (
              <S.Wrapper>
                <S.H1>{item.title}</S.H1>
                <HeaderView
                  arrowButtonLeft={ArrowButtonLeft}
                  index={index}
                  seconds={states.seconds}
                  duration={item.duration}
                  indexItem={states.indexItem}
                  arrowButtonRight={ArrowButtonRight}
                  arrLength={states.router.location.state.length - 1}
                  arrayOfExercises={states.router.location.state}
                  setGetReady={setGetReady}
                  setIndexItemPlus={setIndexItemPlus}
                  setSeconds={setSeconds}
                  history={history}
                />
                <ReactPlayer
                  playing={
                    states.statusTimer === CONSTANTS.WORKING ? true : false
                  }
                  loop
                  url={item.video}
                ></ReactPlayer>
                <img
                  onClick={() => {
                    states.statusTimer === CONSTANTS.WORKING
                      ? setStatusTimer(CONSTANTS.PAUSED)
                      : setStatusTimer(CONSTANTS.WORKING);
                  }}
                  src={
                    states.statusTimer === CONSTANTS.WORKING
                      ? StopButton
                      : PlayButton
                  }
                  alt=""
                />
              </S.Wrapper>
            );
          }
        }
      )}
    </S.Wrapper>
  );
};

export const WorkoutContainer = Workout;
