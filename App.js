import { StyleSheet, View, Text } from 'react-native';

import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";

import authReducer from "./validators/reducers/authReducer";
import cartReducer from './validators/reducers/cartReducer';

import LoginValidation from './Navigation/LoginValidator';

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <LoginValidation />
    </Provider>
  );
}

