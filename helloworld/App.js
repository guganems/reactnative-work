/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    const imageInfo = {
      uri: "https://scontent.ftbs3-1.fna.fbcdn.net/v/t1.0-9/68892295_2542809562429443_1040231737537331200_n.png?_nc_cat=1&_nc_oc=AQnc9XO-nyleDoAr867slt0cHkvUv1ocVas7bwaK1_KDMJg9_aX0hD6RWcFmtUKur_M&_nc_ht=scontent.ftbs3-1.fna&oh=080d80796fa43af7597a04b9f4344f67&oe=5DCCD693"
    }
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Hello, World!</Text>
        <Image source={imageInfo} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
