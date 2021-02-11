import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';

import store from './store';

export default function Index() {
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
    </Provider>
  );
}
