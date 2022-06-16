import React,{Component} from "react";
import {View, Text, Button} from "react-native"

export default class MyCumponent3 extends Component{
    render(){
        return(
            <View style={{margin:8}}>
                <Text>여기는 컴포넌트 3번</Text>

                {/*  개발자들의 이벤트, 속성의 명명하는 법 */}
                {/* 이미 정해져있는 onPress , Title 등으로 하면, 쓰는 사람 입장에서도 자연스럽게 씀.  */}
                <Button title={this.props.btnTitle} onPress={this.props.onPress}></Button>
            </View>

            
        )
    }
}