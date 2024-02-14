import {} from 'react-native';
import React from 'react';
import StackNavigation from './navigations/StackNavigation';
import {Provider} from 'react-redux';
import store from '../store';
import {UserContext} from './UserContext';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <UserContext>
          <StackNavigation />
        </UserContext>
        {/* <StackNavigation /> */}
      </Provider>
    </>
  );
};

export default App;
