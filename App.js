import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/components/Login';
import SignUp from './src/components/SignUp';
import Home from './src/components/Home';
import {View, Text} from 'react-native';
import Profile from './src/components/Profile';
import List from './src/components/List';
import Blog from './src/components/Blog';
import AboutUs from './src/components/AboutUs';
import Settings from './src/components/Settings';
import DrawerComponent from './src/components/DrawerComponent';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

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
          <Drawer.Navigator
            screenOptions={{drawerStyle: {width: 300}}}
            drawerContent={props => (
              <DrawerComponent {...props} setIsLoggedIn={setIsLoggedIn} />
            )}>
            {/* <Stack.Navigator> */}
            {/* <Stack.Screen */}
            <Drawer.Screen
              name="Home"
              component={Home}
              options={{headerShown: false}}></Drawer.Screen>
            <Drawer.Screen
              // <Stack.Screen
              initialParams={{setIsLoggedIn}}
              name="Profile"
              component={Profile}
              options={{headerShown: false}}></Drawer.Screen>
            <Drawer.Screen
              // <Stack.Screen
              name="Settings"
              component={Settings}
              options={{headerShown: false}}></Drawer.Screen>
            {/* </Stack.Navigator> */}
            <Drawer.Screen
              name="List"
              component={List}
              options={{headerShown: false}}></Drawer.Screen>
            <Drawer.Screen
              name="Blog"
              component={Blog}
              options={{headerShown: false}}></Drawer.Screen>
            <Drawer.Screen
              name="AboutUs"
              component={AboutUs}
              options={{headerShown: false}}></Drawer.Screen>
          </Drawer.Navigator>
        )}
      </NavigationContainer>
    </View>
  );
};

export default App;
