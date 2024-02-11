/* eslint-disable react-native/no-inline-styles */
import {
  Text,
  View,
  ScrollView,
  Pressable,
  Image,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {
  decrementQuantity,
  incementQuantity,
  removeFromCart,
} from '../../redux/CartReducer';
import {useNavigation} from '@react-navigation/native';

const CartScreen = () => {
  const cart = useSelector(state => state.cart.cart);
  console.log(cart);
  const total = cart
    ?.map(item => item.price * item.quantity)
    .reduce((curr, prev) => curr + prev, 0);
  const dispatch = useDispatch();
  const increaseQuantity = item => {
    dispatch(incementQuantity(item));
  };
  const decreaseQuantity = item => {
    dispatch(decrementQuantity(item));
  };
  const deleteItem = item => {
    dispatch(removeFromCart(item));
  };
  const navigation = useNavigation();
  return (
    <>
      {/* <SafeAreaView style={{backgroundColor: '#891811', flex: 0}} /> */}
      <SafeAreaView />
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        {/* <Text
          style={{
            fontSize: 34,
            fontWeight: '700',
            paddingVertical: 10,
            paddingHorizontal: 20,
          }}>
          My Bag
        </Text> */}

        {/* <View style={{padding: 10, flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{fontSize: 18, fontWeight: '500'}}>Subtotal : </Text>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>{total}</Text>
        </View> */}

        {/* <Pressable
          onPress={() => navigation.navigate('Confirm')}
          style={{
            backgroundColor: '#DB3022',
            padding: 10,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 10,
            marginTop: 10,
          }}>
          <Text style={{color: 'white', fontSize: 16, fontWeight: '700'}}>
            Proceed to Buy ({cart.length}) items
          </Text>
        </Pressable> */}

        {/* <Text
          style={{
            height: 1,
            borderColor: '#D0D0D0',
            borderWidth: 1,
            marginTop: 16,
          }}
        /> */}
        <View style={{paddingVertical: 7}} />
        <View style={{alignItems: 'center'}}>
          {cart?.map((item, index) => (
            <View style={{}} key={index}>
              <View
                style={{
                  backgroundColor: '#fff',
                  height: 140,
                  width: 345,
                  borderRadius: 8,
                  shadowColor: '#522622',
                  shadowOffset: {width: 0, height: 1},
                  shadowOpacity: 0.2,
                  shadowRadius: 3,
                }}>
                <Image
                  style={{width: 140, height: 140, resizeMode: 'contain'}}
                  source={{uri: item?.image}}
                />
                <Text
                  numberOfLines={1}
                  style={{
                    position: 'absolute',
                    width: 450,
                    fontSize: 19,
                    fontWeight: '600',
                    paddingHorizontal: 140,
                    paddingVertical: 11,
                  }}>
                  {item?.title}
                </Text>

                <View
                  style={{
                    position: 'absolute',
                    paddingHorizontal: 140,
                    paddingVertical: 40,

                    gap: 60,
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: '600',
                      color: 'gray',
                      width: 50,
                      height: 40,
                    }}>
                    Color: {item?.color}
                  </Text>
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: '600',
                      color: 'gray',
                      width: 60,
                      height: 50,
                    }}>
                    Size: {item?.size}
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '600',
                    color: '#222',
                    paddingHorizontal: 140,
                    paddingVertical: 75,
                    position: 'absolute',
                  }}>
                  ${item?.price}
                </Text>
              </View>

              <Pressable
                style={{
                  paddingHorizontal: 120,
                  paddingVertical: 90,
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 10,
                  position: 'absolute',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                  }}>
                  {item?.quantity > 1 ? (
                    <Pressable
                      onPress={() => decreaseQuantity(item)}
                      style={{
                        padding: 10,
                      }}>
                      <AntDesign name="minuscircle" size={24} color="#DB3022" />
                    </Pressable>
                  ) : (
                    <Pressable
                      onPress={() => deleteItem(item)}
                      style={{
                        paddingHorizontal: 8,
                        paddingVertical: 8,
                      }}>
                      <MaterialCommunityIcons
                        name="delete-circle"
                        size={30}
                        color="#DB3022"
                      />
                    </Pressable>
                  )}

                  <Pressable
                    style={{
                      paddingHorizontal: 8,
                      paddingVertical: 8,
                    }}>
                    <Text>{item?.quantity}</Text>
                  </Pressable>

                  <Pressable
                    onPress={() => increaseQuantity(item)}
                    style={{
                      paddingHorizontal: 8,
                      paddingVertical: 8,
                    }}>
                    <AntDesign name="pluscircle" size={24} color="#DB3022" />
                  </Pressable>
                </View>
                <Pressable
                  onPress={() => deleteItem(item)}
                  style={{
                    paddingHorizontal: 40,
                    paddingVertical: 8,
                  }}>
                  <MaterialCommunityIcons
                    name="delete-circle"
                    size={30}
                    color="#DB3022"
                  />
                </Pressable>
              </Pressable>
              <View style={{paddingVertical: 8}} />
            </View>
          ))}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 135,
            }}>
            <View>
              <Text style={{color: 'gray', fontSize: 14, fontWeight: '500'}}>
                Total Price
              </Text>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                ${Math.trunc(total)}.99
              </Text>
            </View>

            <Pressable
              onPress={() => navigation.navigate('Conf')}
              style={{
                height: 35,
                width: 134,
                backgroundColor: '#DB3022',
                borderRadius: 25,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 16, fontWeight: 'bold', color: 'white'}}>
                Place Order
              </Text>
            </Pressable>
          </View>
        </View>
        <View style={{paddingBottom: 20}} />
      </ScrollView>
    </>
  );
};

export default CartScreen;
