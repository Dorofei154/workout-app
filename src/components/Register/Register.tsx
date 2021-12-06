import { Store } from 'rc-field-form/lib/interface';
import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { LoginContext } from '../../context/context';
import { emailCreator } from '../../store/actionCreators/emailCreator';
import { passwordCreator } from '../../store/actionCreators/passwordCreator';

import { RegisterView } from '../views/Register/Register';

const RegisterContainerComponent = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: Store) => state);
  const setPassword = (e: string) => {
    dispatch(passwordCreator(e));
  };
  const setEmail = (e: string) => {
    dispatch(emailCreator(e));
  };

  const text = 'Registration';
  const history = useHistory();
  const { handleRegistration } = useContext(LoginContext);

  return (
    <RegisterView
      password={state.password}
      email={state.email}
      text={text}
      handleRegistration={handleRegistration}
      history={history}
      handleChangeEmail={setEmail}
      handleChangePassword={setPassword}
    />
  );
};

export const RegisterContainer = RegisterContainerComponent;
