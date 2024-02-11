/* eslint-disable react-native/no-inline-styles */
import {Pressable, SafeAreaView, ScrollView, Text, View} from 'react-native';
import React, {useEffect, useContext, useState, useCallback} from 'react';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import axios from 'axios';
import {UserType} from '../UserContext';
import 'core-js/stable/atob';
import {jwtDecode} from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

const AddAddressScreen = () => {
  const navigation = useNavigation();
  const [addresses, setAddresses] = useState([]);
  const {userId, setUserId} = useContext(UserType);

  useEffect(() => {
    if (userId) {
      fetchAddresses();
    }
  }, [userId]);
  const fetchAddresses = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/addresses/${userId}`,
      );
      const {addresses} = response.data;

      setAddresses(addresses);
    } catch (error) {
      console.log('error', error);
    }
  };
  useEffect(() => {
    const fetchUser = async () => {
      const token = await AsyncStorage.getItem('authToken');
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.userId;
      setUserId(userId);
    };

    fetchUser();
  }, []);
  console.log('address', addresses);

  console.log('userId', userId);
  useEffect(() => {
    fetchAddresses();
  }, []);

  //refresh the addresses when the component comes to the focus ie basically when we navigate back
  useFocusEffect(
    useCallback(() => {
      fetchAddresses();
    }, []),
  );
  console.log('addresses', addresses);
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{paddingHorizontal: 20}}>
          <Text
            style={{
              fontSize: 23,
              fontWeight: 'bold',
            }}>
            Your Addresses
          </Text>
        </View>
        <View style={{alignItems: 'center', paddingVertical: 15}}>
          <Pressable
            onPress={() => navigation.navigate('AddingNew')}
            style={{
              paddingHorizontal: 10,
              backgroundColor: '#fff',
              height: 50,
              width: 350,
              borderRadius: 8,
              shadowColor: '#522622',
              shadowOffset: {width: 0, height: 1},
              shadowOpacity: 0.2,
              shadowRadius: 3,
              justifyContent: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',

                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: '#F9F9F9',
                  height: 40,
                  width: 40,
                  borderRadius: 8,
                  shadowColor: '#522622',
                  shadowOffset: {width: 0, height: 1},
                  shadowOpacity: 0.2,
                  shadowRadius: 3,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <AntDesign name="pluscircle" size={24} color={'#DB3022'} />
              </View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '500',
                  paddingHorizontal: 20,
                }}>
                Add New Shipping Address
              </Text>
              <AntDesign
                size={24}
                name="rightcircle"
                color={'#DB3022'}
                style={{paddingHorizontal: 25}}
              />
            </View>
          </Pressable>
          <Pressable
            style={{alignItems: 'center', paddingVertical: 20, gap: 15}}>
            {/* all the added adresses */}
            {addresses?.map((item, index) => (
              <Pressable
                style={{
                  paddingHorizontal: 15,
                  backgroundColor: '#fff',
                  height: 200,
                  width: 350,
                  borderRadius: 8,
                  shadowColor: '#522622',
                  shadowOffset: {width: 0, height: 1},
                  shadowOpacity: 0.2,
                  shadowRadius: 3,
                  gap: 5,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 3,
                    paddingVertical: 5,
                  }}>
                  <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                    {item?.name}
                  </Text>
                </View>

                <Text
                  style={{fontSize: 16, color: '#181818', fontWeight: '500'}}>
                  {item?.houseNo}, {item?.landmark}
                </Text>

                <Text
                  style={{fontSize: 16, color: '#181818', fontWeight: '500'}}>
                  {item?.street}
                </Text>

                <Text
                  style={{fontSize: 16, color: '#181818', fontWeight: '500'}}>
                  Punjab India
                </Text>

                <Text
                  style={{fontSize: 16, color: '#181818', fontWeight: '500'}}>
                  Phone No : {item?.mobileNo}
                </Text>
                <Text
                  style={{fontSize: 16, color: '#181818', fontWeight: '500'}}>
                  Pin Code : {item?.postalCode}
                </Text>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 15,
                    marginTop: 7,
                    position: 'absolute',
                    right: 10,
                  }}>
                  <Pressable>
                    <Feather name="edit" size={22} color={'#DB3022'} />
                  </Pressable>
                  <Pressable>
                    <MaterialCommunityIcons
                      name="delete"
                      size={24}
                      color={'#DB3022'}
                    />
                  </Pressable>
                </View>
                <Pressable
                  style={{
                    backgroundColor: '#DB3022',
                    height: 25,
                    borderRadius: 25,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{color: 'white', fontWeight: '600'}}>
                    Set as Default
                  </Text>
                </Pressable>
              </Pressable>
            ))}
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddAddressScreen;
