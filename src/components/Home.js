import React, {useEffect, useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import Axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = props => {
  //   const [name, setName] = useState('');
  //   useEffect(() => {
  //     console.log(name);
  //   });
  //   useEffect(() => {
  //     // console.log('mounted');
  //     getUser();
  //   }, []);
  //   const [userData, setUserData] = useState({});
  //   const getUser = async () => {
  //     try {
  //       const data = await Axios.get('https://reqres.in/api/users/2');
  //       if (data.data.data) {
  //         setUserData(data.data.data);
  //       } else {
  //         alert('Something went wrong!!');
  //       }
  //       console.log(data);
  //     } catch (e) {
  //       alert('Something went wrong!!');
  //     }
  //   };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
      }}>
      <Text style={{color: 'red', fontSize: 40}}>Welcome to home!</Text>
      {/* <Text style={{fontSize: 20}}> Email: {userData.email}</Text> */}
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
          size={60}
          onPress={() => props.navigation.navigate('User')}></Icon>
        <Icon
          name={'ship-wheel'}
          style={{color: 'black'}}
          size={60}
          onPress={() => props.navigation.navigate('Settings')}></Icon>
      </View>
    </View>
  );
};
export default Home;
