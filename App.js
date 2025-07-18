import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import ModerationScreen from './src/screens/ModerationScreen';

export default function App() {
  return (
    <Provider store={store}>
      <ModerationScreen />
    </Provider>
  );
}
