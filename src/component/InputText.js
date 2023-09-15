import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
  TextInput,
} from 'react-native';
const {width, height} = Dimensions.get('screen');

export default function InputText({placeholder, password, ...props}) {
  return (
    <TextInput
      {...props}
      placeholder={placeholder}
      secureTextEntry={password}
      style={{
        backgroundColor: 'rgb(220,220,220)',
        width: width * 0.8,
        borderRadius: 20,
        marginHorizontal: 40,
        marginVertical: 10,
        paddingLeft: 20,
      }}
    />
  );
}
const style = StyleSheet.create({
  box: {
    width: width * 0.5,
    height: height * 0.3,
  },
});
