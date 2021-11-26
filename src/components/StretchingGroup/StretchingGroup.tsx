import 'antd/dist/antd.css';
import { useSelector } from 'react-redux';
import { S } from '../../Global.styles';

const StratchingGroup = (props: any) => {
  const state = useSelector((state: any) => state);
  console.log(state);
  if (
    !state?.exersice?.exercises ||
    !state?.warmUp?.exercises ||
    !state?.stretching?.exercises
  ) {
    return <S.Wrapper></S.Wrapper>;
  }
  return (
    <S.WrapperGroup>
      <S.H3>{state.stretching.title}</S.H3>
      <S.Ul>
        {state.stretching.exercises.map((item: any) => {
          return (
            <S.List>
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

export const StratchingGroupContainer = StratchingGroup;
