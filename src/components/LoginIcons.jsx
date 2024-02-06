import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntDesig from 'react-native-vector-icons/AntDesign';

const LoginIcons = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.iconsText}>Or {props.name} with social account</Text>
      <View style={styles.IconsContainer}>
        <View style={[styles.boxLogo, styles.boxWithShadow]}>
          <AntDesig name="google" size={40} color={'#DB3022'} />
        </View>
        <View style={[styles.boxLogo, styles.boxWithShadow]}>
          <AntDesig name="apple1" size={40} color={'#DB3022'} />
        </View>
      </View>
    </View>
  );
};

export default LoginIcons;

const styles = StyleSheet.create({
  IconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  boxLogo: {
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxWithShadow: {
    shadowColor: '522622',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    height: 64,
    width: 92,
  },
  iconsText: {
    fontSize: 16,
    fontWeight: '600',
  },
});
