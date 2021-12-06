import { useContext } from 'react';

import { LoginView } from '../views/Login/Login';
import { useHistory } from 'react-router';
import { LoginContext } from '../../context/context';
import { useDispatch, useSelector } from 'react-redux';
import { passwordCreator } from '../../store/actionCreators/passwordCreator';
import { emailCreator } from '../../store/actionCreators/emailCreator';
import { Store } from 'rc-field-form/lib/interface';

const LoginContainerComponent = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: Store) => state);
  const setPassword = (e: string) => {
    dispatch(passwordCreator(e));
  };
  const setLogin = (e: string) => {
    dispatch(emailCreator(e));
  };
  const history = useHistory();
  const { handleLogin } = useContext(LoginContext);

  return (
    <>
      <LoginView
        password={state.password}
        email={state.email}
        text="Sign in"
        history={history}
        handleLogin={handleLogin}
        handleChangePassowrd={setPassword}
        handleChangeEmail={setLogin}
      />
    </>
  );
};

export const LoginContainer = LoginContainerComponent;
