import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { S } from '../../Global.styles';
import { sagaCreator } from '../../store/actionCreators/sagaCreator';
import { ExersiceGroupContainer } from '../ExersiceGroup/ExersiceGroup';
import { StratchingGroupContainer } from '../StretchingGroup/StretchingGroup';
import { WarmUpGroupContainer } from '../WarmUpGroup/WarmUpGroup';
import MainImg from '../../img/image.png';
import { HeaderOverviewContainer } from '../HeaderOverview/HeaderOverview';
import { Space, Spin } from 'antd';

const Overview = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state);
  const onSomeButtonClicked = useCallback(() => {
    dispatch(sagaCreator());
  }, [dispatch]);

  useEffect(() => {
    onSomeButtonClicked();
  }, [onSomeButtonClicked]);
  if (
    !state?.exersice?.exercises ||
    !state?.warmUp?.exercises ||
    !state?.stretching?.exercises
  ) {
    return (
      <S.WrapperLoader>
        <Space size="middle">
          <Spin size="large" />
        </Space>
      </S.WrapperLoader>
    );
  }
  return (
    <S.Wrapper>
      <S.ImgMain src={MainImg}></S.ImgMain>
      <HeaderOverviewContainer />
      <ExersiceGroupContainer />
      <StratchingGroupContainer />
      <WarmUpGroupContainer />
      <S.ButtonStartWorkout onClick={() => console.log(state)}>
        Start Workout
      </S.ButtonStartWorkout>
    </S.Wrapper>
  );
};

export const OverviewContainer = Overview;
