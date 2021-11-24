import React from 'react';
import {View, AsyncStorage} from 'react-native';

const Intermediary = props => {
  const asyncFunction = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        props.route.params.setIsLoggedIn(true);
      } else {
        props.navigation.navigate('Login');
      }
    } catch (error) {}
  };
  useEffect(() => {
    asyncFunction();
  }, []);
  return <View></View>;
};

export default Intermediary;
