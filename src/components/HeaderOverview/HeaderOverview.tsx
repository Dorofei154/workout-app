import { useHistory } from 'react-router';
import { ROUTES } from '../../constants/constants';
import { S } from '../../Global.styles';

const HeaderOverview = () => {
  const history = useHistory();
  return (
    <S.WrapperGroup>
      <S.Span>Day 1</S.Span>
      <S.H1>Morning Flexibility Routine</S.H1>
      <S.Span>Easy • 15 min • No equipment </S.Span>
      <S.AddActivity
        onClick={() => {
          history.push(ROUTES.ADD_NEW_ACTIVITY_ROUTE);
        }}
      >
        Add new activity
      </S.AddActivity>
    </S.WrapperGroup>
  );
};

export const HeaderOverviewContainer = HeaderOverview;
