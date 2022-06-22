import React, {Component} from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'


//재사용할 컴포넌트 import
import InputComponent from '../Components/InputComponent'

import AsyncStorage from '@react-native-async-storage/async-storage'


export default class Login extends Component{
    render(){
        return (
            <View style={style.root}>
                {/* 크게 2개 영역으로 구성 : 로그인 콘텐츠영역, 아래쪽의 앱이름 표시영역 */}
                {/* 1. 로그인 콘텐츠 영역 */}
                <View style={style.content}>
                    {/* 1.1 로고 */}
                    <Text style={style.logo}>MOVIE APP</Text>

                    {/* 1.2 이메일/비밀번호 입력박스 */}
                    {/* TextInput은 로그인,회원가입,비밀번호리셋화면에 모두 사용되므로 사용빈도가 높음. 이를 일일이 스타일 하기 번거로우므로 별도의 CustomComponent로 제작하여 재사용 */}
                    <InputComponent onChangeText={this.onChangeText} secureTextEntry={false} placeholder='이메일'></InputComponent>
                    <InputComponent secureTextEntry={true} placeholder='비밀번호'></InputComponent>

                    {/* 1.3 비밀번호 재설정 : Text컴포넌트는 onPress 동작함 */}
                    <Text style={style.resetPW} onPress={ ()=>this.props.navigation.navigate('ResetPW') }>비밀번호 재설정</Text>

                    {/* 1.4 로그인버튼 */}
                    <View style={{width:'100%', marginBottom:32}}>
                        <Button title='로그인' color='#3796EF' onPress={this.login}></Button>
                    </View>

                    {/* 1.5 회원가입 */}
                    <Text style={style.signup}>
                        계정이 없으신가요? <Text style={style.signupLink} onPress={()=>this.props.navigation.navigate('SignUp')}>가입하기</Text>
                    </Text>


                </View>

                {/* 2. footer영역 */}
                <View style={style.footer}>
                    <Text style={style.footerCopyright}>MovieApp by mrhi</Text>
                </View>

            </View>
        )
    }


    // 입력된 이메일글씨를 저장할 맴버변수
    email = ""
    // " 이메일 " 입력 InputComponent에 전달할 메소드
    onChangeText= (value) =>{
        // TextInput 글씨가 변경될 때 마다 글씨 변경
        this.email = value
       
    }


        
        
    login = () => { 
        //다음 접속할때 로그인을 또 요청하지 않도록 디바이스에
        // 로그인정보를저저장해 놓기 [ android SharedPreference와 비슷 ]
        // 동시 != 비동기 
        // 자바스크립트는 기본적으로 싱글스레드 언어
        // [ AsyncStorage - library ] 
        // https://reactnative.dev/docs/asyncstorage -> https://github.com/react-native-async-storage/async-storage

        // =======a 여긴 그냥 잡담 a============================
        // 프로세스 간의 정보 공유는 가능하지 않음 !!!!!! -> 이걸 보안하기 위한 ajax !!!!

        // Ajax   : Async Java And Xml (Xml보다 요즘엔 json로 데이터 받아오지만, )
        // Worker : 자바스크립는 싱글스레드 언어 이므로,  스레드가 없으므고 이걸 극복하기 위해 만든 스레드.
        //        : 그리고 스레드는 무거워서 프로세스 낭비가 많음 -> 이걸 극복하기 위한 코루틴 (corutine : 싱글 스레드 안에서 여러 작업 수행하는 언어)
        // ===========================================

        // 그리고 비동기작업 이므로 , 저장이 완료되기 전에 아래 화면전환코드가 실행될 수 있음
        // 그렇기에 저장이 완료되는 것을 듣고 다음코드로 화면전환이 이루어지도록 해야 함.
        // 이때 사용하는 기법을 JS에서는 [ promiss ] 라고 부름.
        // 이 promiss 를 위해 만들어진 메소드 =>  [ then() ] - 작업 완료시, 파라미터로 지정한 함수 자동 실행. ( like  콜백 !)
        AsyncStorage.setItem('email',this.email).then(function () {
            alert('로그인 저장 완료')
        })

        // 로그인 되었으니 앱의 메인화면인 MovieList 화면을 가진 drawerNav로 이동
        // this.props.navigation.navigate('MainDrawerNav')
        
        
        // 근데 화면 전환시, 현재 Login화면은 필요 없으므로, finish 하기 위해, .replace() 메소드로 전환
        this.props.navigation.replace('MainDrawerNav')



    }



}

const style= StyleSheet.create({
    root:{flex:1, backgroundColor:'#FEFFFF'},
    content:{
        flex:1, // footer 영역을 제외한 모든 공간 사용
        justifyContent:'center',
        alignItems:'center',
        padding: 32,
    },
    footer:{
        borderTopWidth: 1,
        borderTopColor: '#D3D3D3',
        padding:8,
    },
    footerCopyright:{
        color: '#929292',
        textAlign:'center'
    },
    logo:{
        color:'#292929',
        fontSize:40,
        fontWeight:'bold',
        marginBottom:32,
    },
    resetPW:{
        width:'100%',
        textAlign:'right',
        color:'#3796EF',
        marginTop:8,
        marginBottom:16,
        marginRight:8,
    },
    signup:{
        color:'#929292',
        textAlign:'center',
    },
    signupLink:{
        color:'#3796EF',
    }
})

