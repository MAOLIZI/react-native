/**
 * Sample React Native App
 * https://github.com/MaoLiZi/react-native
 * Created By MaoLiZi
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import CONFIG from "app/config";
import Screens from "app/screens/index";


export default class App extends Component{
  render() {
    return <View style={styles.container}>
      <Screens />
    </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CONFIG.divideColor,
    padding: 10,
  },
});

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });
