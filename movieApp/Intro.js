import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'
import { Button, View, Text, StyleSheet, ActivityIndicator } from 'react-native'

//로그인정보가 저장되어 있는지 확인 후에 로그인화면 또는 메인화면 으로 이동하는 역할만 하는 컴포넌트
//단순하게 함수형컴포넌트로 제작

// 화면전환 기능을 가진 navigation 이라는 객체가 props로 전달되어 오지만
// 함수형컴포넌트 props라는 멤버변수가 없기에 함수 파라미터로 전달되어 옴
const Intro= (props)=>{

    // Async Storage에 저장되어 있는 사용자의 로그인 정보를 확인하기 : 가죠온 정보가 then의 파라미터로 전달됨.
    AsyncStorage.getItem('email').then((value)=>{
        alert(value )
        if(value == null || value == "") props.navigation.replace('LoginNav')
        else props.navigation.replace('MainDrawerNav')
      })

    return (
        <View style={style.root}>
            <Text>INTRO</Text>
            {/* 로그인 정보를읽어오는 시간이 소요될 수 있기 때문에, 로딩 Component 배치 */}
            <ActivityIndicator size="large" color="indigo"></ActivityIndicator>
        </View>
    )
}

const style= StyleSheet.create({
    root: {flex:1, justifyContent:'center', alignItems:'center'},
})

export default Intro