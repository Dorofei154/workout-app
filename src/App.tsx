import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './components/Approuter';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppRouter />
      </Router>
    </Provider>
  );
}

export default App;
