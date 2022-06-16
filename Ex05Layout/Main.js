import React,{Component} from "react";
import { View, Text } from "react-native";


export default class Main extends Component{

    render(){
        return(
            // <View>
            //     <Text>예시1</Text>
            //     <View style={{width:50, height:50, backgroundColor:'red' }}></View>
            //     <View style={{width:100, height:50, backgroundColor:'blue' }}></View>
            //     <View style={{width:150, height:50, backgroundColor:'#00FF00' }}></View>
            //     {/* 기본적으로 뷰들의 배치는 수직임. BN은 flex 스타일이며 기본 direction */}
            // </View>


            // 2) 3개의 자식 뷰를 배치할 때, 사이즈를 flex로 지정해보기 (권장 - 해상도 )
            //  flex는 배치 방향에 따라 width일 수 도 있고,height 있 수 도 있음
            // 기본이 수직 (colum) 이므로 현재 flex 는 heigth 를 의미함.{/* justifyContent -> 기본 alien-start */}
            // <View style={{flex:1, justifyContent:'flex-start', alignItems:'stretch'}}>  
            //     <View style={{ height:50 , backgroundColor:'red'}}></View>
            // </View>

            // flex는 상대적이라는 걸 기억하자 !
            // 최상위 뷰는 1개만 있으므로, 화면 전체를 사용하려면. . .
            // 최상위 뷰의 style={{height:'100%'}}
            //🤯🤯 단, RN은 사이즈를 정할 때, flex 스타일을 권장 !!!!!
            // <View style={{flex:1}}>  
            //     <View style={{ flex:1 , backgroundColor:'red'}}></View>
            //     <View style={{ flex:2 , backgroundColor:'green'}}></View>
            //     <View style={{ flex:4 , backgroundColor:'blue'}}></View>
            // </View>

            // 기본 배치 방향이 수직임.
            // 이제 수평배치 연습.
            // <View style={{flex:1 , flexDirection:'row'}}>
            //     <View style={{backgroundColor:'red', flex:1}}></View>
            //     <View style={{backgroundColor:'blue', flex:2}}></View>
            //     <View style={{backgroundColor:'green', flex:4}}></View>
            //     {/* 🤗  수평배치일때, 자식뷰들의 flex는 width를 의미함,,🤗   */}
            // </View>

            // 이제, 자식뷰들의 사이즈를 직접 주고, , 배치(정렬)을 여러형태로 적용해보기 연습
            // justify-content , alignItems 정렬속성 연습
            // 주의 : alignItems는 자식이 우선시 되기 때문에 전체의 alignItems에서 스트레치 안됨.
            // <View style={{ flex:1, flexDirection:'column', justifyContent:'space-between', alignItems:'center'}}>
            //     <View style={{ width:50, height:50, backgroundColor:'red'}}></View>
            //     <View style={{ width:50, height:50, backgroundColor:'green'}}></View>
            //     <View style={{ width:50, height:50, backgroundColor:'blue'}}></View>
            // </View>

            
            //이제 수평배치 연습.
            // <View style={{ flex:1, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            //     <View style={{ width:50, height:50, backgroundColor:'red'}}></View>
            //     <View style={{ width:50, height:50, backgroundColor:'green', alignSelf:'flex-start'}}></View>
            //     <View style={{ width:50, height:50, backgroundColor:'blue'}}></View>
            // </View>

            // <View style={{flex:1}}>
            //     <View style={{height:50, backgroundColor:'red'}}></View>
            //     <View style={{flex:1, backgroundColor:'green'}}></View>
            //     <View style={{flex:1, backgroundColor:'blue'}}></View>
            // </View>

            // 중첩구조의 배치 . . .  수직/ 수평 배치 혼재할 때의 상황
            // <View style={{flex:1, flexDirection:'column'}} >
            //     {/* 크게 수직으로 2분할 [1:2 비율] */}
            //     <view style={{flex:1, flexDirection:'row'}}>
            //         {/*좌우로 2:1 비율 [2:1] */}
            //         {/*  절대 위치를 이용해서  */}
            //         <View style={{width:50, height:50, backgroundColor:'red',left:10, top:10}}></View>
            //         <View style={{width:50, height:50, backgroundColor:'gray',left:10, top:20}}></View>
            //     </view>
            //     <view style={{flex:2, flexDirection:'row'}}>
            //          {/* [2:1] */}
            //         <View style={{flex:2, backgroundColor:'yellow'  }}></View>
            //         <View style={{flex:1, backgroundColor:'sky'  }}></View>
            //     </view>
            // </View>
            <View style={{flex:1, flexDirection:'row'}}>
                <View style={{ flex:1 }}>
                    {/* 크게 수직으로 2분할 [1:2 비율] */}

                </View>
                <View style={{ flex:2 }}>
                    
                </View>

                {/* 절대위치 */}
                <View style={{ width:100, }}><View>

            </View>
        )
    }

    }