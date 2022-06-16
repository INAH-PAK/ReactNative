import React,{Component} from "react";
import {View, Text, Button} from "react-native"

export default class MyCumponent4 extends Component{

        // Props 가 전달되지 않았을 때 전달되기 위한, [ defualtProps ]
        static defaultProps = {
            title:'unTitled',
            color:'orange',
            omPress:()=>{}
        }


    render(){
        return(
            <View style={{margin:8}}>
                <Text>여기는 컴포넌트 4번</Text>
                <Button title={this.props.btnTitle} onPress={this.props.onPress} color={this.props.color}></Button>
            </View>
            )
    }
}