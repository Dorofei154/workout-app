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
import { CONSTANTS } from '../../constants/constants';
import { statusTimerCreator } from '../../store/actionCreators/statusTimerCreator';
import ReactPlayer from 'react-player';
import { getReadyCreator } from '../../store/actionCreators/getReadyCreator';
import { sagaCreator } from '../../store/actionCreators/sagaCreator';

const Workout = () => {
  const dispatch = useDispatch();

  const states = useSelector((state: any) => state);
  const setSeconds = useCallback(
    (e: any) => {
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

  const onSomeButtonClicked = useCallback(() => {
    dispatch(sagaCreator());
  }, [dispatch]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    onSomeButtonClicked();

    if (states.statusTimer === CONSTANTS.WORKING && !states.isGetReady) {
      interval = setInterval(() => {
        setSeconds(states.seconds - 1);
      }, 1000);
      if (
        states.seconds <= 0 &&
        states.indexItem <= states.router.location.state.arrayOfExercises.length
      ) {
        setIndexItemPlus();
        setGetReady();
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
        states.indexItem <= states.router.location.state.arrayOfExercises.length
      ) {
        setGetReady();
        setSeconds(
          states.router.location.state.arrayOfExercises[states.indexItem]
            .duration
        );
        clearInterval(interval);
      }
    }
    return () => {
      return clearInterval(interval);
    };
  }, [
    onSomeButtonClicked,
    setGetReady,
    setIndexItemPlus,
    setSeconds,
    states.indexItem,
    states.isGetReady,
    states.router.location.state.arrayOfExercises,
    states.router.location.state.arrayOfExercises.length,
    states.seconds,
    states.statusTimer
  ]);

  return (
    <S.Wrapper>
      {
        // eslint-disable-next-line array-callback-return
        states.router.location.state.arrayOfExercises.map(
          (item: any, index: string) => {
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
                              states.router.location.state.arrayOfExercises[
                                states.indexItem - 1
                              ].duration
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
                        strokeColor="#24BB0C"
                        strokeWidth={6}
                        percent={states.seconds * 20}
                        format={() => `${states.seconds}`}
                      />
                      <S.ArrowButton
                        onClick={() => {
                          setGetReady();
                          setSeconds(
                            states.router.location.state.arrayOfExercises[
                              states.indexItem
                            ].duration
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
              console.log(item.duration, states.seconds);
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
                      strokeColor="#24BB0C"
                      strokeWidth={6}
                      percent={states.seconds * (100 / item.duration)}
                      format={() => `${states.seconds}`}
                    />
                    <S.ArrowButton
                      onClick={() => {
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

            // return <Progress type="circle" key={index} width={200} strokeWidth={6} percent={states.seconds*3.3} format={() => `${states.seconds}`} />
          }
        )
        // [exersice,stretching,warmUp].map((item:any)=> {
        //  return item.exercises.map((item:any)=>{
        //   const res = item.duration;
        //   const interval = setInterval(() => {
        //     item.duration = res - 1;
        //   }, 1000);
        //   if (item.duration < 0) {
        //     clearInterval(interval);
        //   }

        //     return (
        //       <S.WrapperWorkoutHeader>
        //         <div style={{width:74}}></div>
        //        <Progress type="circle" width={200} strokeWidth={6} percent={item.duration*3.3} format={() => `${item.duration}`} />
        //       <S.ArrowButton onClick={()=>console.log(exersice)} ><img src={ArrowButton} alt="" /></S.ArrowButton>
        //       </S.WrapperWorkoutHeader>
        //     )
        //   })
        // })
      }

      {/* <S.H1>Get ready</S.H1>
   
   <S.WrapperWorkoutHeader>
     <div style={{width:74}}></div>
   <Progress type="circle" width={200} strokeWidth={6} percent={seconds*20} format={() => `${seconds}`} />
    </S.WrapperWorkoutHeader>

    
    <S.ImgWorkout src={exersice.muscle_group.photo}/> */}
    </S.Wrapper>
  );
};

export const WorkoutContainer = Workout;
