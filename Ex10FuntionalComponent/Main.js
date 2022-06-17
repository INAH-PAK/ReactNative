import React ,{ Component, useEffect, useState }  from "react";
import {StyleSheet, View, Text, ScrollView, Button, Alert} from "react-native";


export default class Main extends Component{

    render(){
        return(
            <ScrollView style={style.root}>
                <Text style={style.text}>Ex10FuntionalComponent</Text>

                    {/* 새로운 Custom Component 를 만드는 새로운 방법 */}
                    {/* 1. class Component (StateFull): Component class 를 상속해서 만드는 일반적인 컴포넌트  */}
                    {/* 2. funtional Component (StateLess): 마치 익명함수를 만드는 방식처럼 만들어진 컴포넌트  */}


                    {/* 1) 두 컴포넌트의 차이를 알아보기 위해 먼저 class Component ( 공식 문서에는 : StatePull 이라고 불림) */}
                    <MyComponent></MyComponent>
                    {MyComponent2()}

                    {/* 2) 함수형 컴포넌트 funtional Component */}
                    {/* 원래는 함수를 호출해야하지만 {MyComponent2()} 이렇게 */}
                    {/* 근데 결국 return 이 Component이잖아? */}
                    <MyComponent2></MyComponent2>
                    <MyComponent2></MyComponent2>

                    {/* 결국, 두 컴포넌트를 비교해보니, 함수형이 매우 간결함 !!!  */}
                    {/* 그래서 개발자들이 컴포넌트를 만들때 함수형을 선호하게 됨 ! */}
                    {/* 하지만 이 funtional Component는 Component를 상속받지 않았음  */}
                    {/* ****  그래서 Component의 state , props 사용 불가.  ****  */}

                    {/* 함수형은 화면갱이이 이루어지는 state가 없으므로 */}
                    {/* 단순하게 반복되는 모양을 보여줄 때 적합 함. */}
                    {/* props라는 변수는 없지만 . . 그래도 속성을 파라미터로 전달받는 것은 가능함 */}

                    {/* 3 - 1 ) 일반 class Component 에서 속성 전달받기 */}
                    <MyComponent3 aaa="sam"></MyComponent3>
                    <MyComponent3 aaa="robin"></MyComponent3>

                    {/* 3 - 2 ) funtional Component에서 속성 전달받기 */}
                    <MyComponent4 title="android"></MyComponent4>
                    <MyComponent4 title="ios"></MyComponent4>

                    {/* 4 ) 여러개의 속성들 전달하기 */}
                    <MyComponent5 title='BN' msg='react-native'></MyComponent5>
                    <MyComponent5 title='android' msg='native'></MyComponent5>

                    {/*  5) 구조분해할당으로 속성들 처리하는 실습 */}
                    <MyComponent6 title="이건" msg="ddd"></MyComponent6>
                    <MyComponent6 title="요건" msg="ㅊㅊㅊ"></MyComponent6>

                    {/* 6) 두 함수형 컴포넌트끼리의 통신 */}
                    {/*    Main 의 state 변수를 두 컴포넌트가 쓸거임. */}
                    <ComponentA text={this.state.text}></ComponentA>
                    <ComponentB onPress={this.changeText}></ComponentB>

                    {/* 예전에는 state가 필요하면 class component */}
                    {/*  state가 필요없으면 funrional conponent */}
                    {/* 근데 쓰다보니, , ,  */}
                    {/* 함수형이 더간결하여 선호도가 높아서  */}
                    {/* 결국, 함수형엣도 원한다면 state를 만들 수 있게 되었슴 */}
                    {/* 또한, 라이프사이클과 유사하 동작을 수행하는 것도 가능하게 되었습ㄴ, */}
                    {/*  그래서 지금은 거의 대부분 함수형 컴포ㅓㄴ트를 사용함 ! */}
                    <MyComponent7></MyComponent7>

            </ScrollView>
        )
    }

    state = {text:"Hello"}
    changeText= ()=>{
        this.setState({text:"nice"})
    }


}// Main


// 7) funtional component Hook -> [ React library 에 있는 메소드들. state 대체 : useState() , lifeCycle 대체 : useEfect()]
const MyComponent7 = ()=>{
 
    // state 역할을 수행하는 변수 
    //   userState() 는 변수와 그 변수를 변경해주는 함수를 만들어줌.
    const [msg , setMsg] = useState("msg의 초기값")
    let [age, setAge] = useState(0)

// 라이프 사이클 중에서 가장 중요한 ComponentDidMount , ComponentDidUpdate 와 같은 역할 함수 = Hook 함수(Hook 기술 이름)
    useEffect(()=>{ // 화면이 보여질 때  +  화면이 업데이트 될 때 발동하는 메소드
        Alert.alert('useEffect()')
    }) 




    return(
        <View   style={style.border}>
            <Text>{msg} : age {age}</Text>
            <Button title="chang component" onPress={()=>{setMsg('ddd')}}></Button>
            <Button title="Add age" onPress={()=>{setAge(age+1)}}></Button>

        </View>
    )

   


}


//6) 두 컴포넌트 끼리의 통신 실습
const ComponentA = (props)=>{
    return(
        <View  style={style.border}>
            <Text>{props.text}</Text>
        </View>
    )
}
const ComponentB =( {onPress} )=>{
    return(
        <View  style={style.border}>
            <Button title="글씨변경" onPress={()=>{props.onPress}}></Button>
        </View>
    )
}

//5) 구조분해할당으로 속성들 사용하기
//   파라미터에 {title,msg} = props 를 줄여쓴거,
const MyComponent6 = ({title,msg})=>{ 
    return(
        <View  style={style.border}>
            <Text style={style.text}>{title}</Text>
            <Text style={style.text}>{msg}</Text>
        </View>
    )
}

// 4) 여러개의 속성들 . . 
const MyComponent5 = (obj)=>{
    return(
        <View style={style.border}>
            <Text style={style.text}>{obj.title}</Text>
            <Text style={style.text}>{obj.msg}</Text>
        </View>
    )
}

// 3 - 2 ) funtional Component with 속성 [ props 가 없음 ]
// 대신 함수 파라미터에 속성값들이 1개의 
const MyComponent4 = (obj)=>{
    return(
        <View style={style.border}>
            <Text style={style.text}>속성을 전달받는 funtional Component</Text>
            <Text style={style.text}>{obj.title}</Text>
        </View>
    )
}
//3 - 1 ) class component 속성을 전달받는
class MyComponent3 extends Component{
    render(){
        return(
            <View style={style.border}>
                <Text style={style.text}>속성 전달받는 class component </Text>
                {/* component는 전달받은 속성을 전달받은 속성을저저장하고 있는 아주 특별한 변수 [props] */}
                <Text style={style.text}>{this.props.aaa}</Text>
            </View>
        )
    }
}


// 2) funtional Component : 함수가 리턴한 값이 뷰. 결국 함수는 뷰.
const MyComponent2 = ()=>{
    return(
        <View style={style.border}>
            <Text style={style.text}>속성없는 funtional Component</Text>
        </View>
    )
}

// 1) class Component
class MyComponent extends Component{
    render(){
        return(
            <View style={style.border}>
                <Text style={style.text}>속성없는 class Component</Text>
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
        fontSize:20,
        margin:8, padding:8,
    },
    border:{
        margin:8,
        backgroundColor:'#AABBBBBB'
    }
})