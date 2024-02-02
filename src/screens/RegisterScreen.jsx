/* eslint-disable react-native/no-inline-styles */
import {
  Text,
  View,
  SafeAreaView,
  Pressable,
  KeyboardAvoidingView,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import styles from './RegisterScreen.Style';
import LoginIcons from '../components/LoginIcons';
//const Logo = require('../assets/Logo.png');

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigation = useNavigation();
  const handleRegister = () => {
    const user = {
      name: name,
      email: email,
      password: password,
    };

    // Send a POST request to the backend for register the User
    axios
      .post('http://localhost:8000/register', user)
      .then(response => {
        console.log(response);
        Alert.alert(
          'Registration successful',
          'You have been registered Successfully',
        );
        setName('');
        setEmail('');
        setPassword('');
      })
      .catch(error => {
        Alert.alert(
          'Registration Error',
          'An error occurred while registering',
        );
        console.log('registration failed', error);
      });
  };
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView>
        <View>
          <Text style={styles.signUpText}>Sign up</Text>
        </View>

        <View>
          <View style={styles.InputContainer}>
            <FontAwesome5
              name="user"
              size={24}
              color="gray"
              style={styles.iconssty}
            />
            <TextInput
              value={name}
              onChangeText={text => setName(text)}
              style={{
                width: 300,
                fontSize: name ? 16 : 16,
              }}
              placeholder="Enter Your Name"
            />
          </View>

          <View style={styles.InputContainer}>
            <MaterialIcons
              name="email"
              size={24}
              color="gray"
              style={styles.iconssty}
            />

            <TextInput
              value={email}
              onChangeText={text => setEmail(text)}
              style={{
                width: 300,
                fontSize: email ? 16 : 16,
              }}
              placeholder="Enter Your Email"
            />
          </View>
        </View>

        <View>
          <View style={styles.InputContainer}>
            <AntDesign
              name="lock1"
              size={24}
              color="gray"
              style={styles.iconssty}
            />

            <TextInput
              value={password}
              onChangeText={text => setPassword(text)}
              secureTextEntry={true}
              style={{
                width: 300,
                fontSize: password ? 16 : 16,
              }}
              placeholder="Enter Your Password"
            />
          </View>
        </View>

        <View style={styles.forgetPassContainer}>
          <Pressable
            style={styles.arrowIcon}
            onPress={() => navigation.goBack()}>
            <Text style={styles.arrowIcon}>
              Already have an account? Sign In
            </Text>
            <AntDesign name="arrowright" size={24} color="#DB3022" />
          </Pressable>
        </View>

        <View />

        <Pressable onPress={handleRegister} style={styles.RegButt}>
          <Text style={styles.regText}>Register</Text>
        </Pressable>
      </KeyboardAvoidingView>
      <View>
        <LoginIcons name="Sign Up" />
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
