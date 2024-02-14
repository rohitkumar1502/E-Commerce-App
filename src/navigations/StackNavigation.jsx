/* eslint-disable react/no-unstable-nested-components */
import {} from 'react-native';
import React from 'react';
//import {NativeScreenContainer} from 'react-native-screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CartScreen from '../screens/CartScreen';
import FavoriteScreen from '../screens/FavoriteScreen';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProductInfoScreen from '../screens/ProductInfoScreen';
import ConformationScreen from '../screens/ConformationScreen';
import AddAddressScreen from '../screens/AddAddressScreen';
import AddingNewAddress from '../screens/AddingNewAddress';
import OrderScreen from '../screens/OrderScreen';

// initialRouteName="Login"

const StackNavigation = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  function BottomTab() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarLabelStyle: {color: '#DB3022'},
            headerShown: false,
            tabBarIcon: ({focused}) =>
              focused ? (
                <Entypo size={24} name="home" color={'#DB3022'} />
              ) : (
                <AntDesign name="home" size={24} color={'#DB3022'} />
              ),
          }}
        />

        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            tabBarLabel: 'Cart',
            tabBarLabelStyle: {color: '#DB3022'},
            // headerShown: false,
            tabBarIcon: ({focused}) =>
              focused ? (
                <MaterialCommunityIcons
                  size={24}
                  name="cart"
                  color={'#DB3022'}
                />
              ) : (
                <MaterialCommunityIcons
                  name="cart-outline"
                  size={24}
                  color={'#DB3022'}
                />
              ),
          }}
        />

        <Tab.Screen
          name="Favorite"
          component={FavoriteScreen}
          options={{
            tabBarLabel: 'Favorite',
            tabBarLabelStyle: {color: '#DB3022'},
            // headerShown: false,
            tabBarIcon: ({focused}) =>
              focused ? (
                <MaterialIcons size={24} name="favorite" color={'#DB3022'} />
              ) : (
                <MaterialIcons
                  name="favorite-border"
                  size={24}
                  color={'#DB3022'}
                />
              ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarLabelStyle: {color: '#DB3022'},
            // headerShown: false,
            tabBarIcon: ({focused}) =>
              focused ? (
                <Ionicons size={24} name="person" color={'#DB3022'} />
              ) : (
                <Ionicons name="person-outline" size={24} color={'#DB3022'} />
              ),
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Main"
          component={BottomTab}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Info"
          component={ProductInfoScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddNewAddress"
          component={AddAddressScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddingNew"
          component={AddingNewAddress}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Conf"
          component={ConformationScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Order"
          component={OrderScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
