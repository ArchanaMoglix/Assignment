import React from 'react';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {removeFromCart} from '../redux/actions';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const myCart = props => {
  const displayCartItems = useSelector(state => state.cart.products);
  const dispatch = useDispatch();
  const removeFromCartFn = ID => {
    dispatch(removeFromCart(ID));
  };
  const renderItem = ({item}) => {
    // console.log(item);
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
            {item.ProductName}
          </Text>
          <Text style={{fontWeight: 'bold'}}> Rs.{item.Price}</Text>
          <Text style={{color: 'green'}}> Product ID: {item.ID}</Text>
          <Text> Quantity: {item.Quantity}</Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            width: 65,
            height: 35,
            borderRadius: 5,
            justifyContent: 'center',
          }}
          onPress={() => removeFromCartFn(item.ID)}>
          <Text style={{color: 'black', fontSize: 12, alignSelf: 'center'}}>
            {' '}
            Remove{' '}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={{backgroundColor: 'e7e7e7'}}>
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
      <Text
        style={{
          alignSelf: 'center',
          color: 'black',
          fontWeight: 'bold',
          fontSize: 40,
          marginBottom: 20,
          // fontStyle: 'italic',
          // textDecorationLine: "underline",
        }}>
        My cart
      </Text>
      <FlatList
        data={displayCartItems}
        renderItem={renderItem}
        ListEmptyComponent={() => (
          <View
            style={{
              backgroundColor: 'grey',
              height: 150,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
              Your cart is empty
            </Text>
          </View>
        )}></FlatList>
    </View>
  );
};
export default myCart;
