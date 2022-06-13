// Componant -> rander() 메소드라는 시스템은 react 라는 라이브러리에서 비롯되어있음,
// react 라이브러리에 존재하는 Component class 를 사용하기 위해 import
import React from "react";
import { Component } from "react"; //react.js js 생략 가능해서 저렇게 쓴고임
import { Text } from "react-native";

// RN(React Native) 에서는 반드시 Componant를 상속 한 클래스만 화면에 보일 수 있음.
class MyApp extends Component{

    // 리액트의 Componant 클래스가 화면에 보여줄 뷰를 그려내는 작업 메소드 -> 액티비티가 온 크리에이트 뷰 같은 느낌
    render(){ // 오버라이드 상황임,
        // 이 메소드에서 리턴 한 컴포넌트가 화면에 보여짐.
        return <Text>Hello World!</Text>
    }

}

//다른 문서 index.js 에서 MyApp class를 사용 하려면 ( import 하려면) 
// 반드시 !!!! MyApp에서 export 해야 함 !!
// 하나의 js 문서에서 export는 여러개 할 수 있지만,
// 그 중에 반드시 하나는 export defualt 여야만 함.
export default MyApp