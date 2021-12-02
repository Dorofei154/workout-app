import { Result } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { S } from '../../Global.styles';
import { CheckOutlined } from '@ant-design/icons';
import { MyType } from '../Workout/Workout.types';
import { Store } from '../../store/store.types';

const Complete = () => {
  const state = useSelector((state: Store) => state);
  return (
    <div>
      <Result
        icon={<CheckOutlined style={{ color: '#1DE9B6' }} />}
        title="Workout completed!"
        subTitle={`Nice job. You’re done. Here’s the workout summary:
     ${new Date(
       state.router.location.state.arrayOfExercises.reduce(
         (acc: number, current: MyType) => (acc += current.duration),
         0
       ) * 1000
     )
       .toISOString()
       .substr(14, 5)}`}
        extra={
          <S.ButtonStartWorkout onClick={() => console.log(state)}>
            Save & Continue
          </S.ButtonStartWorkout>
        }
      />
    </div>
  );
};

export const CompleteContainer = Complete;
