import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from '../screens/SignUp';
import Login from '../screens/Login';
import UserHome from '../screens/User Screens/UserHome';
import AdminHome from '../screens/Admin Screens/AdminHome';
import AddPizza from '../screens/Admin Screens/AddPizza';
import Orders from '../screens/Admin Screens/Orders';
import styles from './Styles';

import Available from '../screens/Admin Screens/Available';

import UserSpalsh from '../screens/User Screens/userSpalsh';
import UserOrders from '../screens/User Screens/userOrders';
import OrderSecond from '../screens/User Screens/OrderSecond';

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="UserSpalsh"
          component={UserSpalsh}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="AdminHome"
          component={AdminHome}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="userHome"
          component={UserHome}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="SignUp"
          component={SignUp}
        />
        <Stack.Screen
          options={{
            title: 'Add Pizza',
            headerStyle: {
              backgroundColor: styles._dark,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          name="AddPizza"
          component={AddPizza}
        />
        <Stack.Screen
          options={{
            title: 'Orders',
            headerStyle: {
              backgroundColor: styles._dark,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          name="Orders"
          component={Orders}
        />

        <Stack.Screen
          options={{
            title: 'Available',
            headerStyle: {
              backgroundColor: styles._dark,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          name="Available"
          component={Available}
        />
        <Stack.Screen
          options={{
            title: 'User Orders',
            headerStyle: {
              backgroundColor: styles._dark,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          name="UserOrders"
          component={UserOrders}
        />
        <Stack.Screen
          options={{
            title: 'Confirm Orders',
            headerStyle: {
              backgroundColor: styles._dark,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          name="OrderSecond"
          component={OrderSecond}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
