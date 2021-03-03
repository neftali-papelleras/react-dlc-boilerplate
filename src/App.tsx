import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';

import { INITIAL_STATE as AUTH_INITIAL_STATE } from './store/auth/reducers';

import reducers from './store/reducers';
import theme from './styles';
import routes from './routes';
import { StateProvider } from './store';

const Routes = () => useRoutes(routes);

const initialState = {
  auth: AUTH_INITIAL_STATE,
};

export default () => (
  <ThemeProvider theme={theme}>
    <StateProvider initialState={initialState} reducer={reducers}>
      <Router>
        <Routes />
      </Router>
    </StateProvider>
  </ThemeProvider>
);
