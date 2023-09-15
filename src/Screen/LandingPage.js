import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Dimensions, Text, StyleSheet} from 'react-native';
import Button from '../component/Button';
const {width, height} = Dimensions.get('screen');
export default function LandingPage() {
  var navigation = useNavigation();
  return (
    <View style={styles.maincontainer}>
      <View style={styles.firstcontainer}>
        <Text style={styles.todoname}>Todo App</Text>
      </View>
      <View style={styles.secondcontainer}>
        <Text style={styles.welcomeText}>Welcome</Text>

        <View style={styles.btnsignup}>
          <Button
            onPress={() => {
              navigation.navigate('SignUp');
            }}
            label={'SignUp'}
          />
        </View>
        <View style={styles.btnlogin}>
          <Button
            onPress={() => {
              navigation.navigate('LoginPage');
            }}
            label={'Login'}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: '#3498db',
  },
  firstcontainer: {
    marginVertical: 70,
  },
  todoname: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
    fontWeight: '900',
  },
  welcomeText: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 45,
    color: '#000',
  },

  secondcontainer: {
    backgroundColor: 'white',
    width: width,
    height: height * 0.7,
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
  },
  btnsignup: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  btnlogin: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
});
