import {} from 'react-native';
import React from 'react';
import StackNavigation from './navigations/StackNavigation';
import {Provider} from 'react-redux';
import store from '../store';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <StackNavigation />
      </Provider>
    </>
  );
};

export default App;
