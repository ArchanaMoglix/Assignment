import React from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import Axios from 'axios';

const AboutUs = props => {
  return (
    <View
      style={{
        backgroundColor: '#ba8ca5',
        padding: 40,
      }}>
      <View style={{position: 'absolute', top: 10, left: 10}}>
        <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
          <FontAwesome5 name={'bars'} size={30} color={'black'}></FontAwesome5>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          color: 'black',
          fontWeight: 'bold',
          fontSize: 40,
          marginBottom: 20,
        }}>
        About us
      </Text>
      <Text style={{fontSize: 20}}>
        Moglix is an Asia-based B2B commerce company specializing in the
        procurement of B2B industrial products. We are 880+ strong and
        headquartered in Singapore with a robust warehouse and logistics
        network, providing procurement services across India, Europe, SEA, UK
        and UAE.
      </Text>
    </View>
  );
};
export default AboutUs;
