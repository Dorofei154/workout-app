import { Progress } from 'antd';
import React, { memo } from 'react';
import { CONSTANTS, ROUTES } from '../../constants/constants';
import { S } from '../../Global.styles';
import { IProps } from './HeaderWorkout.types';

const HeaderViewContainer = ({
  arrowButtonLeft,
  index,
  seconds,
  duration,
  indexItem,
  history,
  arrowButtonRight,
  arrLength,
  arrayOfExercises,
  setSeconds,
  setGetReady,
  setIndexItemPlus
}: IProps) => {
  return (
    <S.WrapperWorkoutHeader>
      <S.ArrowButton
        onClick={() => {
          setGetReady();
          setSeconds(5);
        }}
      >
        <img src={arrowButtonLeft} alt="" />
      </S.ArrowButton>

      <Progress
        type="circle"
        key={index}
        width={200}
        strokeColor={CONSTANTS.GREEN}
        strokeWidth={6}
        percent={seconds * (100 / duration)}
        format={() => `${seconds}`}
      />
      <S.ArrowButton
        onClick={() => {
          if (indexItem === arrLength) {
            return history.push({
              pathname: ROUTES.COMPLETE_ROUTE,
              state: arrayOfExercises
            });
          }
          setSeconds(5);
          setGetReady();
          setIndexItemPlus();
        }}
      >
        <img src={arrowButtonRight} alt="" />
      </S.ArrowButton>
    </S.WrapperWorkoutHeader>
  );
};

export const HeaderView = memo(HeaderViewContainer);
