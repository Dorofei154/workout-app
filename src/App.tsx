import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import AppRouter from './components/Approuter';
import { store, history } from './store/store';
import 'antd/dist/antd.css';

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <AppRouter />
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
