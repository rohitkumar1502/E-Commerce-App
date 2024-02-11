/* eslint-disable react-native/no-inline-styles */
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Pressable,
  Alert,
} from 'react-native';
import React, {useState, useContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'core-js/stable/atob';
import {jwtDecode} from 'jwt-decode';
import {UserType} from '../UserContext';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

const AddingNewAddress = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [houseNo, setHouseNo] = useState('');
  const [street, setStreet] = useState('');
  const [landmark, setLandmark] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const {userId, setUserId} = useContext(UserType);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = await AsyncStorage.getItem('authToken');
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.userId;
        setUserId(userId);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  },[]);
  console.log(userId);

  const handleAddAddress = () => {
    const address = {
      name,
      mobileNo,
      houseNo,
      street,
      landmark,
      postalCode,
    };

    axios
      .post('http://localhost:8000/addresses', {userId, address})
      .then(response => {
        Alert.alert('Success', 'Addresses added successfully');
        setName('');
        setMobileNo('');
        setHouseNo('');
        setStreet('');
        setLandmark('');
        setPostalCode('');

        setTimeout(() => {
          navigation.navigate('AddNewAddress');
        }, 1000);
      })
      .catch(error => {
        Alert.alert('Error', 'Failed to add address');
        console.log('error', error);
      });
  };

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{padding: 10}}>
          <View style={{alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 23,
                fontWeight: 'bold',
              }}>
              Adding Shipping Address
            </Text>
          </View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              paddingHorizontal: 14,
              marginTop: 10,
            }}>
            Country
          </Text>
          <View style={{alignItems: 'center'}}>
            <TextInput
              placeholderTextColor={'gray'}
              placeholder="India"
              style={{
                borderColor: '#D0D0D0',
                borderWidth: 0.5,
                height: 50,
                width: 343,
                borderRadius: 5,
                shadowColor: '#522622',
                shadowOffset: {width: 0, height: 1},
                shadowOpacity: 0.4,
                shadowRadius: 3,
                paddingHorizontal: 20,
                marginVertical: 5,
                fontSize: 17,
              }}
            />
          </View>

          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              paddingHorizontal: 14,
              marginTop: 10,
            }}>
            Full Name (First and Last Name)
          </Text>
          <View style={{alignItems: 'center'}}>
            <TextInput
              value={name}
              onChangeText={text => setName(text)}
              placeholderTextColor={'gray'}
              style={{
                borderColor: '#D0D0D0',
                borderWidth: 0.5,
                height: 50,
                width: 343,
                borderRadius: 5,
                shadowColor: '#522622',
                shadowOffset: {width: 0, height: 1},
                shadowOpacity: 0.4,
                shadowRadius: 3,
                paddingHorizontal: 20,
                marginVertical: 5,
                fontSize: 17,
              }}
              placeholder="Enter Your Name"
            />
          </View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              paddingHorizontal: 14,
              marginTop: 10,
            }}>
            Mobile Numebr
          </Text>
          <View style={{alignItems: 'center'}}>
            <TextInput
              value={mobileNo}
              onChangeText={text => setMobileNo(text)}
              placeholderTextColor={'gray'}
              style={{
                borderColor: '#D0D0D0',
                borderWidth: 0.5,
                height: 50,
                width: 343,
                borderRadius: 5,
                shadowColor: '#522622',
                shadowOffset: {width: 0, height: 1},
                shadowOpacity: 0.4,
                shadowRadius: 3,
                paddingHorizontal: 20,
                marginVertical: 5,
                fontSize: 17,
              }}
              placeholder="+91-1234567890"
            />
          </View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              paddingHorizontal: 14,
              marginTop: 10,
            }}>
            Flat,House No,Building,Company
          </Text>
          <View style={{alignItems: 'center'}}>
            <TextInput
              value={houseNo}
              onChangeText={text => setHouseNo(text)}
              placeholderTextColor={'gray'}
              style={{
                borderColor: '#D0D0D0',
                borderWidth: 0.5,
                height: 50,
                width: 343,
                borderRadius: 5,
                shadowColor: '#522622',
                shadowOffset: {width: 0, height: 1},
                shadowOpacity: 0.4,
                shadowRadius: 3,
                paddingHorizontal: 20,
                marginVertical: 5,
                fontSize: 17,
              }}
              placeholder=""
            />
          </View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              paddingHorizontal: 14,
              marginTop: 10,
            }}>
            Area,Street,Sector,Village
          </Text>
          <View style={{alignItems: 'center'}}>
            <TextInput
              value={street}
              onChangeText={text => setStreet(text)}
              placeholderTextColor={'gray'}
              style={{
                borderColor: '#D0D0D0',
                borderWidth: 0.5,
                height: 50,
                width: 343,
                borderRadius: 5,
                shadowColor: '#522622',
                shadowOffset: {width: 0, height: 1},
                shadowOpacity: 0.4,
                shadowRadius: 3,
                paddingHorizontal: 20,
                marginVertical: 5,
                fontSize: 17,
              }}
              placeholder=""
            />
          </View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              paddingHorizontal: 14,
              marginTop: 10,
            }}>
            Landmark
          </Text>
          <View style={{alignItems: 'center'}}>
            <TextInput
              value={landmark}
              onChangeText={text => setLandmark(text)}
              placeholderTextColor={'gray'}
              style={{
                borderColor: '#D0D0D0',
                borderWidth: 0.5,
                height: 50,
                width: 343,
                borderRadius: 5,
                shadowColor: '#522622',
                shadowOffset: {width: 0, height: 1},
                shadowOpacity: 0.4,
                shadowRadius: 3,
                paddingHorizontal: 20,
                marginVertical: 5,
                fontSize: 17,
              }}
              placeholder="eg. near lpu"
            />
          </View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              paddingHorizontal: 14,
              marginTop: 10,
            }}>
            Pincode
          </Text>
          <View style={{alignItems: 'center'}}>
            <TextInput
              value={postalCode}
              onChangeText={text => setPostalCode(text)}
              placeholderTextColor={'gray'}
              style={{
                borderColor: '#D0D0D0',
                borderWidth: 0.5,
                height: 50,
                width: 343,
                borderRadius: 5,
                shadowColor: '#522622',
                shadowOffset: {width: 0, height: 1},
                shadowOpacity: 0.4,
                shadowRadius: 3,
                paddingHorizontal: 20,
                marginVertical: 5,
                fontSize: 17,
              }}
              placeholder="Enter Pincode"
            />
          </View>
          <View style={{alignItems: 'center', paddingVertical: 15}}>
            <Pressable
              onPress={handleAddAddress}
              style={{
                backgroundColor: '#DB3022',
                borderRadius: 25,
                justifyContent: 'center',
                alignItems: 'center',
                height: 48,
                width: 340,
              }}>
              <Text style={{fontWeight: 'bold', color: '#fff'}}>
                Add Address
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddingNewAddress;

const styles = StyleSheet.create({});
