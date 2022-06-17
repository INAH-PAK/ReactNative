import React ,{ Component }  from "react";
import {StyleSheet, View, Text} from "react-native";


export default class Main extends Component{
    render(){
        return(
            <View style={style.root}>
                <Text style={style.text}>Ex10FuntionalComponent</Text>

                    {/* 새로운 Custom Component 를 만드는 새로운 방법 */}
                    {/* 1. class Component : Component class 를 상속해서 만드는 일반적인 컴포넌트  */}
                    {/* 2. funtional Component : 마치 익명함수를 만드는 방식처럼 만들어진 컴포넌트  */}


            </View>
        )
    }
}

const style = StyleSheet.create({
    root:{
        flex:1,
        padding:16,
    },
    text:{
        fontSize:24,
        margin:8, padding:8,
    }
})