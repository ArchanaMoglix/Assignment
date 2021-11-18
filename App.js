import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/components/Login';
import SignUp from './src/components/SignUp';
import Home from './src/components/Home';
import {View, Text} from 'react-native';
import User from './src/components/User';
import Settings from './src/components/Settings';

const Stack = createNativeStackNavigator();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        {!isLoggedIn ? (
          <Stack.Navigator>
            <Stack.Screen
              initialParams={{setIsLoggedIn}}
              name="Login"
              component={Login}
              options={{headerShown: false}}></Stack.Screen>
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{headerShown: false}}></Stack.Screen>
          </Stack.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{headerShown: false}}></Stack.Screen>
            <Stack.Screen
              initialParams={{setIsLoggedIn}}
              name="User"
              component={User}
              options={{headerShown: false}}></Stack.Screen>
            <Stack.Screen
              name="Settings"
              component={Settings}
              options={{headerShown: false}}></Stack.Screen>
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </View>
  );
};

export default App;
