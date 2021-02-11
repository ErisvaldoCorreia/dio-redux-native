import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';

import store from './store';
import HomeTemp from './modules';

export default function Index() {
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <HomeTemp />
    </Provider>
  );
}
