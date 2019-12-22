import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import AppTodo from "./AppTodo";
import {Provider} from "react-redux";
import store from "./store";

export default function App() {
  return (

      <Provider store={store}>
      {/*<ScrollView>*/}
        <View style={styles.container}>
            <Text>MY TODOLIST</Text>
          <AppTodo />
        </View>
      {/*</ScrollView>*/}
      </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
      margin: 25,
  },
});
