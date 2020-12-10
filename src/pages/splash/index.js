/* eslint-disable react/prop-types */
/* eslint-disable no-use-before-define */
import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  StatusBar,
} from 'react-native';

import { LgInalum } from '../../assets';

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 3000);
  });

  return (
    <SafeAreaView style={style.container}>
      <StatusBar barStyle="light-content" backgroundColor="#273c75" />
      <Image
        source={LgInalum}
        style={style.strach}
        resizeMode="contain"
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#273c75',
  },
  strach: {
    width: '80%',
    height: 200,
  },
});

export default Splash;
