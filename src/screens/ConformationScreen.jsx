/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Alert,
} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import 'core-js/stable/atob';
import axios from 'axios';
import {UserType} from '../UserContext';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {useDispatch, useSelector} from 'react-redux';
import {cleanCart} from '../../redux/CartReducer';
import {useNavigation} from '@react-navigation/native';
import RazorpayCheckout from 'react-native-razorpay';
import {SafeAreaView} from 'react-native-safe-area-context';

const ConformationScreen = () => {
  const steps = [
    {title: 'Address', content: 'Address Form'},
    {title: 'Delivery', content: 'Delivery Options'},
    {title: 'Payment', content: 'Payment Details'},
    {title: 'Place Order', content: 'Order Summary'},
  ];
  const navigation = useNavigation();
  const [currentStep, setCurrentStep] = useState(0);
  const [addresses, setAddresses] = useState([]);
  const {userId, setUserId} = useContext(UserType);
  const cart = useSelector(state => state.cart.cart);
  const total = cart
    ?.map(item => item.price * item.quantity)
    .reduce((curr, prev) => curr + prev, 0);
  useEffect(() => {
    fetchAddresses();
  }, []);
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
  const dispatch = useDispatch();
  const [selectedAddress, setSelectedAdress] = useState('');
  const [option, setOption] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const handlePlaceOrder = async () => {
    try {
      const orderData = {
        userId: userId,
        cartItems: cart,
        totalPrice: total,
        shippingAddress: selectedAddress,
        paymentMethod: selectedOption,
      };

      const response = await axios.post(
        'http://localhost:8000/orders',
        orderData,
      );
      if (response.status === 200) {
        navigation.navigate('Order');
        dispatch(cleanCart());
        console.log('order created successfully', response.data);
      } else {
        console.log('error creating order', response.data);
      }
    } catch (error) {
      console.log('errror', error);
    }
  };
  const pay = async () => {
    try {
      const options = {
        description: 'Adding To Wallet',
        currency: 'INR',
        name: 'e.comfy',
        key: 'rzp_test_E3GWYimxN7YMk8',
        amount: total * 100 * 80,
        prefill: {
          email: 'void@razorpay.com',
          contact: '+916209988062',
          name: '',
        },
        theme: {color: '#F37254'},
      };

      const data = await RazorpayCheckout.open(options);

      console.log(data);

      const orderData = {
        userId: userId,
        cartItems: cart,
        totalPrice: total,
        shippingAddress: selectedAddress,
        paymentMethod: 'card',
      };
      const response = await axios.post(
        'http://localhost:8000/orders',
        orderData,
      );
      if (response.status === 200) {
        navigation.navigate('Order');
        dispatch(cleanCart());
        console.log('order created successfully', response.data);
      } else {
        console.log('error creating order', response.data);
      }
    } catch (error) {
      console.log('error', error);
    }
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{flex: 1, paddingHorizontal: 20, paddingTop: 40}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 20,
              justifyContent: 'space-between',
            }}>
            {steps?.map((step, index) => (
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                {index > 0 && (
                  <View
                    style={[
                      {flex: 1, height: 2, backgroundColor: '#DB3022'},
                      index <= currentStep && {backgroundColor: '#DB3022'},
                    ]}
                  />
                )}
                <View
                  style={[
                    {
                      width: 30,
                      height: 30,
                      borderRadius: 15,
                      backgroundColor: 'gray',
                      justifyContent: 'center',
                      alignItems: 'center',
                    },
                    index < currentStep && {backgroundColor: '#DB3022'},
                  ]}>
                  {index < currentStep ? (
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: 'white',
                      }}>
                      &#10003;
                    </Text>
                  ) : (
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: 'white',
                      }}>
                      {index + 1}
                    </Text>
                  )}
                </View>
                <Text style={{textAlign: 'center', marginTop: 8}}>
                  {step.title}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {currentStep === 0 && (
          <View style={{marginHorizontal: 20}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              Select Delivery Address
            </Text>

            <Pressable>
              {addresses?.map((item, index) => (
                <Pressable
                  style={{
                    backgroundColor: '#fff',
                    padding: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 5,
                    paddingBottom: 10,
                    marginVertical: 10,
                    borderRadius: 6,
                    shadowColor: '#522622',
                    shadowOffset: {width: 0, height: 1},
                    shadowOpacity: 0.3,
                    shadowRadius: 4,
                  }}>
                  {selectedAddress && selectedAddress._id === item?._id ? (
                    <FontAwesome5
                      name="dot-circle"
                      size={20}
                      color="#DB3022"
                      style={{
                        position: 'absolute',
                        right: 16,
                        top: 13,
                      }}
                    />
                  ) : (
                    <Entypo
                      onPress={() => setSelectedAdress(item)}
                      name="circle"
                      size={20}
                      color="#DB3022"
                      style={{
                        position: 'absolute',
                        right: 16,
                        top: 13,
                      }}
                    />
                  )}

                  <View style={{marginLeft: 6}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 3,
                      }}>
                      <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                        {item?.name}
                      </Text>
                    </View>

                    <Text
                      style={{
                        fontSize: 16,
                        color: '#181818',
                        fontWeight: '500',
                      }}>
                      {item?.houseNo}, {item?.landmark}
                    </Text>

                    <Text
                      style={{
                        fontSize: 16,
                        color: '#181818',
                        fontWeight: '500',
                      }}>
                      {item?.street}
                    </Text>

                    <Text
                      style={{
                        fontSize: 16,
                        color: '#181818',
                        fontWeight: '500',
                      }}>
                      India, Punjab
                    </Text>

                    <Text
                      style={{
                        fontSize: 16,
                        color: '#181818',
                        fontWeight: '500',
                      }}>
                      Phone No : {item?.mobileNo}
                    </Text>
                    <Text
                      style={{
                        fontSize: 16,
                        color: '#181818',
                        fontWeight: '500',
                      }}>
                      Pin Code : {item?.postalCode}
                    </Text>

                    <View
                      style={{
                        flexDirection: 'row',

                        gap: 15,
                        position: 'absolute',
                        left: 225,
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
                    <View>
                      {selectedAddress && selectedAddress._id === item?._id && (
                        <Pressable
                          onPress={() => setCurrentStep(1)}
                          style={{
                            backgroundColor: '#DB3022',
                            height: 35,
                            borderRadius: 25,
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 322,
                            marginVertical: 10,
                          }}>
                          <Text
                            style={{
                              textAlign: 'center',
                              color: 'white',
                              fontSize: 16,
                              fontWeight: 'bold',
                            }}>
                            Deliver to this Address
                          </Text>
                        </Pressable>
                      )}
                    </View>
                  </View>
                </Pressable>
              ))}
            </Pressable>
          </View>
        )}

        {currentStep === 1 && (
          <View style={{marginHorizontal: 20}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              Choose your delivery options
            </Text>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: 'white',
                padding: 14,
                gap: 7,
                shadowColor: '#522622',
                shadowOffset: {width: 0, height: 1},
                shadowOpacity: 0.2,
                shadowRadius: 3,
                borderRadius: 8,

                marginTop: 10,
              }}>
              {option ? (
                <FontAwesome5 name="dot-circle" size={20} color="#DB3022" />
              ) : (
                <Entypo
                  onPress={() => setOption(!option)}
                  name="circle"
                  size={20}
                  color="#DB3022"
                />
              )}

              <Text style={{flex: 1, fontWeight: '500', fontSize: 15}}>
                <Text
                  style={{color: '#DB3022', fontWeight: '500', fontSize: 16}}>
                  20 Feb by 10pm
                </Text>
                - FREE delivery
              </Text>
            </View>

            <Pressable
              onPress={() => setCurrentStep(2)}
              style={{
                backgroundColor: '#DB3022',
                padding: 10,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 15,
              }}>
              <Text style={{fontSize: 16, fontWeight: '500', color: '#fff'}}>
                Continue
              </Text>
            </Pressable>
          </View>
        )}

        {currentStep === 2 && (
          <View style={{marginHorizontal: 20}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              Select your payment Method
            </Text>

            <View
              style={{
                backgroundColor: 'white',
                padding: 14,
                borderColor: '#D0D0D0',
                borderWidth: 1,
                flexDirection: 'row',
                alignItems: 'center',
                gap: 7,
                marginTop: 12,
                shadowColor: '#522622',
                shadowOffset: {width: 0, height: 1},
                shadowOpacity: 0.2,
                shadowRadius: 3,
                borderRadius: 8,
              }}>
              {selectedOption === 'cash' ? (
                <FontAwesome5 name="dot-circle" size={20} color="#DB3022" />
              ) : (
                <Entypo
                  onPress={() => setSelectedOption('cash')}
                  name="circle"
                  size={20}
                  color="#DB3022"
                />
              )}

              <Text style={{fontSize: 16, fontWeight: '500'}}>
                Cash on Delivery
              </Text>
            </View>

            <View
              style={{
                backgroundColor: 'white',
                padding: 14,
                borderColor: '#D0D0D0',
                borderWidth: 1,
                flexDirection: 'row',
                alignItems: 'center',
                gap: 7,
                marginTop: 12,
                shadowColor: '#522622',
                shadowOffset: {width: 0, height: 1},
                shadowOpacity: 0.2,
                shadowRadius: 3,
                borderRadius: 8,
              }}>
              {selectedOption === 'card' ? (
                <FontAwesome5 name="dot-circle" size={20} color="#DB3022" />
              ) : (
                <Entypo
                  onPress={() => {
                    setSelectedOption('card');
                    Alert.alert('UPI/Debit card', 'Pay Online', [
                      {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel is pressed'),
                      },
                      {
                        text: 'OK',
                        onPress: () => pay(),
                      },
                    ]);
                  }}
                  name="circle"
                  size={20}
                  color="#DB3022"
                />
              )}

              <Text style={{fontSize: 16, fontWeight: '500'}}>
                UPI / Credit or Debit Card
              </Text>
            </View>
            <Pressable
              onPress={() => setCurrentStep(3)}
              style={{
                backgroundColor: '#DB3022',
                padding: 10,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 15,
              }}>
              <Text style={{fontSize: 16, fontWeight: '500', color: '#fff'}}>
                Continue
              </Text>
            </Pressable>
          </View>
        )}

        {currentStep === 3 && selectedOption === 'cash' && (
          <View style={{marginHorizontal: 20}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Order Now</Text>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 8,
                backgroundColor: 'white',
                padding: 10,
                borderColor: '#D0D0D0',
                borderWidth: 1,
                marginTop: 10,
                shadowColor: '#522622',
                shadowOffset: {width: 0, height: 1},
                shadowOpacity: 0.2,
                shadowRadius: 3,
                borderRadius: 8,
              }}>
              <View>
                <Text style={{fontSize: 17, fontWeight: 'bold'}}>
                  Save 5% and never run out
                </Text>
                <Text style={{fontSize: 15, color: 'gray', marginTop: 5}}>
                  Turn on auto deliveries
                </Text>
              </View>

              <AntDesign name="rightcircle" size={24} color="#DB3022" />
            </View>

            <View
              style={{
                backgroundColor: 'white',
                padding: 10,
                borderColor: '#D0D0D0',
                borderWidth: 1,
                marginTop: 10,
                shadowColor: '#522622',
                shadowOffset: {width: 0, height: 1},
                shadowOpacity: 0.2,
                shadowRadius: 3,
                borderRadius: 8,
              }}>
              <Text>Shipping to {selectedAddress?.name}</Text>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: 8,
                }}>
                <Text style={{fontSize: 16, fontWeight: '500', color: 'gray'}}>
                  Items
                </Text>

                <Text style={{color: 'gray', fontSize: 16}}>${total}</Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: 8,
                }}>
                <Text style={{fontSize: 16, fontWeight: '500', color: 'gray'}}>
                  Delivery
                </Text>

                <Text style={{color: 'gray', fontSize: 16}}>$0</Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: 8,
                }}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                  Order Total
                </Text>

                <Text
                  style={{color: '#C60C30', fontSize: 17, fontWeight: 'bold'}}>
                  ${total}
                </Text>
              </View>
            </View>

            <View
              style={{
                backgroundColor: 'white',
                padding: 10,
                borderColor: '#D0D0D0',
                borderWidth: 1,
                marginTop: 10,
                shadowColor: '#522622',
                shadowOffset: {width: 0, height: 1},
                shadowOpacity: 0.2,
                shadowRadius: 3,
                borderRadius: 8,
              }}>
              <Text style={{fontSize: 16, color: 'gray'}}>Pay With</Text>

              <Text style={{fontSize: 16, fontWeight: '600', marginTop: 7}}>
                Pay on delivery (Cash)
              </Text>
            </View>

            <Pressable
              onPress={handlePlaceOrder}
              style={{
                backgroundColor: '#DB3022',
                padding: 10,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <Text style={{color: '#fff', fontSize: 16, fontWeight: '500'}}>
                Place your order
              </Text>
            </Pressable>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ConformationScreen;

const styles = StyleSheet.create({});
