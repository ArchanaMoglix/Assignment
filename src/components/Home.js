import React, {useEffect} from 'react';
import {
  Text,
  View,
  BackHandler,
  FlatList,
  Alert,
  Image,
  AsyncStorage,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';
import {addToCart} from '../redux/actions/index';

const Home = props => {
  const currentStore = useSelector(state => state.products);
  const dispatch = useDispatch();
  console.log(currentStore);
  const addCartFn = product => {
    dispatch(addToCart(product));
  };
  const renderItem = ({item}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          borderRadius: 4,
          borderColor: 'e7e7e7',
          borderWidth: 0.6,
          marginTop: 12,
          padding: 12,
        }}>
        <View
          style={{
            marginBottom: 5,
          }}>
          <Image
            style={{
              height: 60,
              width: 60,
              borderRadius: 60,
            }}
            source={{uri: item.Image}}></Image>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignSelf: 'center',
            padding: 5,
          }}>
          <Text
            style={{
              fontSize: 20,
            }}>
            {item.ProductName}{' '}
          </Text>
          <Text style={{fontWeight: 'bold'}}> Rs.{item.Price}</Text>
          <Text style={{color: 'green'}}> Product ID: {item.ID}</Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: 'red',
            width: 65,
            height: 35,
            borderRadius: 5,
            justifyContent: 'center',
          }}
          onPress={() => addCartFn(item)}>
          <Text style={{color: 'white', fontSize: 12, alignSelf: 'center'}}>
            {' '}
            Add to cart{' '}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  const asyncFunction = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        console.log(value);
      } else {
        console.log(value);
      }
    } catch (error) {}
  };

  useEffect(() => {
    asyncFunction();
    const backAction = () => {
      if (props.navigation.isFocused()) {
        Alert.alert('Wait', 'Are you sure you want to go back?', [
          {
            text: 'Cancel',
            onPress: () => null,
            style: 'cancel',
          },
          {text: 'YES', onPress: () => BackHandler.exitApp()},
        ]);
        return true;
      }
      return false;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        padding: 30,
      }}>
      <View
        style={{
          position: 'absolute',
          top: 10,
          left: 10,
        }}>
        <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
          <FontAwesome5 name={'bars'} size={30} color={'black'}></FontAwesome5>
        </TouchableOpacity>
      </View>
      <View
        style={{
          position: 'absolute',
          top: 10,
          right: 10,
        }}>
        <TouchableOpacity onPress={() => props.navigation.navigate('MyCart')}>
          <FontAwesome5
            name={'shopping-cart'}
            size={30}
            color={'black'}></FontAwesome5>
        </TouchableOpacity>
      </View>

      <Text
        style={{
          color: 'purple',
          fontSize: 40,
          alignSelf: 'center',
          marginTop: 20,
        }}>
        Home Screen
      </Text>
      <View
        style={{
          marginTop: 40,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Icon
          name={'account'}
          style={{color: 'black'}}
          size={40}
          onPress={() => props.navigation.navigate('Profile')}></Icon>
        <AntDesign
          name={'setting'}
          style={{color: 'black'}}
          size={40}
          onPress={() => props.navigation.navigate('Settings')}></AntDesign>
      </View>
      <Text
        style={{
          alignSelf: 'center',
          color: 'blueviolet',
          fontWeight: 'bold',
          fontSize: 40,
          marginBottom: 20,
          fontStyle: 'italic',
          textDecorationLine: 'underline',
        }}>
        Products
      </Text>
      <FlatList data={currentStore} renderItem={renderItem}></FlatList>
    </View>
  );
};
export default Home;
