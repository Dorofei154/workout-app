import { OverviewContainer } from '../components/Overview/Overview';
import { WorkoutContainer } from '../components/Workout/Workout';
import { CompliteContainer } from '../components/Complite/Complite';
import { ROUTES } from '../constants/constants';

const { OVERVIEW_ROUTE, WORKOUT_ROUTE, COMPLITE_ROUTE } = ROUTES;

const routes = [
  {
    path: OVERVIEW_ROUTE,
    Component: OverviewContainer
  },
  {
    path: WORKOUT_ROUTE,
    Component: WorkoutContainer
  },
  {
    path: COMPLITE_ROUTE,
    Component: CompliteContainer
  }
];

export { routes };
