/* eslint-disable react/prop-types */
/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  StatusBar,
} from 'react-native';
import {
  Input,
  Button,
  Icon,
  SocialIcon,
} from 'react-native-elements';

import { LgInalum } from '../../assets';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [stt1, setStt1] = useState(false);

  const [password, setPassword] = useState('');
  const [stt2, setStt2] = useState(false);

  const handleLogin = () => {
    if (username !== 'admin@admin.com') {
      setStt1(true);
      setStt2(false);
    } else if (password !== 'admin123') {
      setStt1(false);
      setStt2(true);
    } else {
      navigation.replace('Main');
    }
  };

  return (
    <SafeAreaView style={style.container}>
      <StatusBar barStyle="light-content" backgroundColor="#273c75" />
      <Image
        source={LgInalum}
        style={style.strach}
        resizeMode="contain"
      />
      <Input
        placeholder="Username"
        rightIcon={(
          <Icon
            name="user"
            type="font-awesome"
            size={24}
            color="#273c75"
          />
      )}
        value={username}
        onChangeText={(text) => setUsername(text)}
        errorStyle={{ color: 'red' }}
        errorMessage={(stt1 ? 'Username not registed' : '')}
      />
      <Input
        placeholder="Password"
        rightIcon={(
          <Icon
            name="lock"
            type="font-awesome"
            size={24}
            color="#273c75"
          />
        )}
        value={password}
        onChangeText={(text) => setPassword(text)}
        errorStyle={{ color: 'red' }}
        errorMessage={(stt2 ? 'Password not registed' : '')}
        secureTextEntry
      />
      <Button
        icon={{
          name: 'login',
          type: 'entypo',
          size: 24,
          color: '#7f8fa6',
        }}
        iconRight
        title="Sign In"
        containerStyle={{ width: '100%' }}
        buttonStyle={{ backgroundColor: '#273c75' }}
        onPress={() => handleLogin()}
      />
      <View style={style.liner} />
      <SocialIcon
        title="Sign In With Facebook"
        button
        type="facebook"
        style={{ width: '100%' }}
      />
      <SocialIcon
        title="Sign In With Github"
        button
        type="github"
        style={{ width: '100%' }}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  liner: {
    width: '100%',
    height: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#b2bec3',
    marginTop: 15,
    marginBottom: 10,
  },
  strach: {
    width: '70%',
    height: 200,
  },
});

export default Login;
