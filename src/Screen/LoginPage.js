import React, {useState} from 'react';
import {
  View,
  Dimensions,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Button from '../component/Button';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../firebase/firebase.config';
import InputText from '../component/InputText';
import {useNavigation} from '@react-navigation/native';
const {width, height} = Dimensions.get('screen');
export default function LoginPage() {
  var navigation = useNavigation();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  /*login authentication*/

  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        navigation.replace('TodoScreen');
        Alert.alert('Login Successfully...');
        const user = userCredential.user;

        // ...
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert(errorMessage);
      });
  };

  return (
    <View style={styles.maincontainer}>
      <View style={styles.firstcontainer}>
        <Text style={styles.todoname}>Todo App</Text>
      </View>
      <View style={styles.secondcontainer}>
        <Text style={styles.welcometext}>Welcome</Text>
        <Text style={styles.loginacounttext}>Login To Your Account</Text>

        <InputText
          onChangeText={txt => setEmail(txt)}
          placeholder={'email/username'}
        />

        <InputText
          onChangeText={txt => setPassword(txt)}
          placeholder={'Password'}
          password={true}
        />
        <View style={styles.btn}>
          <Button
            onPress={() => {
              login();
            }}
            label={'Login'}
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.createnewaccount}>create a new Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

/*css part */
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
  welcometext: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#000',
  },
  loginacounttext: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  createnewaccount: {
    textAlign: 'center',
    color: '#000',
    fontSize: 15,
  },
});
