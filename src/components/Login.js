import {placeholder} from '@babel/types';
import React, {useState, useEffect} from 'react';
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
import Icon from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Axios from 'axios';

const Login = props => {
  // const [name,setName] = useState("Nikita Sharma")
  // console.log(name)
  // return <View style={{backgroundColor:"yellow",flex:1}}>
  //   <Text style={{color:"red"}}>{name}</Text>
  // <TouchableOpacity style={{backgroundColor:"blue", padding:20}}
  //   onPress={()=>setName(name == "Archana Sharma" ? "Nikita Sharma" : "Archana Sharma")}><Text>Change Name</Text></TouchableOpacity>
  // </View>

  // const [counter,setCounter]=useState(0)
  // console.log(counter)
  // return <View style={{backgroundColor:"yellow",flex:1}}>
  //   <Text style={{colour:"blue"}}>{counter}</Text>
  //   <TouchableOpacity style={{backgroundColor:"pink",padding:10}}
  //   onPress={()=>setCounter(counter+1)}><Text>Increment the counter</Text></TouchableOpacity>
  //   <TouchableOpacity style={{backgroundColor:"red",padding:10}}
  //   onPress={()=>setCounter(counter-1)}><Text>Decrement th counter</Text></TouchableOpacity>
  // </View>
  // }

  // return <View >
  //   <Text style={{color:"blue"}}>{counter}</Text>
  //   <TextInput style={{borderWidth:1,borderColor:"green",padding:8,width:200}}
  //              onChangeText={(text)=>setCounter(text)}></TextInput>
  //   </View>

  // return <View style={style.container}>
  //   <Text style={{color:"white"}}> Welcome to my Blog! </Text>
  // </View>
  // }
  // const style=StyleSheet.create({
  //   container: {
  //     flex: 2,
  //     alighItems: "center",
  //     backgroundColor:"red",
  // }
  // })

  // return <View style={{flexDirection:"row",flex:1,backgroundColor:"pink",justifyContent:"center",alignItems:"center"}}>
  //   <View style={{height:50,width:50,backgroundColor:"blue"}}></View>
  //   <View style={{height:50,width:50,backgroundColor:"yellow"}}></View>
  // </View>
  // console.log('Login screen visible');

  const [username, setUsername] = useState('');
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
        props.route.params.setIsLoggedIn(true);
        // props.navigation.navigate('Home');
      } else {
        alert('Something went wrong');
      }
    } catch (e) {
      alert('Something went wrong');
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
              width: 40,
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
          {/* <Text>Keep me signed</Text> */}
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: 'blueviolet',
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
        <Text
          style={{
            marginTop: 10,
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 20,
          }}>
          ------------------------- or -------------------------
        </Text>

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
