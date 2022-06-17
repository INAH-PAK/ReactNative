import React,{Component} from "react";
import {Text, View, StyleSheet, FlatList, Button, TouchableOpacity, Alert} from "react-native";


export default class Main extends Component{


        // 화면 갱신에 영향을 미치는 아주 특별한 별수 = state
        // 이 state에 FlatList 에서 쓰일 대량의 데이터를 넣어주자.
        state =  {datas: ["aaa","bbb","ccc","ddd","fff","eee","sss",]}




    render(){
        return(
            <View style={style.root}>
                <Text style={style.text}>FlatList Test</Text>

                    {/* RN에서는 RecyclerView의 역할을 하는 Component 가 2가지 있음 */}
                    {/* 1. FlatList   :  일반적인 리스트뷰의 형태 */}
                    {/* 2. SectionList   :  섹션에 따라 구분지어서 */}


                    {/* FlatList 컴포넌트 */}
                    {/* 필수 속성이 2개 */}
                    {/* 1) data - FlatLsit가 보여줄 대량의 데이터들 지자ㅓㅇ */}
                    {/* 2) renderItem -  아이템 하나의 모양 ( Component ) 를 만들어서 리턴하는 콜백 함수 지정  */}
                    {/*               -   renderItem 속성에 지정한 함수는 data 속성에 지정한 배열의 개수만큼 호출 됨 ( =  map 같이 ! )*/}
                    {/*               -   정리 */}
                    {/*               -  renderItem() : 데이터의 갯수 만 큼 호출되어서 그 하나하나의 모양을 리턴해줘서 배열로 쭈루룩 만들어줌 ! */}
                <FlatList
                    data={this.state.datas}
                    renderItem={(obj)=>{ // 파라미터 object : 위의 data 속성으로 지정한 배열의 요소와 각 요소의 인덱스 index 번호를 맴버로 가진 객체 1개가 전달됨. 
                        return <Text>{obj.item} - {obj.index}</Text>
                    }}>
                </FlatList>
                    {/* renderItem 의 콜백함수 파라미터를 객체를 받을 때, '구조분해할당' */}

                <Text style={style.text}>FlatList Test By 구조분해할당</Text>

                <FlatList
                   data={this.state.datas}
                    renderItem={({item, index})=>{ // 구조분해할당을 이용함. const {item , index} = obj  이걸 줄인 코드.
                        // 아이템이 터치될 수 있도록 TouchableXXXX
                        return (
                            <TouchableOpacity  style={style.itemVeiw} onPress={ ()=>{alert(index)} }>
                                <Text>{index}</Text>
                                <Text>{item}</Text>
                            </TouchableOpacity>
                        )
                    }}>
                </FlatList>

            </View>





        )
    }
} 

const style=StyleSheet.create({

    root:{
        flex:1,
        padding:16,
    },
    text:{
        color:'blue',
        fontSize:24,
        fontWeight :'bold',
        textAlign:'center',
        paddingTop:8,
        paddingBottom:8
        },
    itemVeiw:{
        borderRadius:4,
        borderWidth:1,
        padding:8,
        margin:8,
    }
})