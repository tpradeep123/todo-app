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
const {width, height} = Dimensions.get('screen');
export default function Button({label, onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: '#3498db',
        width: width * 0.8,
        height: height * 0.06,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
      }}>
      <Text style={{color: 'white', fontSize: 18, fontWeight: 500}}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}
