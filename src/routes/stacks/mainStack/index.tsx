import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { ROUTES } from '@utils/routes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '@screens/splash/Splash';
import Login from '@screens/auth/login/Login';
import SignUp from '@screens/auth/signUp/SignUp';
import ForgotPassword from '@screens/auth/forgotPassword/ForgotPassword';

const {
    splash,
    signUp,
    login,
    forgotPassword
} = ROUTES

const Stack = createNativeStackNavigator();
const MainStack = () => {
    return (
        <>
            <StatusBar
                barStyle={'dark-content'}
                translucent
                backgroundColor='transparent'
            />
            <Stack.Navigator
                screenOptions={{ headerShown: false, animation: 'fade_from_bottom' }}

            >
                <Stack.Screen name={splash} component={Splash} />
                <Stack.Screen name={login} component={Login} />
                <Stack.Screen name={signUp} component={SignUp} />
                <Stack.Screen name={forgotPassword} component={ForgotPassword} />

                
            </Stack.Navigator>
        </>
    )
}

export default MainStack