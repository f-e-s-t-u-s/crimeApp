import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

// screense
import Register from '../screens/Register';
import Login from '../screens/Login';

const AuthStack = createStackNavigator();

const AuthStackNavigator = () =>{
    return(
        <AuthStack.Navigator initialRouteName='Register' >
            <AuthStack.Screen  name='RegisterScreen' component={Register} />
            <AuthStack.Screen name='LoginScreen' component={Login} />
        </AuthStack.Navigator>
    )
}

export default AuthStackNavigator;