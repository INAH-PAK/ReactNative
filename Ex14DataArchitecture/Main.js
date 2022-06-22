//  RN의 데이터 흐름은 단방향으로 이루어짐 ( 부모 컴포넌트가 자식-자손들에게 데이터를 전달하는 식식)
// 그래서 만약 계층구조가 많으면 데이터를 전달-전달-전달-전달-전달-전달 해야 함 !
// 또한 자식 컴포넌트는 부모쪽으로 데이터를 보냉 수 없음.
//  또한 자식컴포넌트끼리도 데이터를 서로 주고 받을 수 없음.

// 계츨 구조가 적으면 좋은 방법임.-> 데이터의 관리가 쉬움
// 하지만, 계층구조가 많으면 많아 질 수록, 전달이 많아져서 번거로움 . 
//  그래서 Flux 라고 불려지는 아키텍쳐 패턴을 만들었음.
// 간단하게 말하면, 전역변수 영역을 따로 만들고, 어디서든 이 변수들을 사용하도록 하는 기법
// 긍까 메인에 두지 않고 외부에 아예 store라는 영역을 두자 !
// 이를 가장 잘 구현한 라이브러리 => 리덕스 (Redux) 임.
// 근데 너무 어려워서 RN팀에서 Flux 패턴ㅇㄹ 구현할 수 있는 API를 제공 함.
// 이를 [Context API] 라고 불리움

import React,{Component} from "react";
import { View, Text, Button } from "react-native";

export default class Main extends Component{

    state={ data:"Hello"}

    changeData = ()=>{
        this.setState({data:'Good'})
    }

    render(){
        return(
            <View style={{flex:1}}>
                <Text>Main : {this.state.data}</Text>

                {/* 자식 컴포넌트에게 data전달 */}
                <First data = {this.state.data} onPress={{this.changeData}}></First>

            </View>
        )
    }
}

class First extends Component{
    render(){
        return(
            <View style={{backgroundColor:'yellow',padding:8}}>

                {/* this.props 라는 변수에 저장된 데이타 */}
                <Text>First : {this.props.data}</Text>
                {/* 전달받은 데이터를 손주에게 전달 */}
                <Third data = {this.props.data} onPress={this.props.onPress}></Third>
            </View>
        )
    }
    
}

// 함수형 컴포넌트 -> state , props , life cycle 메소드가 없음
const Third = (props)=>{
    return(
        <View style={{backgroundColor:'red'}}>
            {/*  전달받은 props 보여주기 */}
            {/*  파라미터에 전달받은 속성 데이터  */}
            <Text > Third : {props.data}</Text>
            <Button title ='글씨 변경' onPress={()=>{props.onPress}}></Button>

        </View>
    )
}