import React from 'react';
import {StyleSheet, Text, View, StatusBar } from 'react-native';

import './config/ReactotronConfig';

import Routes from './routes';


console.tron.log('aeeee carai');

export default function App () {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Routes />
    </>
  );
}
