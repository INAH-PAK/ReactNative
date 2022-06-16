import React , {Component} from "react";
import { Text, View, StyleSheet, Button, Alert  } from "react-native";
import ComponenetA from "./ComponentA";
import MyCumponent3 from "./MyComponent3";
import MyCumponent4 from "./MyComponent4";
import MyCumponent5 from "./MyComponent5";

export default class Main extends Component {

    //  RN 의 대표 키워드 3가지
    // 1. Component
    // 2. State
    // 3. Props

            // Props 가 전달되지 않았을 때 전달되기 위한, [ defualtProps ]
            static defaultProps = {
                title:'unTitled',
                color:'orange',
                omPress:()=>{}
            }

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

                {/* 별도의 JS 파일로 만들어도 가능. */}
                {/* 속성으로 값 전달 말고, 함수도 전달 가능 */}
                <MyCumponent3 btnTitle="컴포넌트3 버튼" onPress = {this.clickBtn}></MyCumponent3>

                {/* 만약, 속성값 중 일부를 전달하지 않으면???? */}
                {/* <MyCumponent3></MyCumponent3>  => 필수 속성이 하나도 않았으므로 ERROR !!! */}

                {/*  속성값 중 일부만 전달 할 경우 ??? => 때에따라 ERROR !!! ( 필수 여부에 따라 에러여부 달라짐 !) */}
                <MyCumponent3 btnTitle="컴포넌트3 버튼"></MyCumponent3>

                {/* 이럴 경우 */}
                {/* 필수 속성값이 전달되지 않았을 경우, 기본값이 전달되는 컴포넌트  */}
                <MyCumponent4></MyCumponent4>

                {/* 여러개의 속성값이 전잘될 때, 조금 쉽게 이 props 를 적용ㅎ는 방법 [ ... ] */}
                <MyCumponent5 title="bbb"></MyCumponent5>
                <MyCumponent5 title="ccc" color="black"></MyCumponent5>

                {/* 개별 컴포넌트 끼리 요소를 찾는것 자체가 불가.  */}
                {/* 배치상의 부모 컴포넌트가 자식 컴포넌트들의 통신을 대신 수행해줌 ! */}
                <ComponenetA message={this.state.msg}></ComponenetA>
                <ComponenetB onPress={this.changeText}></ComponenetB>


            </View>

        )
    }

        state = {
            msg: "Hello"
        }

        changeText = () =>{
            this.setState({msg:"nice to meet you"})
        }

            // 커스텀 컴포넌트 쪽으로 전달 할 함수 만들기 ( 함수형 언어의 특징 ! ) 
            clickBtn = ()=>{
                Alert.alert('컴포넌트3의 버튼에서 Main의 함수를 사용했다.')
                
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
                    {/* Props에 저장된 값은 const 이므로, 값을 절대 바꿀 수 없음. */}

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