import React, { memo } from 'react';
import { ROUTES } from '../../../constants/constants';
import { S } from '../../../Global.styles';
import { ExersiceGroupContainer } from '../../ExersiceGroup/ExersiceGroup';
import { HeaderOverviewContainer } from '../../HeaderOverview/HeaderOverview';
import { StratchingGroupContainer } from '../../StretchingGroup/StretchingGroup';
import { WarmUpGroupContainer } from '../../WarmUpGroup/WarmUpGroup';
import { IProps } from './Overview.types';

const OverviewViewComponent = ({
  mainImg,
  history,
  arrayOfExercises
}: IProps) => {
  return (
    <S.Wrapper>
      <S.ImgMain src={mainImg}></S.ImgMain>
      <HeaderOverviewContainer />
      <ExersiceGroupContainer />
      <StratchingGroupContainer />
      <WarmUpGroupContainer />
      <S.Wrapper></S.Wrapper>
      <S.ButtonStartWorkout
        onClick={() =>
          history.push({
            pathname: ROUTES.WORKOUT_ROUTE,
            state: arrayOfExercises
          })
        }
      >
        Start Workout
      </S.ButtonStartWorkout>
    </S.Wrapper>
  );
};

export const OverviewView = memo(OverviewViewComponent);
