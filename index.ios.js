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
  NavigatorIOS
} from 'react-native';

import SearchPage from './SearchPage';


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
});

AppRegistry.registerComponent('PropertyFinder', () => PropertyFinder);
