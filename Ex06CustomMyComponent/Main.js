import React , {Component} from "react";
import { Text, View, StyleSheet, Button  } from "react-native";

export default class Main extends Component {

    //  RN 의 대표 키워드 3가지
    // 1. Component
    // 2. State
    // 3. Props

    render(){
        return(
            <View style={style.root}>
                <Text style={style.text}>Hello world</Text>

                {/*  개발자가 만든 Custom Componenet 를 사용해보기 */}
                <MyCumponent></MyCumponent>
                <MyCumponent></MyCumponent>

                {/* 컴포넌트를 재사용하는ㄴ 것은 펴하지만 한상 같은 글씨로보임 ㅠ state로는 해결 불가. */}
                {/* 그래서 Custom Component 를 사용할 때 보여주고 싶은 값을 속성으로 전달해보기.  */}
                {/*  EX . Button의 Title 속성에 전달하는 값을 바꺼서 보여주기. */}

                <MyCumponent2 aaa="버튼의 타이틀처럼" btnTitle = "확인" color="indigo"></MyCumponent2>
                <MyCumponent2 aaa="나만의 식별자로 값전달" btnTitle = "취소" color="green" ></MyCumponent2>



            </View>
        )
    }


}// Main

// 사용자 정의 컴포넌트 클래스
class MyCumponent extends Component{
    render(){
        return(
            <View style={{margin:16, }}>
                <Text>여기는 나만의 컴포넌트</Text>
                <Button title="Click me"></Button>
            </View>
        )
    }
}

// 사용자 정의 컴포넌트 클래스 ( 속성 값을 전달받는 !!!)
class MyCumponent2 extends Component{
    render(){
        return(
            <View style={{margin:16, }}>
                {/* MyCumponent2를 사용할 때, 설정하는 속성 [ Props : 프로퍼티 ] 중 
                    aaa 라는 식별하는 컴포넌트 클래스 안에 아주 특별한 변수
                    맴버변수 [ props ] 에 자동으로 속성명의 맴버로 저장되어 있음 */}

                    {/*  자바의 static 변수를 생각 ㄱㄱ */}
                    {/* static 안에 ! -> state ,  props 객체가 있음. */}
                    {/*  안에 있는 두 객체 다 값의 변화에 따라 자동으로 바뀌는 특변한 녀석들임.  */}
                <Text>속성값을 받는 나만의 커스텀 컴포넌트</Text>
                <Text> props :   {this.props.aaa}</Text>
                <Button color={this.props.color} title={this.props.btnTitle}></Button>
            </View>
        )
    }
}

const style = StyleSheet.create({
    root:{flex:1},
    text:{ color: 'black'},
    
})