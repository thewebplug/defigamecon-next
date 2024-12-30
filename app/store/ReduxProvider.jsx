
"use client";

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './reducers/authReducer';
import rootReducer from '.';

const store = configureStore({
  reducer: rootReducer,
  // Add any other Redux store configuration here
});

const ReduxProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;