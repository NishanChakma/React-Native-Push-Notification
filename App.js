import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import PushControler from './source/pushControler'
import CountDown from 'react-native-countdown-component';

const instructions = Platform.select({
  ios: 'Hello ios user. You will get push notification after a few moments',
  android: 'Hello android user; \nYou will get push notification after a few moments'
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <CountDown
          until={10}
          // onFinish={() => alert('finished')}
          // onPress={() => alert('hello')}
          size={20}
        />
        <PushControler />
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
