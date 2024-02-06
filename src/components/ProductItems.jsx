/* eslint-disable react-native/no-inline-styles */
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../redux/CartReducer';

const ProductItems = ({item}) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const dispatch = useDispatch();
  const addItemToCart = item => {
    setAddedToCart(true);
    dispatch(addToCart(item));
    setTimeout(() => {
      setAddedToCart(false);
    }, 60000);
  };

  return (
    <Pressable style={{marginHorizontal: 20, marginVertical: 25}}>
      <Image
        style={{height: 150, width: 150, resizeMode: 'contain'}}
        source={{uri: item?.image}}
      />
      <Text numberOfLines={1} style={{width: 150, marginTop: 10}}>
        {item?.title}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>${item?.price}</Text>
        <Text style={{color: '#DB3022', fontWeight: 'bold'}}>
          Rating {item?.rating?.rate}
        </Text>
      </View>
      <Pressable
        onPress={() => addItemToCart(item)}
        style={{
          backgroundColor: '#DB3022',
          padding: 10,
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 10,
          marginTop: 10,
        }}>
        {addedToCart ? (
          <View>
            <Text style={{color: '#fff', fontWeight: '800'}}>
              Added to Cart
            </Text>
          </View>
        ) : (
          <Text style={{color: '#fff', fontWeight: '800'}}>Add to Cart</Text>
        )}
      </Pressable>
    </Pressable>
  );
};

export default ProductItems;
