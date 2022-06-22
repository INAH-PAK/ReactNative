import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

//사용할 스크린 컴포넌트들 import
import Login from '../screens_login/Login'
import SignUp from '../screens_login/SignUp'
import ResetPW from '../screens_login/ResetPW'

//Stack Navigator 객체 생성
const Stack= createStackNavigator()

// 단순 Navigator 컴포넌트 이기에 함수형 컴포넌트로 제작
const LoginNav= ()=>{
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='Login' component={Login}></Stack.Screen>
            <Stack.Screen name='SignUp' component={SignUp}></Stack.Screen>
            <Stack.Screen name='ResetPW' component={ResetPW}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default LoginNav