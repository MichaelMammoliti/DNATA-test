import 'whatwg-fetch';

import { Provider } from 'react-redux';
import store from './store';

import Pages from './pages/index.js';

import styles from './app.scss'; // eslint-disable-line

const App = () => (
  <Provider store={store}>
    <Pages.Hotels />
  </Provider>
);

export default App;
