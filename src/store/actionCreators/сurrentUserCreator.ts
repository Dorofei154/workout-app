import { User } from 'firebase/auth';
import { ACTIONS } from '../../constants/actions';

export const сurrentUserCreator = (e: User | null | undefined) => {
  return {
    type: ACTIONS.SET_CURRENT_USER,
    value: e
  };
};
