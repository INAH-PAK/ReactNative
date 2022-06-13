// Componant -> rander() 메소드라는 시스템은 react 라는 라이브러리에서 비롯되어있음,
// react 라이브러리에 존재하는 Component class 를 사용하기 위해 import
import React from "react";
import { Component } from "react"; //react.js js 생략 가능해서 저렇게 쓴고임
import { Button, Text, View } from "react-native";

// RN(React Native) 에서는 반드시 Componant를 상속 한 클래스만 화면에 보일 수 있음.
class MyApp extends Component{

    // 맴버변수

    // 리액트의 Componant 클래스가 화면에 보여줄 뷰를 그려내는 작업 메소드 -> 액티비티가 온 크리에이트 뷰 같은 느낌
    render(){ // 오버라이드 상황임,

        // name = "ss"  이렇게 함수 안에서 쓰면  전역변수
        let name = "sam"
        let btnTitle = "clicick Me ! " // 버튼에 ㅂ ㅗ여질 제목 글씨


        // 이 메소드에서 리턴 한 컴포넌트가 화면에 보여짐.
        // 애석하게 rander()의 리턴은 오직 하나 !
        // return <Text>Hello World!</Text>
        //        <Text>Nice to meet you</Text>

        // 여러 컴포넌트들을 묶는 컴포넌트 그룹이 필요. -> ViewGroup
        // 그룹 용으로 만들어진 컴포넌트 ==> View
        //jsx 언어의 특징은 -> js안에서 xml을 명시할 수 있고 , 
        // 반대로, xml에에서 js변수나 함수도 사용할 수 있음.(간단한 호출정도?)
        // xml의 영역 안에서 변수 / 함수 호출문을 사용하고 싶다면, {} 표시하면 됨.

        // 기본적으로 보여지는 스타일링은 CSS 를 모티브로 함.
        //단, 스타일을 CSS 문서로 적용하는 것이 아니라 !! 스타일값을 가진 
        // 객체를 만들어 속성으로 지정해서 적용함 !!
        return ( 
            <View style={rootView}>
                    {/* 이 영역은 javaScript */}
                <Text style={textStyle}>Hello world {name}! </Text>
                <Text style={plainText}>Nice To Meet You ! </Text>
                {/* Button은 스타일 작업 불가. style 속성이 없음. */}
                <Button title={btnTitle} style={btnStyle}></Button>

            </View>
        )


    }

} //MyApp Class

// CSS
// MyApp Class 가 보여주는 컴포넌트들의 스타일 값을 가진 객체 생성
// 1. 텍스트의 스타일작업 ( CSS 와 비슷한데 약간다음)
const textStyle = {
    color : 'red' ,
    fontSize : 20, // 기본 dp
    fontWeight : 'bold',
    margin : 16 
}

// 2. 전체 View 의 스타일 잣업
const rootView = {
    backgroundColor : '#AAFFCC',
    // View 의 기본 높이는 wrap 으로 됨.
    // height : 500, // 디바이스마다 다른 높이...
    //height : '100%' //이 방법도 있지만,RN의 권장 기법 사이즈
    // BN은 기본적으로 무조건 display속성이 flex!!!
    // 그리고 기본 flex 방향이 flex-dirextion 값이 column (수직)으로 되어 잇음,

    // flexDirection:'row'

    // flex의 속성중에서 다른 뷰와 비례적으로 사이즈를 경정하는 속성 값
    // 마치 android의 layout_weight 과 유사한 속성 값
    flex:1 , // flexGrow 
    padding:16
}

// 중간글씨 스타일
const plainText = {
    margin : 8,
    color : 'black'
}

// 버튼 스타일 객체
// Componant들 중에서 style이 안되는 것들도 있음. -> 나중에. . . 
const btnStyle = {
    marginTop: 40,
    backgroundColor : 'yellow'
}

//다른 문서 index.js 에서 MyApp class를 사용 하려면 ( import 하려면) 
// 반드시 !!!! MyApp에서 export 해야 함 !!
// 하나의 js 문서에서 export는 여러개 할 수 있지만,
// 그 중에 반드시 하나는 export defualt 여야만 함.
export default MyApp