/* eslint-disable react-native/no-inline-styles */
import {Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ProfileData = props => {
  return (
    <>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginHorizontal: 20,
          borderBottomColor: '#9B9B9B',
          borderBottomWidth: 0.3,
          paddingVertical: 7,
          height: 72,
        }}>
        <View>
          <Text style={{fontSize: 16, fontWeight: '700', paddingVertical: 7}}>
            {props.heading}
          </Text>
          <Text style={{fontSize: 13, fontWeight: '500', color: '#9B9B9B'}}>
            {props.desc}
          </Text>
        </View>
        <AntDesign name="right" size={24} color={'#9B9B9B'} />
      </View>
    </>
  );
};

export default ProfileData;
