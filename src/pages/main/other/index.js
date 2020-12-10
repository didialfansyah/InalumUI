/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, {
  useContext,
} from 'react';
import { Text, View } from 'react-native';
import {
  Input, Icon, Badge,
} from 'react-native-elements';
import { AppContext } from '../../../context';

const Other = ({ navigation }) => {
  const { counter, initialFood } = useContext(AppContext);
  const [count, setCount] = counter;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: 120 }}>
          <Icon name="heart" type="ionicon" color="#fff" />
          <Icon name="notifications" type="ionicon" color="#fff" />
          <View>
            <Icon name="shopping-cart" type="feather" color="#fff" />
            <Badge
              status="success"
              containerStyle={{ position: 'absolute', top: -4, right: -4 }}
              value={count}
            />
          </View>
        </View>
      ),
      headerLeft: () => (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 220 }}>
          <View style={{ padding: 20 }}>
            <Icon
              name="menu"
              type="ionicon"
              color="#fff"
              onPress={() => navigation.openDrawer()}
            />
          </View>
          <Input style={{ color: '#fff', padding: 0 }} containerStyle={{ width: '100%' }} />
        </View>
      ),
      title: 'Other',
      headerTitle: null,
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Other Pages</Text>
    </View>
  );
};

export default Other;
