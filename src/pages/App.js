/* eslint-disable import/no-named-as-default-member */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { Routes } from '../config';
import { AppContextProvider } from '../context';

const App = () => (
  <AppContextProvider>
    <Routes />
  </AppContextProvider>
);

export default App;
