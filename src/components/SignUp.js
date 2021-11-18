import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import Axios from 'axios';
import Octicons from 'react-native-vector-icons/Octicons';

const SignUp = props => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(0);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [secureEntry, setSecureEntry] = useState(true);
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
        console.log(registeredData);
        if (registeredData.data.token) {
          props.navigation.navigate('Login');
        } else {
          alert(' else Something went wrong');
        }
      }
    } catch (e) {
      alert(e);
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
        {/* <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            height: 45,
            width: Dimensions.get('window').width * 0.8,
            borderWidth: 1,
            borderColor: 'black',
            marginTop: 20,
            borderRadius: 5,
          }}>
          <View style={{borderRightWidth: 1}}>
            <Image
              style={{
                alignSelf: 'center',
                justifyContent: 'center',
                height: 40,
                width: Dimensions.get('window').width * 0.1,
              }}
              source={{
                uri: 'https://as2.ftcdn.net/v2/jpg/00/65/77/27/1000_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg',
              }}></Image>
          </View>
          <TextInput
            style={{height: 40, width: 280}}
            onChangeText={fullname => setFullname(fullname)}
            placeholder={'Full Name'}
          />
        </View> */}

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

        {/* <View
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
            <MaterialCommunityIcons
              // type={'MaterialCommunityIcons'}
              name={'cellphone'}
              style={{color: 'black'}}
              size={30}></MaterialCommunityIcons>
          </View>
          <TextInput
            style={{height: 40, width: 280}}
            onChangeText={phone => setPhone(phone)}
            placeholder={'Phone Number'}
          />
        </View> */}

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
            {/* <Image
              style={{height: 35, width: 35, alignSelf: 'center'}}
              source={{
                uri: 'https://as2.ftcdn.net/v2/jpg/03/12/57/97/1000_F_312579728_JztO9YzcpOwnjuPpnh7i3pxfH1HDbX2l.jpg',
              }}></Image> */}
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

        {/* <View
          style={{
            borderWidth: 1,
            borderColor: 'black',
            marginTop: 20,
            flexDirection: 'row',
            height: 45,
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
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon
              // type={'AntDesign'}
              style={{color: 'black'}}
              name={'key'}
              size={25}></Icon>
          </View>
          <TextInput
            secureTextEntry={true}
            onChangeText={confirmPassword =>
              setConfirmPassword(confirmPassword)
            }
            placeholder={'Confirm Password'}></TextInput>
        </View> */}
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
          style={{
            backgroundColor: 'white',
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
