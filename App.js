import { StyleSheet, View, Text } from 'react-native';

import { Provider } from "react-redux";

import { store } from './redux/store';

import LoginValidation from './Navigation/LoginValidator';

export default function App() {
  return (
    <Provider store={store}>
      <LoginValidation />
    </Provider>
  );
}

