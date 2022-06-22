import React , {Component} from 'react'
import {View, StyleSheet,Text, TouchableOpacity, Image} from 'react-native'
import { Header } from 'react-native/Libraries/NewAppScreen'

import AsyncStorage from '@react-native-async-storage/async-storage'


export default class MovieList extends Component{
    render(){
        return(
            <View style={style.root}>
                <Text>Movie List</Text>
            </View>
        )
    }

// render() 실행 후 컴포넌트가 장착되면 자동으로 발동하는 라이프사이클메소드
    componentDidMount(){
        // 제목에에 [ 햄버거 메뉴 아이콘 ], [로그아웃] 메뉴 버튼 배치 + 타이틀 중앙정렬
        // 컴포넌트가 자동으로 마운트 될 때 오는 애 navigation
        this.props.navigation.setOptions({
            // 1. 가운데 정렬
            headerTitleAlign:'center',
            // 2. 오른쪽에 리스트 아이콘 배치
           
            headerLeft:()=>{
                return(
                    <TouchableOpacity onPress={()=>this.props.navigation.toggleDrawer()} style={{marginRight:16}}>
                        <Image source={require('../images/ic_menu.png')}></Image>
                    </TouchableOpacity>
                )},
            headerRight: ()=> (
                <TouchableOpacity
                    style={{flexDirection:'row', marginRight:16,}}
                    onPress={async()=>{
                        //로그아웃이므로 AsynsStorage에 저장된 로그인정보 'email' 제거
                        // AsyncStorage.setItem('email',"") // 내가 로그인 조건은 ""으로 물어봤었응께
                        // AsyncStorage.setItem('email',"").then(()=>{})
                        // promiss 문법의 .then() 메소드 호출 했었지만, 문법이 다소 지저분해서 다소 
                        //ES6(에코마스트 식스 코드) 말구
                        //ES7 에서 등장한 async-await 문법 등장 !(안드로이드의 Syncronize랑 같음 ! 비동기를 동기로 바꿔버리거거)
                        AsyncStorage.removeItem('email') // 반드시 !!! async() 라고 위에 써야 함 !!!!!!

                        // 그리고, 로그아웃되면 자동으로 인트로 화면으로 화면 화환
                        await this.onPress.navigation.replace('Intro')
                    }}>
                        <Image source={require('../images/tabs/ic_profile.png')}></Image>
                        <Text>로그아웃</Text>
                </TouchableOpacity>
            )


            

        })
    }
}

const style = StyleSheet.create({
    root:{flex:1}
})