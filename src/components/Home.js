import React, {useEffect} from 'react';
import {Text, View, BackHandler, Alert, AsyncStorage} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Home = props => {
  const asyncFunction = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        console.log(value);
      } else {
        console.log(value);
      }
    } catch (error) {}
  };

  useEffect(() => {
    asyncFunction();
    const backAction = () => {
      Alert.alert('Wait', 'Are you sure you want to go back?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        padding: 30,
      }}>
      <Text style={{color: 'purple', fontSize: 40, alignSelf: 'center'}}>
        Home Screen
      </Text>
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
          onPress={() => props.navigation.navigate('Profile')}></Icon>
        <AntDesign
          name={'setting'}
          style={{color: 'black'}}
          size={60}
          onPress={() => props.navigation.navigate('Settings')}></AntDesign>
      </View>
    </View>
  );
};
export default Home;
