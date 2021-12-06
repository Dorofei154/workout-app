import { onAuthStateChanged, User } from 'firebase/auth';
import { memo, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { сurrentUserCreator } from '../store/actionCreators/сurrentUserCreator';
import { auth, login, signup } from '../firebase';
import { LoginContext } from './context';
import { IProviderProps } from './types';
import { Store } from '../store/store.types';

function LoginProviderComponent({ children }: IProviderProps) {
  const dispatch = useDispatch();
  const state = useSelector((state: Store) => state);
  const setCurrentUser = useCallback(
    (e: User | null | undefined) => {
      dispatch(сurrentUserCreator(e));
    },
    [dispatch]
  );

  const useAuth = () => {
    return state.currentUser;
  };
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user: User | null) => {
      setCurrentUser(user);
    });
    return unsub;
  }, [setCurrentUser]);

  const handleLogin = async (email: string, password: string) => {
    try {
      await login(email, password);
    } catch (e) {
      alert('Invalid data');
    }
  };

  const handleRegistration = async (email: string, password: string) => {
    await signup(email, password);
  };

  return (
    <LoginContext.Provider
      value={{
        handleRegistration,
        handleLogin,
        useAuth
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}

export const LoginProvider = memo(LoginProviderComponent);
