import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/components/Login';
import SignUp from './src/components/SignUp';
import Home from './src/components/Home';
import {View} from 'react-native';
import Profile from './src/components/Profile';
import List from './src/components/List';
import Blog from './src/components/Blog';
import AboutUs from './src/components/AboutUs';
import Intermediary from './src/components/Intermediary';
import Settings from './src/components/Settings';
import DrawerComponent from './src/components/DrawerComponent';
import store from './src/redux/store';
import {Provider} from 'react-redux';
import MyCart from './src/components/MyCart';

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
              name="Intermediary"
              component={Intermediary}
              options={{headerShown: false}}></Stack.Screen>
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
          <Provider store={store}>
            <Drawer.Navigator
              screenOptions={{drawerStyle: {width: 300}}}
              drawerContent={props => (
                <DrawerComponent {...props} setIsLoggedIn={setIsLoggedIn} />
              )}>
              <Drawer.Screen
                name="Home"
                component={Home}
                options={{headerShown: false}}></Drawer.Screen>
              <Drawer.Screen
                initialParams={{setIsLoggedIn}}
                name="Profile"
                component={Profile}
                options={{headerShown: false}}></Drawer.Screen>
              <Drawer.Screen
                name="Settings"
                component={Settings}
                options={{headerShown: false}}></Drawer.Screen>
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
              <Drawer.Screen
                name="MyCart"
                component={MyCart}
                options={{headerShown: false}}></Drawer.Screen>
            </Drawer.Navigator>
          </Provider>
        )}
      </NavigationContainer>
    </View>
  );
};

export default App;
