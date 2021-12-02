import 'antd/dist/antd.css';
import { Store } from 'antd/lib/form/interface';
import { useSelector } from 'react-redux';
import { S } from '../../Global.styles';
import { MyType } from '../Workout/Workout.types';

const WarmUpGroup = () => {
  const state = useSelector((state: Store) => state);
  if (
    !state?.exersice?.exercises ||
    !state?.warmUp?.exercises ||
    !state?.stretching?.exercises
  ) {
    return <S.Wrapper></S.Wrapper>;
  }
  return (
    <S.WrapperGroup>
      <S.H3>{state.warmUp.title}</S.H3>
      <S.Ul>
        {state.warmUp.exercises.map((item: MyType, index: number) => {
          return (
            <S.List key={index}>
              <S.Img src={item.photo} alt="#" />
              <S.WrapperList>
                <S.H2>{item.title}</S.H2>
                <S.Span>{item.duration} sec</S.Span>
              </S.WrapperList>
            </S.List>
          );
        })}
      </S.Ul>
    </S.WrapperGroup>
  );
};

export const WarmUpGroupContainer = WarmUpGroup;
