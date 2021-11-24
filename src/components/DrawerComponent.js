import React from 'react';
import {Text, View, Dimensions, AsyncStorage} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const DrawerComponent = props => {
  const logoutFunction = async () => {
    props.setIsLoggedIn(false);
    await AsyncStorage.removeItem('token');
  };
  return (
    <View>
      <View style={{padding: 15, backgroundColor: '#e7e7e7'}}>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}> Menu </Text>
      </View>
      <View
        style={{
          marginTop: 25,
          width: 80,
          height: 80,
          borderRadius: 80,
          backgroundColor: 'green',
          alignSelf: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{alignSelf: 'center', fontSize: 50, color: '#fff'}}>
          N
        </Text>
      </View>
      <View
        style={{
          borderStyle: 'solid',
          borderBottomColor: '#e7e7e7',
          width: Dimensions.get('window').width * 0.833,
          borderBottomWidth: 0.6,
        }}>
        <Text style={{alignSelf: 'center', marginTop: 5, fontWeight: 'bold'}}>
          Victorcodex
        </Text>
        <Text style={{alignSelf: 'center', fontWeight: 'bold'}}>
          Have some p tag here
        </Text>
        <Text
          style={{alignSelf: 'center', fontWeight: 'bold', marginBottom: 10}}>
          I am the third guy inline here
        </Text>
      </View>

      <View
        style={{
          marginTop: 50,
          height: 40,
          width: Dimensions.get('window').width * 0.833,
          flexDirection: 'row',
          //   backgroundColor: '#e7e7e7',
          borderStyle: 'solid',
          borderBottomColor: '#e7e7e7',
          width: Dimensions.get('window').width * 0.833,
          borderBottomWidth: 0.6,
        }}>
        <View
          style={{
            height: 40,
            width: Dimensions.get('window').width * 0.2,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <FontAwesome name={'home'} size={27} color={'black'}></FontAwesome>
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Home')}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 15,
              justifyContent: 'center',
              marginTop: 10,
              marginHorizontal: 10,
              fontWeight: 'bold',
            }}>
            Home
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          //   marginTop: 20,
          height: 40,
          width: Dimensions.get('window').width * 0.833,
          flexDirection: 'row',
          borderStyle: 'solid',
          borderBottomColor: '#e7e7e7',
          width: Dimensions.get('window').width * 0.833,
          borderBottomWidth: 0.6,
        }}>
        <View
          style={{
            height: 40,
            width: Dimensions.get('window').width * 0.2,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <FontAwesome name={'list'} size={20} color={'black'}></FontAwesome>
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('List')}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 15,
              justifyContent: 'center',
              marginTop: 10,
              marginHorizontal: 10,
              fontWeight: 'bold',
            }}>
            List
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          height: 40,
          width: Dimensions.get('window').width * 0.833,
          flexDirection: 'row',
          //   backgroundColor: '#e7e7e7',
          borderStyle: 'solid',
          borderBottomColor: '#e7e7e7',
          width: Dimensions.get('window').width * 0.833,
          borderBottomWidth: 0.6,
        }}>
        <View
          style={{
            height: 40,
            width: Dimensions.get('window').width * 0.2,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <FontAwesome name={'user'} size={25} color={'black'}></FontAwesome>
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Profile')}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 15,
              justifyContent: 'center',
              marginTop: 10,
              marginHorizontal: 10,
              fontWeight: 'bold',
            }}>
            Profile
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          height: 40,
          width: Dimensions.get('window').width * 0.833,
          flexDirection: 'row',
          borderStyle: 'solid',
          borderBottomColor: '#e7e7e7',
          width: Dimensions.get('window').width * 0.833,
          borderBottomWidth: 0.6,
        }}>
        <View
          style={{
            height: 40,
            width: Dimensions.get('window').width * 0.2,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <FontAwesome5 name={'blog'} size={22} color={'black'}></FontAwesome5>
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Blog')}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 15,
              justifyContent: 'center',
              marginTop: 10,
              marginHorizontal: 10,
              fontWeight: 'bold',
            }}>
            Blog
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          height: 40,
          width: Dimensions.get('window').width * 0.833,
          flexDirection: 'row',
        }}>
        <View
          style={{
            height: 40,
            width: Dimensions.get('window').width * 0.2,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Feather name={'info'} size={22} color={'black'}></Feather>
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('AboutUs')}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 15,
              justifyContent: 'center',
              marginTop: 10,
              marginHorizontal: 10,
              fontWeight: 'bold',
            }}>
            About Us
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 180}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#e7e7e7',
            padding: 15,
            width: Dimensions.get('window').width * 0.833,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            logoutFunction();
          }}>
          <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DrawerComponent;
