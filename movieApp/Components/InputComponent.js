import React from 'react'
import {View, TextInput, StyleSheet} from 'react-native'

// 단순히 스타일링된 TextInpput을 만들면 되기에 별도의 state는 필요없음. 그렇기에 함수형컴포넌트로 제작
const InputComponent= (props)=>{ //전달된 속성들을 1개의 파라미터 객체로 전달받음
    return (
        <View style={style.container}>
            <TextInput
            // 요기의 글씨가 바뀔때마다 발동하는 메소드 onChangeText
                onChangeText={props.onChangeText}
                selectionColor='#929292'
                autoCapitalize='none'
                allowFontScaling={false}
                autoCorrect={false}
                placeholderTextColor='#c3c2c8'
                secureTextEntry={props.secureTextEntry}  //컴포넌트 사용하는 곳에서 지정된 property속성값 사용
                placeholder={props.placeholder}          //컴포넌트 사용하는 곳에서 지정된 property속성값 사용
                style={style.input}></TextInput>
        </View>
    )
}

const style= StyleSheet.create({
    container:{
        width:'100%',
        height:40,
        paddingLeft:16,
        paddingRight:16,
        borderWidth:1,
        borderColor: '#D3D3D3',
        borderRadius: 4,
        backgroundColor: '#FAFAFA',
        marginTop: 8,
        marginBottom:8,
    },
    input:{
        flex:1,
        color:'#292929',
    }
})

export default InputComponent