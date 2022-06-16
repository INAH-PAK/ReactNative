import React, {Component} from "react";
import { View, Text, StyleSheet, Button } from "react-native";


export default class Main extends Component {


    render(){

        // 대량의 데이터를 리스트 형태로 보여주는 작업이 가장 일반적인 UI

        // JSX 컴포넌트 객체를 변수에 저장할 수 있음
        // JSX == 자바쓰다가,, XML 쓰는 언어 
        let aaa = "Hello"
        let bbb = <Text>Nice</Text>

        // 텍스트는 단순하므로 복잡한 컴포넌트 만들어보기
        const ccc = <View style={{margin:8}}>
                        <Text>Hello B</Text>
                        <Button title='btn'></Button>
                    </View>

        // 배열
        const ddd = [bbb ,bbb,ccc , this.showItemView()]
        // 애석하게 실제 대부분의 대량의 데이터는 컴포넌트가 아니라 그냥 데이터인 경우가 많음.
        const datas = ["aaa" , "bb" ,"cc" ,"dd" ,"ee" ]

        // .forEach => 해당 요소에 접근만 함. 
        // .map => 해당 요소에 접근 + 요소의 갯수 만 큼 새로운 배열 생성하고 리턴해줌.
        // 이걸 이용해서 텍스트 객체 배열에 데이터를 다다다닥 넣어보자.

        // 배열의 .map() 메소드 이용
        // 배열의 요소만큼 function() 이 호출되고, 파라미터로 해당 요소의
        // 값과 ㅇㄴ덱스번홀르 ㄹ전달아며, 요소의 갯수만틈 새로운 배열으 ㄹ마ㄴ들어서 최종 리천


        const arr = datas.map(function(value, index, array){
            return(
                <View style={{margin:4 , borderWidth:1, padding:8, borderRadius:4}}>
                    <Text>{value}</Text>
                </View>
            )
        })

        return(
            <View style={style.root}>
                {arr}
                <Text>List Layout</Text>
                {bbb}
                {ccc}
                {ccc}
                
                {/*  컴포넌트를 리턴하는 함수 호출 */}
                {this.showItemView()}

                {/* 파라미터를 전달을 통해 콘텐츠가 다른 컴포넌트가 보이도록. */}
                {this.showItemView2("robin","second","green")}

                {/* 컴포넌트를 요소로 가진 배열을 그냥 출력하면 요소값이 그냥 나열됨 */}
                {ddd}
            </View>
        )
    }
    
    // 변수로 컴포넌트들을 정의하면 값이 고정되어 있음
    // 이를 보완하기 위해 메소드 정의
    //  * 컴포넌트를 리턴하는 메소드를 정의 *
    showItemView(){
        return(
            <View style={{margin:8}}>
                <Text>This is method</Text>
                <Button title='press me'></Button>
            </View>
        )
    }

    // 파라미터를 전달받아 컴포넌트를 만들고 리턴하는 메소드 으의
    showItemView2(name, title, color){
        return(
            <View style={{margin:8}}>
                <Text>Nice {name}</Text>
                <Button title={title} color={color}></Button>
            </View>
        )
    }

}

const style = StyleSheet.create({
    root:{flex:1, margin:8},
    text:{color:'black'}
    
    
})