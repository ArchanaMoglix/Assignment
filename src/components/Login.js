import {placeholder} from '@babel/types';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
  Dimensions,
  AsyncStorage,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Axios from 'axios';

const Login = props => {
  const [username, setUsername] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('cityslicka');
  const [passwordShown, setPasswordShown] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [keepSignedIn, setKeepSignedIn] = useState(false);

  useEffect(() => {
    if (password) {
      if (password && password.length >= 6) {
        setPasswordError(false);
      } else {
        setPasswordError(true);
      }
    }
  }, [password]);
  useEffect(() => {
    if (username) {
      if (
        username &&
        username.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
      ) {
        setEmailError(false);
      } else {
        setEmailError(true);
      }
    }
  }, [username]);

  const loginNow = async () => {
    try {
      if (
        username &&
        username.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
      ) {
        setEmailError(false);
      } else {
        setEmailError(true);
        return;
      }
      if (password && password.length >= 6) {
        setPasswordError(false);
      } else {
        setPasswordError(true);
        return;
      }
      const data = await Axios.post('https://reqres.in/api/login', {
        email: username,
        password: password,
      });
      console.log(data);
      if (data.data.token) {
        if (keepSignedIn) {
          await AsyncStorage.setItem('token', data.data.token);
        }
        props.route.params.setIsLoggedIn(true);
        // props.navigation.navigate('Home');
      } else {
        alert('Something went wrong');
      }
    } catch (e) {
      console.log(e.response, e);
      alert(e.response.data.error);
    }
  };

  return (
    <View
      style={{
        backgroundColor: 'blueviolet',
        flex: 1,
        justifyContent: 'center',
      }}>
      <View
        style={{
          backgroundColor: 'white',
          paddingVertical: 40,
          paddingHorizontal: 20,
          marginHorizontal: 20,
          borderRadius: 15,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 40, alignSelf: 'center', marginBottom: 10}}>
          Sign in
        </Text>
        <Text style={{fontSize: 15, marginBottom: 40, alignSelf: 'center'}}>
          Login to your account
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 4,
            flexDirection: 'row',
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 4,
            height: 40,
            width: Dimensions.get('window').width * 0.7,
          }}>
          <View
            style={{
              height: 40,
              width: Dimensions.get('window').width * 0.1,
              borderRightColor: 'black',
              borderRightWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <SimpleLineIcons
              style={{color: 'black'}}
              name={'user'}
              size={25}></SimpleLineIcons>
          </View>
          <TextInput
            value={username}
            style={{
              // backgroundColor: 'red',
              height: 40,
              width: Dimensions.get('window').width * 0.6,
            }}
            onChangeText={username => setUsername(username)}
            placeholder={'Username or email'}></TextInput>
        </View>
        {emailError ? (
          <Text style={{color: 'red', alignSelf: 'center'}}>
            Invalid Email Address
          </Text>
        ) : null}

        {/* Password */}

        <View
          style={{
            marginTop: 10,
            marginBottom: 10,
            flexDirection: 'row',
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 4,
            backgroundColor: 'white',
            height: 40,
            width: Dimensions.get('window').width * 0.7,
          }}>
          <View
            style={{
              width: 40,
              height: 40,
              borderRightColor: 'black',
              borderRightWidth: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon style={{color: 'black'}} name={'key'} size={25}></Icon>
          </View>

          <TextInput
            value={password}
            style={{
              height: 40,
              width: Dimensions.get('window').width * 0.5,
            }}
            onChangeText={password => setPassword(password)}
            secureTextEntry={passwordShown ? false : true}
            placeholder={'Password'}></TextInput>
          <View
            style={{
              width: Dimensions.get('window').width * 0.08,
              height: 40,
              borderRightColor: 'black',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableHighlight
              onPress={() => {
                setPasswordShown(!passwordShown);
              }}>
              <Octicons
                name={'eye'}
                style={{color: 'black'}}
                size={20}></Octicons>
            </TouchableHighlight>
          </View>
        </View>
        {passwordError ? (
          <Text style={{color: 'red', alignSelf: 'center'}}>
            Password must be minimum 6 characters
          </Text>
        ) : null}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
            width: Dimensions.get('window').width * 0.7,
          }}>
          <TouchableOpacity onPress={() => props.navigation.navigation(' ')}>
            <Text>Forgot Password</Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              // justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={() => setKeepSignedIn(!keepSignedIn)}>
              <MaterialCommunityIcons
                name={
                  keepSignedIn ? 'check-box-outline' : 'checkbox-blank-outline'
                }
                size={15}
                color={'black'}
              />
            </TouchableOpacity>

            <Text>Keep me signed</Text>
          </View>
        </View>

        <TouchableOpacity
          disabled={!username || !password || emailError || passwordError}
          style={{
            backgroundColor:
              !username || !password || emailError || passwordError
                ? 'grey'
                : 'blueviolet',
            alignSelf: 'center',
            borderWidth: 1,
            width: 250,
            height: 40,
            borderRadius: 15,
          }}
          onPress={() => loginNow()}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              color: 'white',
              lineHeight: 32,
            }}>
            Log in
          </Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              borderStyle: 'dashed',
              borderTopColor: 'black',
              //  borderRadius:1,
              width: Dimensions.get('window').width * 0.3,
              borderTopWidth: 1,

              height: 0,
            }}></View>
          <Text
            style={{
              marginHorizontal: 10,
              // alignItems: 'center',
              // justifyContent: 'center',
              fontSize: 20,
            }}>
            or
          </Text>
          <View
            style={{
              borderStyle: 'dashed',
              borderTopColor: 'black',
              // borderRadius:1,
              width: Dimensions.get('window').width * 0.3,
              borderTopWidth: 1,
              height: 0,
            }}></View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            borderRadius: 5,
            width: Dimensions.get('window').width * 0.7,
            height: 40,
            borderColor: 'powderblue',
            borderWidth: 2,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'powderblue',
          }}>
          <View
            style={{
              borderWidth: 2,
              borderRadius: 5,
              width: 40,
              height: 40,
              borderColor: 'powderblue',
              backgroundColor: 'dodgerblue',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              name={'facebook'}
              size={30}
              style={{color: 'black'}}></MaterialCommunityIcons>
          </View>
          <TouchableOpacity
            style={{
              alignSelf: 'center',
              justifyContent: 'center',
              width: Dimensions.get('window').width * 0.7,
              height: 40,
            }}>
            <Text
              style={{
                alignSelf: 'center',
                color: 'white',
                fontSize: 20,
                lineHeight: 32,
              }}>
              Log in with Facebook{' '}
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'red',
            borderWidth: 2,
            borderColor: 'red',
            width: Dimensions.get('window').width * 0.7,
            height: 40,
            borderRadius: 5,
            marginTop: 5,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              borderRadius: 2,
              alignItems: 'center',
              justifyContent: 'center',
              width: Dimensions.get('window').width * 0.1,
              height: 40,
              backgroundColor: 'firebrick',
            }}>
            <MaterialCommunityIcons
              name={'google'}
              style={{color: 'black'}}
              size={25}></MaterialCommunityIcons>
          </View>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: Dimensions.get('window').width * 0.7,
              height: 40,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                lineHeight: 32,
              }}>
              Log in with Google{' '}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
          }}>
          <Text style={{fontSize: 15, alignSelf: 'center'}}>
            Don't you have an account?
          </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')}>
            <Text style={{fontSize: 15, color: 'blue'}}> Sign up now!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default Login;
