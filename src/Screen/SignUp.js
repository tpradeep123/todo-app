import React, {useState} from 'react';
import {View, Dimensions, Text, StyleSheet, Alert} from 'react-native';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../firebase/firebase.config';
import {useNavigation} from '@react-navigation/native';
import Button from '../component/Button';
import InputText from '../component/InputText';
const {width, height} = Dimensions.get('screen');
export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  var navigation = useNavigation();

       /*create new account function */
  const createNewUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        navigation.replace('TodoScreen');
        Alert.alert('User Created Successfully...');
        const user = userCredential.user;
        // ...
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert(errorMessage);
        // ..
      });
  };

  return (
    <View style={styles.maincontainer}>
      <View style={styles.firstcontainer}>
        <Text style={styles.todoname}>Todo App</Text>
      </View>
      <View style={styles.secondcontainer}>
        <Text style={styles.craetenewaccounttext}>Create New Account</Text>
        <InputText
          value={email}
          onChangeText={txt => setEmail(txt)}
          placeholder={'Email'}
        />

        <InputText
          value={password}
          onChangeText={txt => setPassword(txt)}
          placeholder={'Password'}
          password={true}
        />

        <View style={styles.btn}>
          <Button onPress={() => createNewUser()} label={'SignUp'} />
        </View>
      </View>
    </View>
  );
}

        /*css part*/

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
  secondcontainer: {
    backgroundColor: 'white',
    width: width,
    height: height * 0.7,
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
  },
  craetenewaccounttext: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 30,
    color: '#000',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
});
