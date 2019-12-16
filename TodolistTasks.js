import React from 'react';
import {StyleSheet,TextInput, Text, View} from 'react-native';
import { useSelector} from "react-redux";

export default function App(props) {

  return (
      <View style={styles.container}>

          {props.id}


      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
