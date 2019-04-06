import React, { Component } from 'react';
import { AppLoading, Asset, Font, Icon } from 'expo';
// import AppNavigator from './navigation/AppNavigator';
import EventList from './components/EventList';
// import EventForm from './components/EventForm';
import {Text} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import {
  Platform,
  StatusBar,
  StyleSheet,
  View
}
from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
  },
});

const appNavigator = createStackNavigator({
  list: {
    screen: EventList,
    navigationOptions: () => ({
      title: "Your Events"
    })
  }
  // form: {
  //   screen: EventList,
  //   navigationOptions: () => ({
  //     title: "Add a New Event"
  //   })
  // },
})

export default createAppContainer(appNavigator)
