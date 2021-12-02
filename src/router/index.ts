import { OverviewContainer } from '../components/Overview/Overview';
import { WorkoutContainer } from '../components/Workout/Workout';
import { CompleteContainer } from '../components/Complete/Complete';
import { ROUTES } from '../constants/constants';

const { OVERVIEW_ROUTE, WORKOUT_ROUTE, COMPLETE_ROUTE } = ROUTES;

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
    path: COMPLETE_ROUTE,
    Component: CompleteContainer
  }
];

export { routes };
