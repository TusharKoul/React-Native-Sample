/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

export default class SearchPage extends Component {
  render() {
    return (
      <Text style={styles.description}> Search for houses to buy </Text>
    );
  }
}


class PropertyFinder extends Component {
  render() {
    return (
        <NavigatorIOS
            style={styles.container}
            initialRoute={{
              title: 'Property Finder',
              component: SearchPage,
            }}
        />
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  description: {
      fontSize: 18,
      textAlign: 'center',
      color: '#656565',
      marginTop: 80,
  }
});

AppRegistry.registerComponent('PropertyFinder', () => PropertyFinder);
