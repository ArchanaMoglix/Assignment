import React, {useEffect, useState} from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Dimensions,
  AsyncStorage,
} from 'react-native';
import Axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Profile = props => {
  const logoutFunction = async () => {
    props.route.params.setIsLoggedIn(false);
    await AsyncStorage.removeItem('token');
  };
  useEffect(() => {
    getUser();
  }, []);
  const [userData, setUserData] = useState({});
  const getUser = async () => {
    try {
      const data = await Axios.get('https://reqres.in/api/users/4');
      if (data.data.data) {
        setUserData(data.data.data);
      } else {
        alert('Something went wrong!!');
      }
      console.log(data);
    } catch (e) {
      alert('Something went wrong!!');
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
      }}>
      <Text style={{color: 'red', fontSize: 40}}>My Profile</Text>
      <Text style={{fontSize: 20}}> Email: {userData.email}</Text>
      <View style={{marginTop: 20}}>
        <TouchableOpacity
          style={{
            backgroundColor: 'blueviolet',
            height: 40,
            width: Dimensions.get('window').width * 0.8,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
          }}
          onPress={() => {
            logoutFunction();
          }}>
          <Text style={{color: 'white', fontSize: 20}}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Profile;
