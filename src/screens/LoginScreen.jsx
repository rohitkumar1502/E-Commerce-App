/* eslint-disable react-native/no-inline-styles */
import {
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
//const Logo = require('../assets/Logo.png');
import styles from './RegisterScreen.Style';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem('authToken');

        if (token) {
          navigation.replace('');
        }
      } catch (err) {
        console.log('error message', err);
      }
    };
    checkLoginStatus();
  }, [navigation]);
  const handleLogin = () => {
    const user = {
      email: email,
      password: password,
    };

    axios
      .post('http://localhost:8000/login', user)
      .then(response => {
        console.log(response);
        const token = response.data.token;
        AsyncStorage.setItem('authToken', token);
        navigation.replace('HomePage');
      })
      .catch(error => {
        Alert.alert('Login Error', 'Invalid Email');
        console.log(error);
      });
  };
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView>
        <View>
          <Text style={styles.signUpText}>Login</Text>
        </View>

        <View>
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
              placeholder="enter your Password"
            />
          </View>
        </View>

        <View style={styles.forgetPassContainer}>
          <Pressable
            style={styles.arrowIcon}
            onPress={() => navigation.navigate('Register')}>
            <Text style={styles.arrowIcon}>Don't have an account? Sign Up</Text>
            <AntDesign name="arrowright" size={24} color="#DB3022" />
          </Pressable>
        </View>

        <Pressable onPress={handleLogin} style={styles.RegButt}>
          <Text style={styles.regText}>Login</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;
