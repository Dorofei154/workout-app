import { Result } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { S } from '../../Global.styles';
import { MyType } from '../Workout/Workout.types';
import { Store } from '../../store/store.types';
import { useHistory } from 'react-router';
import { ROUTES } from '../../constants/constants';

const Complete = () => {
  const state = useSelector((state: Store) => state);
  const history = useHistory();
  return (
    <div>
      <Result
        icon={<S.CheckOutlined />}
        title="Workout completed!"
        subTitle={`Nice job. You’re done. Here’s the workout summary:
     ${new Date(
       state.router.location.state.reduce(
         (acc: number, current: MyType) => (acc += current.duration),
         0
       ) * 1000
     )
       .toISOString()
       .substr(14, 5)}`}
        extra={
          <S.ButtonStartWorkout
            onClick={() => history.push(ROUTES.OVERVIEW_ROUTE)}
          >
            Save & Continue
          </S.ButtonStartWorkout>
        }
      />
    </div>
  );
};

export const CompleteContainer = Complete;
