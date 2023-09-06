import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

// screense
import Register from '../screens/auth/Register';
import Login from '../screens/auth//Login';

const AuthStack = createStackNavigator();

const AuthStackNavigator = () =>{
    return(
        <AuthStack.Navigator initialRouteName='Login' >
            <AuthStack.Screen  name='Register' component={Register} />
            <AuthStack.Screen name='Login' component={Login} />
        </AuthStack.Navigator>
    )
}

export default AuthStackNavigator;