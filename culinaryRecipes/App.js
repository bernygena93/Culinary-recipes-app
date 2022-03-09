import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import MainNavigator from './src/navigations';
import {Provider} from 'react-redux';
import store from './src/store/index';
import {init} from './src/db/index';

init()
  .then(() => console.log('database intialized'))
  .catch(err => console.log('error al inicair db', err));

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
};

export default App;
