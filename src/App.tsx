import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import AppRouter from './components/Approuter';
import { store, history } from './store/store';
import 'antd/dist/antd.css';
import { LoginProvider } from './context';

function App() {
  return (
    <Provider store={store}>
      <LoginProvider>
        <ConnectedRouter history={history}>
          <AppRouter />
        </ConnectedRouter>
      </LoginProvider>
    </Provider>
  );
}

export default App;
