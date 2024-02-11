/* eslint-disable react-native/no-inline-styles */
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={{alignItems: 'center', paddingVertical: 20}}>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 20,
            backgroundColor: '#fff',
            height: 100,
            alignItems: 'center',
            width: 350,
            borderRadius: 8,
            shadowColor: '#522622',
            shadowOffset: {width: 0, height: 1},
            shadowOpacity: 0.2,
            shadowRadius: 3,
          }}>
          <View
            style={{
              height: 75,
              width: 75,

              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 8,
              backgroundColor: '#F9F9F9',
              shadowColor: '#522622',
              shadowOffset: {width: 0, height: 1},
              shadowOpacity: 0.2,
              shadowRadius: 3,
            }}>
            <Fontisto name="person" size={60} color={'#DB3022'} />
          </View>
          <View style={{paddingHorizontal: 15, gap: 3}}>
            <Text style={{fontSize: 20, fontWeight: '800'}}>Rohit Kumar</Text>
            <Text style={{fontWeight: '500', color: 'gray'}}>
              krohitkumar211@gmail.com
            </Text>
          </View>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{alignItems: 'center', paddingVertical: 20}}>
          <View
            style={{
              paddingHorizontal: 10,
              backgroundColor: '#fff',
              height: 330,
              width: 350,
              borderRadius: 8,
              shadowColor: '#522622',
              shadowOffset: {width: 0, height: 1},
              shadowOpacity: 0.2,
              shadowRadius: 3,
            }}>
            <Pressable
              style={{
                flexDirection: 'row',

                paddingVertical: 20,
                paddingHorizontal: 15,
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
                <Ionicons name="person" size={24} color={'#DB3022'} />
              </View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '400',
                  paddingHorizontal: 20,
                }}>
                Personal Details
              </Text>
              <AntDesign
                size={24}
                name="rightcircle"
                color={'#DB3022'}
                style={{paddingHorizontal: 82}}
              />
            </Pressable>
            <Pressable
              style={{
                flexDirection: 'row',

                paddingHorizontal: 15,
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
                <Entypo name="shopping-bag" size={24} color={'#DB3022'} />
              </View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '400',
                  paddingHorizontal: 20,
                }}>
                My Order
              </Text>
              <AntDesign
                size={24}
                name="rightcircle"
                color={'#DB3022'}
                style={{paddingHorizontal: 130}}
              />
            </Pressable>
            <Pressable
              onPress={() => navigation.navigate('AddNewAddress')}
              style={{
                flexDirection: 'row',

                paddingVertical: 20,
                paddingHorizontal: 15,
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
                <FontAwesome5
                  name="shipping-fast"
                  size={24}
                  color={'#DB3022'}
                />
              </View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '400',
                  paddingHorizontal: 20,
                }}>
                Shipping Address
              </Text>
              <AntDesign
                size={24}
                name="rightcircle"
                color={'#DB3022'}
                style={{paddingHorizontal: 70}}
              />
            </Pressable>
            <Pressable
              style={{
                flexDirection: 'row',

                paddingHorizontal: 15,
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
                <FontAwesome5 name="credit-card" size={24} color={'#DB3022'} />
              </View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '400',
                  paddingHorizontal: 20,
                }}>
                My Card
              </Text>
              <AntDesign
                size={24}
                name="rightcircle"
                color={'#DB3022'}
                style={{paddingHorizontal: 135}}
              />
            </Pressable>
            <Pressable
              style={{
                flexDirection: 'row',
                paddingVertical: 20,
                paddingHorizontal: 15,
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
                <Ionicons name="settings" size={24} color={'#DB3022'} />
              </View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '400',
                  paddingHorizontal: 20,
                }}>
                Settings
              </Text>
              <AntDesign
                style={{paddingHorizontal: 135}}
                size={24}
                name="rightcircle"
                color={'#DB3022'}
              />
            </Pressable>
          </View>
        </View>

        {/* Bottom View  */}
        <View style={{alignItems: 'center', paddingVertical: 20}}>
          <View
            style={{
              paddingHorizontal: 10,
              backgroundColor: '#fff',
              height: 200,
              width: 350,
              borderRadius: 8,
              shadowColor: '#522622',
              shadowOffset: {width: 0, height: 1},
              shadowOpacity: 0.2,
              shadowRadius: 3,
            }}>
            <Pressable
              style={{
                flexDirection: 'row',

                paddingVertical: 20,
                paddingHorizontal: 15,
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
                <AntDesign
                  name="exclamationcircle"
                  size={24}
                  color={'#DB3022'}
                />
              </View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '400',
                  paddingHorizontal: 20,
                }}>
                FQAs
              </Text>
              <AntDesign
                size={24}
                name="rightcircle"
                color={'#DB3022'}
                style={{paddingHorizontal: 157}}
              />
            </Pressable>
            <Pressable
              style={{
                flexDirection: 'row',

                paddingHorizontal: 15,
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
                <MaterialIcons name="privacy-tip" size={24} color={'#DB3022'} />
              </View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '400',
                  paddingHorizontal: 20,
                }}>
                Privacy Policy
              </Text>
              <AntDesign
                size={24}
                name="rightcircle"
                color={'#DB3022'}
                style={{paddingHorizontal: 95}}
              />
            </Pressable>
            <Pressable
              style={{
                flexDirection: 'row',

                paddingVertical: 20,
                paddingHorizontal: 15,
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
                <MaterialIcons
                  name="contact-support"
                  size={28}
                  color={'#DB3022'}
                />
              </View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '400',
                  paddingHorizontal: 20,
                }}>
                Contact Us
              </Text>
              <AntDesign
                size={24}
                name="rightcircle"
                color={'#DB3022'}
                style={{paddingHorizontal: 115}}
              />
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
