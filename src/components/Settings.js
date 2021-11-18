import React, {useEffect, useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import Axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Settings = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
      }}>
      <Text style={{color: 'red', fontSize: 40}}>Settings Page</Text>
      {/* <Text style={{fontSize: 20}}> Email: {userData.email}</Text> */}
    </View>
  );
};
export default Settings;
