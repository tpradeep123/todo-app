/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  ScrollView,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';
import AppNavigator from './src/Navigation/AppNavigation';
const {width, height} = Dimensions.get('screen');
function App() {
  return (
   
  <AppNavigator/>
  
  );
}
const styles = StyleSheet.create({

});

export default App;
