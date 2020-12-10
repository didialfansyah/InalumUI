/* eslint-disable no-const-assign */
/* eslint-disable no-console */
/* eslint-disable no-use-before-define */
/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
import {
  SafeAreaView, Text, FlatList, StyleSheet, View,
} from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import axios from 'axios';

// Step 1 - Buat Pages/Component menggunakan SafeAreaview. Set container flex = 1
// Step 2 - menyiapkan data berupa array of object (id, title, dan completed)
// Step 3 - Gunakan FlatList element dari react-native untuk menampilkan list data pada step ke 2
//

const toDoList = [
  {
    id: 1,
    title: 'Prepare learning material PTP',
    completed: false,
  },
  {
    id: 2,
    title: 'Learning React Native',
    completed: false,
  },
  {
    id: 3,
    title: 'Coding FlatList',
    completed: false,
  },
];

const LeftAction = () => (
  <View>
    <Text>Uncompleted</Text>
  </View>
);

const RightAction = () => (
  <View>
    <Text>Done</Text>
  </View>
);

const Session4 = () => {
  const [todos, setToDos] = useState(toDoList);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10')
      .then((response) => {
        console.log(response.data);
        setToDos(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios.post('https://jsonplaceholder.typicode.com/users/', {
      id: 12,
      name: 'Didi Alfansyah',
      username: 'Mzero',
      email: 'didialfansyah@gmail.com',
      address: {
        street: 'WOW WOW WOW',
        suite: 'WOW',
        city: 'Medan',
        zipcode: '20148',
        geo: {
          lat: '-37.39887',
          lng: '81.8866',
        },
      },
      phone: '0821-6508-2099',
      website: 'wowowow.co.id',
      company: {
        name: 'Mzero Company',
        catchPhrase: 'Farming',
        bs: 'Farming real-time',
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const completeToDoList = (id) => {
    console.log(id);
    const newList = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = true;
      }
      return todo;
    });
    setToDos(newList);
  };

  const uncompleteToDoList = (id) => {
    console.log(id);
    const newList = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = false;
      }
      return todo;
    });
    setToDos(newList);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Swipeable
            renderLeftActions={LeftAction}
            onSwipeableLeftOpen={() => uncompleteToDoList(item.id)}
            renderRightActions={RightAction}
            onSwipeableRightOpen={() => completeToDoList(item.id)}
          >
            <View style={styles.item}>
              <Text style={{
                textDecorationLine: item.completed ? 'line-through' : 'none',
              }}
              >
                {item.title}
              </Text>
            </View>
          </Swipeable>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f3f3',
    // marginVertical: 8,
    // marginHorizontal: 16,
  },
});

export default Session4;
