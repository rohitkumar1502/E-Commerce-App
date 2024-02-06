/* eslint-disable react-native/no-inline-styles */
import {Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import ProfileData from '../components/ProfileData';

const ProfileScreen = () => {
  return (
    <>
      <SafeAreaView>
        <View
          style={{
            paddingTop: 18,
            paddingLeft: 15,
          }}>
          <Text style={{fontSize: 34, fontWeight: 700}}>My profile</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            paddingVertical: 20,
          }}>
          <Octicons name="feed-person" size={101} />
          <View>
            <Text style={{fontSize: 18, fontWeight: '500'}}>Rohit Kuamr</Text>
            <Text style={{fontSize: 14, fontWeight: '500', color: '#9B9B9B'}}>
              krohitkumar211@gmail.com
            </Text>
          </View>
        </View>
        <View>
          <ProfileData heading="My orders" desc="Already have 12 orders" />
        </View>
        <View>
          <ProfileData heading="Shipping addresses" desc="3 ddresses" />
        </View>
        <View>
          <ProfileData heading="Payment methods" desc="Visa  **34" />
        </View>
        <View>
          <ProfileData
            heading="Promocodes"
            desc="You have special promocodes"
          />
        </View>
        <View>
          <ProfileData heading="My reviews" desc="Reviews for 4 items" />
        </View>
        <View>
          <ProfileData heading="Settings" desc="Notifications, password" />
        </View>
      </SafeAreaView>
    </>
  );
};

export default ProfileScreen;
