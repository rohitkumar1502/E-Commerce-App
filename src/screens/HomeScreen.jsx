/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {SafeAreaView} from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  ScrollView,
  Pressable,
  TextInput,
  Image,
} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import ProductItems from '../components/ProductItems';
import DropDownPicker from 'react-native-dropdown-picker';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const HomeScreen = () => {
  const offers = [
    {
      id: '0',
      title:
        'Oppo Enco Air3 Pro True Wireless in Ear Earbuds with Industry First Composite Bamboo Fiber, 49dB ANC, 30H Playtime, 47ms Ultra Low Latency,Fast Charge,BT 5.3 (Green)',
      offer: '72% off',
      oldPrice: 75,
      price: 56,
      image:
        'https://m.media-amazon.com/images/I/61a2y1FCAJL._AC_UL640_FMwebp_QL65_.jpg',
      carouselImages: [
        'https://m.media-amazon.com/images/I/61a2y1FCAJL._SX679_.jpg',
        'https://m.media-amazon.com/images/I/71DOcYgHWFL._SX679_.jpg',
        'https://m.media-amazon.com/images/I/71LhLZGHrlL._SX679_.jpg',
        'https://m.media-amazon.com/images/I/61Rgefy4ndL._SX679_.jpg',
      ],
      color: 'Green',
      size: 'Normal',
    },
    {
      id: '1',
      title:
        'Fastrack Limitless FS1 Pro Smart Watch|1.96 Super AMOLED Arched Display with 410x502 Pixel Resolution|SingleSync BT Calling|NitroFast Charging|110+ Sports Modes|200+ Watchfaces|Upto 7 Days Battery',
      offer: '40%',
      oldPrice: 79,
      price: 43,
      image: 'https://m.media-amazon.com/images/I/41mQKmbkVWL._AC_SY400_.jpg',
      carouselImages: [
        'https://m.media-amazon.com/images/I/71h2K2OQSIL._SX679_.jpg',
        'https://m.media-amazon.com/images/I/71BlkyWYupL._SX679_.jpg',
        'https://m.media-amazon.com/images/I/71c1tSIZxhL._SX679_.jpg',
      ],
      color: 'black',
      size: 'Normal',
    },
    {
      id: '2',
      title: 'Aishwariya System On Ear Wireless On Ear Bluetooth Headphones',
      offer: '40%',
      oldPrice: 90,
      price: 49,
      image: 'https://m.media-amazon.com/images/I/41t7Wa+kxPL._AC_SY400_.jpg',
      carouselImages: ['https://m.media-amazon.com/images/I/41t7Wa+kxPL.jpg'],
      color: 'black',
      size: 'Normal',
    },
    {
      id: '3',
      title:
        'Fastrack Limitless FS1 Pro Smart Watch|1.96 Super AMOLED Arched Display with 410x502 Pixel Resolution|SingleSync BT Calling|NitroFast Charging|110+ Sports Modes|200+ Watchfaces|Upto 7 Days Battery',
      offer: '40%',
      oldPrice: 500,
      price: 275,
      image: 'https://m.media-amazon.com/images/I/71k3gOik46L._AC_SY400_.jpg',
      carouselImages: [
        'https://m.media-amazon.com/images/I/41bLD50sZSL._SX300_SY300_QL70_FMwebp_.jpg',
        'https://m.media-amazon.com/images/I/616pTr2KJEL._SX679_.jpg',
        'https://m.media-amazon.com/images/I/71wSGO0CwQL._SX679_.jpg',
      ],
      color: 'Norway Blue',
      size: '8GB RAM, 128GB Storage',
    },
  ];
  const deals = [
    {
      id: '20',
      title: 'OnePlus Nord CE 3 Lite 5G (Pastel Lime, 8GB RAM, 128GB Storage)',
      oldPrice: 450,
      price: 300,
      image:
        'https://images-eu.ssl-images-amazon.com/images/G/31/wireless_products/ssserene/weblab_wf/xcm_banners_2022_in_bau_wireless_dec_580x800_once3l_v2_580x800_in-en.jpg',
      carouselImages: [
        'https://m.media-amazon.com/images/I/61QRgOgBx0L._SX679_.jpg',
        'https://m.media-amazon.com/images/I/61uaJPLIdML._SX679_.jpg',
        'https://m.media-amazon.com/images/I/510YZx4v3wL._SX679_.jpg',
        'https://m.media-amazon.com/images/I/61J6s1tkwpL._SX679_.jpg',
      ],
      color: 'Stellar Green',
      size: '6 GB RAM 128GB Storage',
    },
    {
      id: '30',
      title:
        'Samsung Galaxy S20 FE 5G (Cloud Navy, 8GB RAM, 128GB Storage) with No Cost EMI & Additional Exchange Offers',
      oldPrice: 560,
      price: 340,
      image:
        'https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/Samsung/SamsungBAU/S20FE/GW/June23/BAU-27thJune/xcm_banners_2022_in_bau_wireless_dec_s20fe-rv51_580x800_in-en.jpg',
      carouselImages: [
        'https://m.media-amazon.com/images/I/81vDZyJQ-4L._SY879_.jpg',
        'https://m.media-amazon.com/images/I/61vN1isnThL._SX679_.jpg',
        'https://m.media-amazon.com/images/I/71yzyH-ohgL._SX679_.jpg',
        'https://m.media-amazon.com/images/I/61vN1isnThL._SX679_.jpg',
      ],
      color: 'Cloud Navy',
      size: '8 GB RAM 128GB Storage',
    },
    {
      id: '40',
      title:
        'Samsung Galaxy M14 5G (ICY Silver, 4GB, 128GB Storage) | 50MP Triple Cam | 6000 mAh Battery | 5nm Octa-Core Processor | Android 13 | Without Charger',
      oldPrice: 240,
      price: 200,
      image:
        'https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/Samsung/CatPage/Tiles/June/xcm_banners_m14_5g_rv1_580x800_in-en.jpg',
      carouselImages: [
        'https://m.media-amazon.com/images/I/817WWpaFo1L._SX679_.jpg',
        'https://m.media-amazon.com/images/I/81KkF-GngHL._SX679_.jpg',
        'https://m.media-amazon.com/images/I/61IrdBaOhbL._SX679_.jpg',
      ],
      color: 'Icy Silver',
      size: '6 GB RAM 64GB Storage',
    },
    {
      id: '40',
      title:
        'realme narzo N55 (Prime Blue, 4GB+64GB) 33W Segment Fastest Charging | Super High-res 64MP Primary AI Camera',
      oldPrice: 200,
      price: 138,
      image:
        'https://images-eu.ssl-images-amazon.com/images/G/31/tiyesum/N55/June/xcm_banners_2022_in_bau_wireless_dec_580x800_v1-n55-marchv2-mayv3-v4_580x800_in-en.jpg',
      carouselImages: [
        'https://m.media-amazon.com/images/I/41Iyj5moShL._SX300_SY300_QL70_FMwebp_.jpg',
        'https://m.media-amazon.com/images/I/61og60CnGlL._SX679_.jpg',
        'https://m.media-amazon.com/images/I/61twx1OjYdL._SX679_.jpg',
      ],
    },
  ];
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const navigation = useNavigation();

  // eslint-disable-next-line quotes
  const [category, setCategory] = useState(`women's clothing`);
  const [items, setItems] = useState([
    {label: "Men's Clothing", value: "men's clothing"},
    {label: 'Jewelery', value: 'jewelery'},
    {label: 'Electronics', value: 'electronics'},
    {label: "Women's Clothing", value: "women's clothing"},
  ]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.log('error message', error);
      }
    };

    fetchData();
  }, []);
  const onGenderOpen = useCallback(() => {
    setCompanyOpen(false);
  }, []);

  const cart = useSelector(state => state.cart.cart);
  return (
    <>
      <SafeAreaView
        style={{
          paddinTop: Platform.OS === 'android' ? 40 : 0,
          flex: 1,
          backgroundColor: '#fff',
        }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              backgroundColor: '#891811',
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
                borderRadius: 25,
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
          <View>
            <Image
              source={require('../assets/Image.png')}
              style={styles.ImageMain}
            />
            <Text style={styles.fashionText}>Fashion</Text>
            <Text style={[styles.fashionText, styles.padd]}>sale</Text>
            <Pressable style={styles.checkoutBtt}>
              <Text style={{fontSize: 16, fontWeight: 'bold', color: 'white'}}>
                Check
              </Text>
            </Pressable>

            {/* <View style={styles.newContainer}>
              <View style={{marginVertical: 30}}>
                <Text style={{fontSize: 35, fontWeight: '800'}}>New</Text>
                <Text
                  style={{color: '#9B9B9B', fontWeight: '400', fontSize: 15}}>
                  {'You’ve never seen it before!'}
                </Text>
              </View>
              <Pressable>
                <Text style={{fontSize: 15, fontWeight: '500'}}>View all</Text>
              </Pressable>
            </View> */}
            <Text style={{padding: 10, fontSize: 18, fontWeight: 'bold'}}>
              Trending Deals of the week
            </Text>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}>
              {deals.map((item, index) => (
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
                    })
                  }
                  style={{
                    marginVertical: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{width: 180, height: 180, resizeMode: 'contain'}}
                    source={{uri: item?.image}}
                  />
                </Pressable>
              ))}
            </View>

            <Text
              style={{
                height: 1,
                borderColor: '#D0D0D0',
                borderWidth: 2,
                marginTop: 15,
              }}
            />

            <Text style={{padding: 10, fontSize: 18, fontWeight: 'bold'}}>
              Today's Deals
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {offers.map((item, index) => (
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
                      width: 130,
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

            <Text
              style={{
                height: 1,
                borderColor: '#D0D0D0',
                borderWidth: 2,
                marginTop: 15,
              }}
            />
            <View
              style={{
                alignItems: 'center',
                marginTop: 20,

                paddingHorizontal: 20,
                marginBottom: open ? 50 : 15,
              }}>
              <DropDownPicker
                style={{
                  borderColor: '#891811',
                  backgroundColor: '#fff',
                  height: 30,

                  marginBottom: open ? 120 : 15,
                }}
                dropDownContainerStyle={{
                  backgroundColor: 'white',
                }}
                selectedItemContainerStyle={{
                  backgroundColor: '#DB3022',
                }}
                textStyle={{
                  fontSize: 16,
                  fontWeight: '700',
                }}
                showArrowIcon={true}
                ArrowDownIconComponent={({style}) => (
                  <AntDesign
                    style={{marginRight: 5}}
                    color="#DB3022"
                    name="downcircle"
                    size={20}
                  />
                )}
                ArrowUpIconComponent={({style}) => (
                  <AntDesign
                    style={{marginRight: 5}}
                    color="#DB3022"
                    name="upcircle"
                    size={20}
                  />
                )}
                showTickIcon={true}
                TickIconComponent={({style}) => (
                  <AntDesign
                    style={{marginRight: 5}}
                    color="white"
                    name="check"
                    size={20}
                  />
                )}
                labelStyle={{
                  fontSize: 16,
                  fontWeight: '700',
                  color: '#DB3022',
                }}
                placeholderStyle={{
                  fontSize: 16,
                  fontWeight: '700',
                  color: '#DB3022',
                }}
                open={open}
                value={category}
                items={items}
                setOpen={setOpen}
                setValue={setCategory}
                setItems={setItems}
                placeholder="Choose Category"
                onOpen={onGenderOpen}
                //onChangeValue={onChange}
                zIndex={3000}
                zIndexInverse={1000}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'center',
              }}>
              {products
                ?.filter(item => item.category === category)
                .map((item, index) => (
                  <ProductItems item={item} key={index} />
                ))}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  checkoutBtt: {
    height: 36,
    width: 160,
    backgroundColor: '#DB3022',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    marginVertical: 420,
    marginHorizontal: 15,
  },
  fashionText: {
    fontSize: 48,
    fontWeight: '900',
    color: 'white',
    position: 'absolute',
    paddingHorizontal: 15,
    paddingVertical: 300,
  },
  padd: {
    paddingVertical: 350,
  },
  ImageMain: {
    height: 500,
    width: 400,
  },
  newContainer: {
    gap: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
