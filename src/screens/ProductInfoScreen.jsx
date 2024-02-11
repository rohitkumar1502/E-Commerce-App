/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  TextInput,
  ImageBackground,
  Dimensions,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart} from '../../redux/CartReducer';

const ProductInfoScreen = () => {
  const data = [
    {
      id: '0',
      title: 'High-waisted tailored trousers',
      offer: '72% off',
      oldPrice: 7500,
      price: 18.0,
      image:
        'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F37%2F7f%2F377f1997e8c143d7c78ad1bfd1e5f7abb7ce0dca.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
      carouselImages: [
        'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F36%2F35%2F36358abfc128a792a669871b2acd5bc7cab81c34.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
        'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Ff1%2F82%2Ff182d9b70dcbaf16a1628239b8df8a9c31b0f200.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
        'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F38%2Ff1%2F38f1438fe6413baa8d04e860e1749c22895e934c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
      ],
      color: 'Black',
      size: 'M',
      rating: {
        rate: 4.1,
        count: 259,
      },
      category: "women's Mens",
      description:
        'Tailored trousers in jersey with a high, elasticated waist. Relaxed fit with diagonal side pockets and wide legs with pleats at the top and creases down the front.',
    },
    {
      id: '1',
      title: 'Wide joggers',
      offer: '72% off',
      oldPrice: 7500,
      price: 19.0,
      image:
        'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F4c%2Fac%2F4cac5098511986c0d0686ba2a068b43dca73a240.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_basics_trousersleggings%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
      carouselImages: [
        'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fc4%2F46%2Fc44615e5bc4e1d3291ee914cfef629d1f9a83e8b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',

        'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fc4%2F46%2Fc44615e5bc4e1d3291ee914cfef629d1f9a83e8b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
        'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F19%2Fe2%2F19e2c66798bda2aa546b8fcd5bd598a25ab8e14e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
      ],
      color: 'Light greige',
      size: 'M',
      rating: {
        rate: 4.1,
        count: 259,
      },
      category: "women's Mens",
      description:
        'Loose-fit joggers in sweatshirt fabric with an elasticated, drawstring waist, discreet pockets in the side seams and wide legs.',
    },
    {
      id: '2',
      title: 'Long-sleeved jersey top',
      offer: '72% off',
      oldPrice: 7500,
      price: 14.0,
      image:
        'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F48%2Fe0%2F48e092629e8a1c48f042c3c50882814778a30d61.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_tops_longsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
      carouselImages: [
        'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F0e%2F86%2F0e86cfa8311f15c4cafac42c9d27003897215bc7.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
        'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Ffb%2F47%2Ffb472b2ddb58b7f62bba6df9ae468ea54eb96ac9.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
        'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F59%2Fbd%2F59bdaba953ff4b67d132ef8f4066069e5441a46b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_tops_longsleeve%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
      ],
      color: 'Dark greige',
      size: 'M',
      rating: {
        rate: 4.1,
        count: 259,
      },
      category: "women's Mens",
      description:
        'Fitted top in soft jersey with a square neckline and long sleeves.',
    },
    {
      id: '3',
      title: 'Crossbody bag',
      offer: '72% off',
      oldPrice: 7500,
      price: 23.0,
      image:
        'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F96%2F75%2F9675414d96cf33bb1899e17fcc887f32256dffdd.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
      carouselImages: [
        'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Ff7%2F37%2Ff737e686b31ff68a1f73509228dfafa93dec0c95.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
        'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F2c%2F71%2F2c7164ff2dd8847794a837276f058fbf3a9b12a6.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
        'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F96%2F75%2F9675414d96cf33bb1899e17fcc887f32256dffdd.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
      ],
      color: 'Black',
      size: 'M',
      rating: {
        rate: 4.1,
        count: 259,
      },
      category: "women's Mens",
      description:
        'Crossbody bag in coated fabric featuring a handle with a covered metal buckle at each side and an adjustable shoulder strap. Concealed magnetic fastener. Lined. Depth 9 cm. Height 23 cm. Width 26 cm.',
    },
    {
      id: '4',
      title: 'Oversized shirt dress',
      offer: '72% off',
      oldPrice: 7500,
      price: 15.0,
      image:
        'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F3e%2Fb2%2F3eb2d0ad5b274e33f153fcd246d8d6c819472039.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
      carouselImages: [
        'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Ff2%2F34%2Ff23466833ce5d5bebe96b033204fe4b12a9a83fe.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
        'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F81%2F4c%2F814ce69edc9924516b8e52a48f49528c27292337.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
        'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fc3%2F86%2Fc386eb094084bef45f23e2735a0e5c31299f3458.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
      ],
      color: 'Black',
      size: 'M',
      rating: {
        rate: 4.1,
        count: 259,
      },
      category: "women's Mens",
      description:
        'Short, oversized dress in a viscose weave with a collar and buttons down the front. Long sleeves with a slit and button at the cuffs and a gathered seam above the hem for added volume. Unlined.',
    },
  ];
  const route = useRoute();
  const {width} = Dimensions.get('window');
  const navigation = useNavigation();
  const [addedToCart, setAddedToCart] = useState(false);
  const height = (width * 100) / 100;
  const dispatch = useDispatch();
  const addItemToCart = item => {
    setAddedToCart(true);
    dispatch(addToCart(item));
    setTimeout(() => {
      setAddedToCart(false);
    }, 60000);
  };
  const cart = useSelector(state => state.cart.cart);

  console.log(cart);
  return (
    <ScrollView
      style={{marginTop: 55, flex: 1, backgroundColor: 'white'}}
      showsVerticalScrollIndicator={false}>
      <View
        style={{
          backgroundColor: '#DB3022',
          padding: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Pressable
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 7,
            gap: 10,
            backgroundColor: 'white',
            borderRadius: 30,
            height: 38,
            flex: 1,
          }}>
          <AntDesign
            style={{paddingLeft: 10}}
            name="search1"
            size={22}
            color="black"
          />
          <TextInput placeholder="Search on e.comfy.in" />
        </Pressable>

        <Feather name="mic" size={24} color="white" />
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {route.params.carouselImages.map((item, index) => (
          <ImageBackground
            style={{
              height,
              width,
              marginTop: 25,
              resizeMode: 'contain',
            }}
            source={{uri: item}}
            key={index}>
            <View
              style={{
                padding: 20,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: '#DB3022',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    fontWeight: '700',
                    fontSize: 12,
                  }}>
                  20% off
                </Text>
              </View>

              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: '#DB3022',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <MaterialCommunityIcons
                  name="share-variant"
                  size={24}
                  color="white"
                />
              </View>
            </View>

            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: '#DB3022',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                marginTop: 'auto',
                marginLeft: 20,
                marginBottom: 20,
              }}>
              <AntDesign name="hearto" size={24} color="white" />
            </View>
          </ImageBackground>
        ))}
      </ScrollView>

      <View style={{paddingHorizontal: 15, paddingVertical: 15}}>
        <Text style={{fontSize: 15, fontWeight: '500'}}>
          {route?.params?.title}
        </Text>
        <View
          style={{
            paddingHorizontal: 1,
            paddingVertical: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              width: 155,
              height: 40,
              borderColor: '#F01F0E',
              borderWidth: 1,
              justifyContent: 'space-evenly',
              borderRadius: 8,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '500',
                width: 90,
                marginHorizontal: 3,
              }}>
              {route?.params?.size}
            </Text>
            <AntDesign name="downcircle" size={24} color={'#DB3022'} />
          </View>
          <View
            style={{
              width: 155,
              height: 40,
              borderColor: '#F01F0E',
              borderWidth: 1,
              justifyContent: 'space-evenly',
              borderRadius: 8,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '500',
                width: 90,
                marginHorizontal: 3,
              }}>
              {route?.params?.color}
            </Text>
            <AntDesign name="downcircle" size={24} color={'#DB3022'} />
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 15,
        }}>
        <Text style={{fontSize: 20, fontWeight: '600'}}>Company Name</Text>
        <Text style={{fontSize: 20, fontWeight: '600', marginTop: 6}}>
          ${route.params.price}
        </Text>
      </View>
      <View style={{padding: 10}}>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 5,
            alignItems: 'center',
            gap: 5,
          }}>
          <Ionicons name="location" size={23} color="black" />

          <Text style={{fontSize: 16, fontWeight: '500'}}>
            Deliver To Rohit - Punjab 843107
          </Text>
        </View>
        <Text style={{paddingHorizontal: 15, paddingVertical: 8, fontSize: 16}}>
          {route.params.description}
        </Text>
      </View>

      <Pressable
        onPress={() => addItemToCart(route?.params?.item)}
        style={{
          backgroundColor: '#DB3022',
          padding: 10,
          borderRadius: 25,
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 15,
          marginVertical: 10,
          height: 48,
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
      <View
        style={{
          borderTopColor: 'gray',
          borderBottomColor: 'gray',
          borderWidth: 0.3,
          height: 50,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 16,
          marginVertical: 10,
        }}>
        <Text style={{fontSize: 16, fontWeight: '400'}}>Shipping info</Text>
        <AntDesign name="rightcircle" size={24} color={'#DB3022'} />
      </View>
      <View
        style={{
          borderTopColor: 'gray',
          borderBottomColor: 'gray',
          borderWidth: 0.3,
          height: 50,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 16,
        }}>
        <Text style={{fontSize: 16, fontWeight: '400'}}>Shipping info</Text>
        <AntDesign name="rightcircle" size={24} color={'#DB3022'} />
      </View>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 15,
          paddingVertical: 14,
        }}>
        <Text style={{fontSize: 18, fontWeight: '400'}}>
          You can also like this
        </Text>
        <Text style={{fontSize: 13, fontWeight: '400', color: 'gray'}}>
          5 items
        </Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item, index) => (
          <Pressable
            onPress={() =>
              navigation.navigate('Info', {
                id: item.id,
                title: item.title,
                price: item?.price,
                carouselImages: item.carouselImages,
                color: item?.color,
                size: item?.size,
                oldPrice: item?.oldPrice,
                item: item,
                description: item?.description,
              })
            }
            style={{
              marginVertical: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{width: 150, height: 150, resizeMode: 'contain'}}
              source={{uri: item?.image}}
            />

            <View
              style={{
                backgroundColor: '#E31837',
                paddingVertical: 5,
                width: 104,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 10,
                borderRadius: 4,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontSize: 13,
                  fontWeight: 'bold',
                }}>
                Upto {item?.offer}
              </Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
      <View style={{paddingBottom: 35}} />
    </ScrollView>
  );
};

export default ProductInfoScreen;

const styles = StyleSheet.create({});
