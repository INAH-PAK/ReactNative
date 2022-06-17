import React,{Component} from "react";
import {Text, View, StyleSheet, FlatList, Button, TouchableOpacity, Alert, Image} from "react-native";


export default class Main2 extends Component{


        // 화면 갱신에 영향을 미치는 아주 특별한 별수 = state
        // 이 state에 FlatList 에서 쓰일 대량의 데이터를 넣어주자.
        state =  {datas: ["aaa","bbb","ccc","ddd","fff","eee","sss",],
                  datas2:[
                    {name:"sam", message:"어어나어ㅜㅏㅁㅇㅁ" , img : require('./Image/moana01.jpg')},
                    {name:"ff", message:"sfnㅇNnNㅁ" , img : require('./Image/moana02.jpg')},
                    {name:"dd", message:"GEwHfㅁㅇㅁ" , img : require('./Image/moana03.jpg')},
                    {name:"ss", message:"어egaRVㅇㅁ" , img : require('./Image/moana04.jpg')},
                    {name:"jj", message:"SDGBFDhah" , img : require('./Image/moana05.jpg')},
                    {name:"인터넷", message:"픽사베이 이미지" , img : {uri:'https://cdn.pixabay.com/photo/2022/05/29/05/36/otter-7228458_960_720.jpg'}},
                  ]}


    render(){
        return(
            <View>
                <Text>FlatLffft</Text>
                <FlatList 
                    data={this.state.datas2}
                    renderItem={({index, item })=>{  
                        return(
                            <TouchableOpacity style={style.item} onPress={()=>{alert(item.name)}}>
                                <Image source={item.img} style={style.itemImg}></Image>
                                <View>
                                <Text style={style.itemName}>{item.name}</Text>
                                <Text style={style.itemMsg}>{item.message}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}>
                </FlatList>

            </View>
        )
    }
} 

const style=StyleSheet.create({

    item:{
        flexDirection:'row',
        borderWidth:1,
        borderRadius:4,
        padding:8,
        marginBottom:12,
    },
    itemImg:{
        width:120,
        height:100,
        resizeMode:'cover',
        marginTop:8,

    },
    itemName:{
        fontSize:24,
        fontWeight:'bold',
        color:'black',

    },
    itemMsg:{
        fontSize:16,
        fontWeight:'italic',
    }
})