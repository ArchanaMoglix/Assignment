import React, {useEffect, useState} from 'react';
import {Text, View, Image, FlatList} from 'react-native';
import Axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const List = props => {
  const [listData, setListData] = useState([]);
  useEffect(() => {
    drawerClick();
  }, []);
  const drawerClick = async () => {
    try {
      const data = await Axios.get('https://reqres.in/api/users?page=2');
      if (data.data.data) {
        setListData(data.data.data);
      } else {
      }
      console.log(data);
    } catch (e) {
      alert('Error occurred');
    }
  };
  const renderItem = ({item}) => {
    // console.log(item);
    return (
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            marginBottom: 5,
          }}>
          <Image
            style={{height: 60, width: 60, borderRadius: 60}}
            source={{uri: item.avatar}}></Image>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignSelf: 'center',
            padding: 5,
          }}>
          <Text
            style={{
              fontSize: 25,
            }}>
            {item.first_name} {item.last_name}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#e8f5ae',
        padding: 20,
      }}>
      <Text
        style={{
          alignSelf: 'center',
          color: 'blue',
          fontWeight: 'bold',
          fontSize: 40,
          marginBottom: 20,
          fontStyle: 'italic',
          textDecorationLine: 'underline',
        }}>
        List of Users
      </Text>
      <FlatList data={listData} renderItem={renderItem}></FlatList>
    </View>
  );
};
export default List;
