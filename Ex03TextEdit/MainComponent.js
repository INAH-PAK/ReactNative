import React,{Component} from 'react';
import {View , Text, Button, TextInput, StyleSheet } from 'react-native';

export default class MainComponent extends Component{ // 만들면서 익스포트 !

    //화면 갱신에 영향을 주는 특별한 변수
    state={
        text:"호홍",
        text2:"react-native",
        text3:"nice",

    }

    //TextInput의 글씨가 변경될 때 마다 저장하는 일반변수 !
    sss = ""

    render(){
        return (
        <View style={style.root}>
            <TextInput onChangeText={this.onChangeText} style={style.textInput} ></TextInput>
            <Text style={style.plainText}>{this.state.text}</Text>

            <View style={{marginTop : 40 }}></View>
            <TextInput onChangeText={this.onChangeText2} multiline={true} numberOfLines={4} style={style.textInput2} ></TextInput>
            <Button title='입력완료' onPress={this.clickBtn}></Button>
            <Text style={style.plainText}>{this.state.text2}</Text>

            <View style={{marginTop : 40 }}></View>
            <TextInput onSubmitEditing={this.submit} style={style.textInput2}></TextInput>
            <Text style={style.plainText}>{this.state.text3}</Text>

            {/* // 그냥 키패드의 완료만 넣기만 해도 사용자의 입력이 끝나는 걸 알 수 있음
            // onEndEditing 은 사용자가 취소했을때도 포함되는거라 이 상황에선 맞지 않음 !
            <TextInput onSubmitEditing={this.submit} style={style.textInput2} ></TextInput>
            <Text style={style.plainText}>{this.state.text3}</Text> */}

        </View>
        )
    }

    // onSubmitEditing은 파라미터로 글씨를 가진 이벤트 객체가 전달되어 옴.
    submit = submitEvent =>{
        let value = submitEvent.nativeEvent.text
        this.setState({text3:value})
    }

    // TextInput에 글씨가 변경될 때 마다 발동하는 메소드
    // 이 메소드의 파라미터로 변경된 글씨가 자동전달되어 옴.
    // 기본이 한 줄 입력. 엔터치면 그냥 자동 끝남. 
    onChangeText = msg =>{
        this.setState({text: msg})

    }

    onChangeText2 = msg =>{
        this.sss = msg // 일반변수이므로 화면갱신이 안됨.
    }
    
    clickBtn = ()=>{
        this.setState({text2:this.sss})
    }




}

const style = StyleSheet.create({
    root:{
        flex:1,
        padding:16,
    },
    textInput:{
        borderWidth:2,
        backgroundColor:'white',
        borderColor:'green',
        borderRadius:8,
        paddingLeft:16,
        paddingRight:16,
        height:40,

    },
    plainText:{
        color:'blue',
        marginTop:16,
        fontWeight: 'bold',

    },
    textInput2:{
        borderWidth:2,
        backgroundColor:'white',
        borderColor:'indigo',
        borderRadius:8,
        paddingLeft:16,
        paddingRight:16,
        marginBottom:16,
        maxHeight:200,

    },
})

