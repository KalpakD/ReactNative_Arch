import React from 'react';
import Routes from './navigation/routes';
import {Provider} from 'react-redux';
import configureStore from './store';

const store = configureStore();
const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};
export default App;
