import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

// screense
import Register from '../screens/Register';

const AuthStack = createStackNavigator();

const AuthStackNavigator = () =>{
    return(
        <AuthStack.Navigator initialRouteName='Register' >
            <AuthStack.Screen  name='RegisterScreen' component={Register} />
        </AuthStack.Navigator>
    )
}

export default AuthStackNavigator;