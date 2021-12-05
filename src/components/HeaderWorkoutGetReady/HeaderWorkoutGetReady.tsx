import { Progress } from 'antd';
import React, { memo } from 'react';
import { CONSTANTS } from '../../constants/constants';

import { S } from '../../Global.styles';
import { IProps } from './HeaderWorkout.types';

const HeaderWorkoutGetReady = ({
  arrowButtonLeft,
  setIndexItemMinus,
  duration,
  index,
  seconds,
  indexItem,
  arrowButtonRight,
  arrayOfExercises,
  setSeconds,
  setGetReady
}: IProps) => {
  return (
    <S.WrapperWorkoutHeader>
      {indexItem ? (
        <S.ArrowButton
          onClick={() => {
            setSeconds(arrayOfExercises[indexItem - 1].duration);
            setGetReady();
            setIndexItemMinus();
          }}
        >
          <img src={arrowButtonLeft} alt="" />
        </S.ArrowButton>
      ) : (
        <S.EmptyDiv></S.EmptyDiv>
      )}
      <Progress
        type="circle"
        key={index}
        width={200}
        strokeColor={CONSTANTS.GREEN}
        strokeWidth={6}
        percent={seconds * 20}
        format={() => `${seconds}`}
      />
      <S.ArrowButton
        onClick={() => {
          setGetReady();
          setSeconds(arrayOfExercises[indexItem].duration);
        }}
      >
        <img src={arrowButtonRight} alt="" />
      </S.ArrowButton>
    </S.WrapperWorkoutHeader>
  );
};

export const HeaderGetReadyView = memo(HeaderWorkoutGetReady);
