import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { S } from '../../Global.styles';
import { Progress } from 'antd';
import ArrowButtonRight from '../../img/Vector2.png';
import StopButton from '../../img/Pause.png';
import PlayButton from '../../img/Play.png';
import ArrowButtonLeft from '../../img/Vector1.png';
import { indexItemCreator } from '../../store/actionCreators/indexItemCreator';
import { secondsCreator } from '../../store/actionCreators/secondsCreator';
import { CONSTANTS, ROUTES } from '../../constants/constants';
import { statusTimerCreator } from '../../store/actionCreators/statusTimerCreator';
import ReactPlayer from 'react-player';
import { useHistory } from 'react-router';
import { doneCreator } from '../../store/actionCreators/doneCreator';
import { getReadyCreator } from '../../store/actionCreators/getReadyCreator';
import { MyType } from './Workout.types';
import { Store } from 'antd/lib/form/interface';

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
  console.log(states);

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
        console.log(states);
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
      {states.router.location.state.map(
        // eslint-disable-next-line array-callback-return
        (item: MyType, index: string) => {
          if (index === states.indexItem) {
            if (states.isGetReady) {
              return (
                <S.Wrapper>
                  <S.H1>Get Ready</S.H1>
                  <S.WrapperWorkoutHeader>
                    {states.indexItem ? (
                      <S.ArrowButton
                        onClick={() => {
                          setSeconds(
                            states.router.location.state[states.indexItem - 1]
                              .duration
                          );
                          setGetReady();
                          setIndexItemMinus();
                        }}
                      >
                        <img src={ArrowButtonLeft} alt="" />
                      </S.ArrowButton>
                    ) : (
                      <div style={{ width: 74 }}></div>
                    )}
                    <Progress
                      type="circle"
                      key={index}
                      width={200}
                      strokeColor="#1DE9B6"
                      strokeWidth={6}
                      percent={states.seconds * 20}
                      format={() => `${states.seconds}`}
                    />
                    <S.ArrowButton
                      onClick={() => {
                        setGetReady();
                        setSeconds(
                          states.router.location.state[states.indexItem]
                            .duration
                        );
                      }}
                    >
                      <img src={ArrowButtonRight} alt="" />
                    </S.ArrowButton>
                  </S.WrapperWorkoutHeader>
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
                <S.WrapperWorkoutHeader>
                  <S.ArrowButton
                    onClick={() => {
                      setGetReady();
                      setSeconds(5);
                    }}
                  >
                    <img src={ArrowButtonLeft} alt="" />
                  </S.ArrowButton>

                  <Progress
                    type="circle"
                    key={index}
                    width={200}
                    strokeColor="#1DE9B6"
                    strokeWidth={6}
                    percent={states.seconds * (100 / item.duration)}
                    format={() => `${states.seconds}`}
                  />
                  <S.ArrowButton
                    onClick={() => {
                      if (
                        states.indexItem ===
                        states.router.location.state.length - 1
                      ) {
                        return history.push({
                          pathname: ROUTES.COMPLETE_ROUTE,
                          state: states
                        });
                      }
                      setSeconds(5);
                      setGetReady();
                      setIndexItemPlus();
                    }}
                  >
                    <img src={ArrowButtonRight} alt="" />
                  </S.ArrowButton>
                </S.WrapperWorkoutHeader>
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
