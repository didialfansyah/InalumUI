/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import React, {
  useRef, useState, useEffect, useContext,
} from 'react';
import {
  View,
  StatusBar,
  SafeAreaView,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import {
  Input, Icon, Button, Avatar, Badge,
} from 'react-native-elements';
import { AppContext } from '../../../context';
import {
  IAlloy, IBillet, IInggot, LgInalum,
} from '../../../assets';

const ENTRIES1 = [
  {
    title: 'Beautiful and dramatic Antelope Canyon',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/UYiroysl.jpg',
  },
  {
    title: 'Earlier this morning, NYC',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
  },
  {
    title: 'White Pocket Sunset',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: 'https://i.imgur.com/MABUbpDl.jpg',
  },
  {
    title: 'Acrocorinth, Greece',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
  },
  {
    title: 'The lone tree, majestic landscape of New Zealand',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
  },
];

const { width: screenWidth } = Dimensions.get('window');

const Home = ({ navigation }) => {
  const { counter, initialFood } = useContext(AppContext);
  const [count, setCount] = counter;
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  const tambahPesanan = () => {
    setCount(count + 1);
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
    });
  };

  const kurangiPesanan = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

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
      title: 'Home',
      headerTitle: null,
    });
  }, [navigation]);

  const renderItem = ({ item, index }, parallaxProps) => (
    <View style={styles.item}>
      <ParallaxImage
        source={{ uri: item.illustration }}
        containerStyle={styles.imageContainer}
        style={styles.image}
        parallaxFactor={0.4}
        {...parallaxProps}
      />
      <Text style={styles.title} numberOfLines={2}>
        {item.title}
      </Text>
    </View>
  );

  return (
    <ScrollView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor="#273c75" />
      <View style={styles.container}>
        <Carousel
          ref={carouselRef}
          sliderWidth={screenWidth}
          sliderHeight={screenWidth}
          itemWidth={screenWidth - 60}
          data={entries}
          renderItem={renderItem}
          hasParallaxImages
        />
        <TouchableOpacity
          style={styles.produk}
          onPress={() => tambahPesanan()}
        >
          <Image
            source={IInggot}
            style={styles.strach}
            resizeMode="contain"
          />
          <Text style={styles.title2}>
            Aluminium Inggot
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.produk}
          onPress={() => tambahPesanan()}
        >
          <Image
            source={IBillet}
            style={styles.strach}
            resizeMode="contain"
          />
          <Text style={styles.title2}>
            Aluminium Billet
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.produk}
          onPress={() => tambahPesanan()}
        >
          <Image
            source={IAlloy}
            style={styles.strach}
            resizeMode="contain"
          />
          <Text style={styles.title2}>
            Aluminium Alloy
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
  },
  item: {
    width: screenWidth - 60,
    height: screenWidth - 60,
  },
  imageContainer: {
    flex: 1,
    marginBottom: 1, // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  title: {
    position: 'absolute',
    bottom: 0,
    color: 'white',
    width: '100%',
    backgroundColor: 'rgba(45, 52, 54,0.7)',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    padding: 20,
    fontSize: 18,
    textAlign: 'center',
  },
  produk: {
    width: '100%',
    alignItems: 'center',
    padding: 30,
    paddingTop: 0,
    paddingBottom: 0,
  },
  strach: {
    width: '100%',
    height: 300,
    margin: 0,
  },
  title2: {
    position: 'absolute',
    bottom: 0,
    color: 'white',
    width: '100%',
    backgroundColor: '#273c75',
    padding: 20,
    fontSize: 18,
    textAlign: 'center',
  },
});
