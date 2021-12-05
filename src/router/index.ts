import { OverviewContainer } from '../components/Overview/Overview';
import { WorkoutContainer } from '../components/Workout/Workout';
import { CompleteContainer } from '../components/Complete/Complete';
import { ROUTES } from '../constants/constants';
import { LoginContainer } from '../components/Login/Login';
import { RegisterContainer } from '../components/Register/Register';
import { AddNewActivityContainer } from '../components/AddNewActivity/AddNewActivity';

const {
  ADD_NEW_ACTIVITY_ROUTE,
  OVERVIEW_ROUTE,
  WORKOUT_ROUTE,
  COMPLETE_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE
} = ROUTES;

const routes = [
  {
    path: LOGIN_ROUTE,
    Component: LoginContainer
  },
  {
    path: ADD_NEW_ACTIVITY_ROUTE,
    Component: AddNewActivityContainer
  },
  {
    path: REGISTRATION_ROUTE,
    Component: RegisterContainer
  },
  {
    path: OVERVIEW_ROUTE,
    Component: OverviewContainer
  },
  {
    path: WORKOUT_ROUTE,
    Component: WorkoutContainer
  },
  {
    path: COMPLETE_ROUTE,
    Component: CompleteContainer
  }
];

export { routes };
