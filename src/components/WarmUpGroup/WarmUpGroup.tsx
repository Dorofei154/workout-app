import 'antd/dist/antd.css';
import { Store } from 'antd/lib/form/interface';
import { useSelector } from 'react-redux';
import { S } from '../../Global.styles';
import { MyTypeWithout } from '../Workout/Workout.types';

const WarmUpGroup = () => {
  const state = useSelector((state: Store) => state);
  if (!state?.exersice || !state?.warmUp || !state?.stretching) {
    return <S.Wrapper></S.Wrapper>;
  }
  return (
    <S.WrapperGroup>
      <S.H3>Warm Up</S.H3>
      <S.Ul>
        {state.warmUp.map((item: MyTypeWithout, index: number) => {
          return (
            <S.List key={index}>
              <S.Img src={item.photo} alt="#" />
              <S.WrapperList>
                <S.H2>
                  {item.title}{' '}
                  {item.done ? <S.CheckOutlined></S.CheckOutlined> : null}
                </S.H2>
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
