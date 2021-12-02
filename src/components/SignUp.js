import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
  Image,
  Dimensions,
} from 'react-native';
import Axios from 'axios';
import Octicons from 'react-native-vector-icons/Octicons';

const SignUp = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

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
    if (email) {
      if (
        email &&
        email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
      ) {
        setEmailError(false);
      } else {
        setEmailError(true);
      }
    }
  }, [email]);

  const signUpNow = async () => {
    try {
      if (
        email &&
        email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
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
      if (!passwordError && !emailError) {
        const registeredData = await Axios.post(
          'https://reqres.in/api/register',
          {
            email: email,
            password: password,
          },
        );
        if (registeredData.data.token) {
          alert('Registered successfully, Login now');
          props.navigation.navigate('Login');
        } else {
          alert(' else Something went wrong');
        }
      }
    } catch (e) {
      console.log(e.response, e.request);
      alert(e.response.data.error);
    }
  };

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blueviolet',
        flex: 1,
      }}>
      <Text
        style={{
          marginBottom: 10,
          fontSize: 40,
          color: 'white',
          alignSelf: 'center',
        }}>
        Sign up
      </Text>
      <Text style={{fontSize: 20, marginBottom: 40, color: 'white'}}>
        Create a new account
      </Text>

      <View
        style={{
          backgroundColor: 'white',
          width: Dimensions.get('window').width * 0.9,
          paddingVertical: 40,
          borderRadius: 20,
        }}>
        <View
          style={{
            borderColor: 'black',
            alignSelf: 'center',
            borderRadius: 5,
            borderWidth: 1,
            marginTop: 20,
            flexDirection: 'row',
            height: 40,
            width: Dimensions.get('window').width * 0.8,
          }}>
          <View
            style={{
              alignItems: 'center',
              height: 40,
              width: 40,
              justifyContent: 'center',
              borderRightWidth: 1,
            }}>
            <Image
              style={{
                height: 30,
                width: Dimensions.get('window').width * 0.08,
              }}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/1077/1077071.png',
              }}></Image>
          </View>
          <TextInput
            style={{height: 40, width: 280}}
            onChangeText={email => setEmail(email)}
            placeholder={'Email address'}
          />
        </View>
        {emailError ? (
          <Text style={{color: 'red', alignSelf: 'center'}}>
            Invalid Email Address
          </Text>
        ) : null}

        <View
          style={{
            borderWidth: 1,
            borderColor: 'black',
            marginTop: 20,
            flexDirection: 'row',
            height: 40,
            width: Dimensions.get('window').width * 0.8,
            alignSelf: 'center',
            borderRadius: 5,
          }}>
          <View
            style={{
              height: 40,
              width: Dimensions.get('window').width * 0.1,
              borderStartColor: 'black',
              borderRightWidth: 1,
              alignSelf: 'center',
              justifyContent: 'center',
            }}>
            <Icon name={'key'} size={25} style={{color: 'black'}}></Icon>
          </View>
          <TextInput
            style={{width: Dimensions.get('window').width * 0.55}}
            secureTextEntry={passwordShown ? false : true}
            onChangeText={password => setPassword(password)}
            placeholder={'Create Password'}
          />
          <View
            style={{
              width: Dimensions.get('window').width * 0.1,
              height: 40,
              borderRightColor: 'black',
              alignItems: 'flex-end',
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
            marginTop: 20,
            justifyContent: 'center',
          }}>
          <Text style={{color: 'black', fontSize: 15}}>
            Already have an account?
          </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
            <Text style={{fontSize: 15, color: 'blue'}}> Sign in now!</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginTop: 20}}>
        <TouchableOpacity
          disabled={!email || !password || emailError || passwordError}
          style={{
            backgroundColor:
              !email || !password || emailError || passwordError
                ? 'grey'
                : 'white',
            height: 40,
            width: Dimensions.get('window').width * 0.8,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
          }}
          onPress={() => signUpNow()}>
          <Text style={{color: 'blueviolet', fontSize: 20}}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SignUp;
