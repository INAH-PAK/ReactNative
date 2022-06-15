import React,{Component} from "react";
import {View, Text, Image, TouchableOpacity, Alert} from "react-native";

export default class MainComponent extends Component{
    render(){
        return(
            <View style={{flex:1}}>

                        {/*[ 1. 오프라인 예시] 
                        그림 이미지는 require() 라는 함수 이용 🤯🤯별도의 스타일이 없다면, 원본 사이즈 !! */}

                <Image 
                    style={{ width:200, height:200}}
                    source={require('./Image/siba.png')}>
                </Image>

                        {/* [ 2. 온라인 예시 ] 
                        네트워크상에 있는 이미지를 보여주기 : uri라는 이름의 맴버를 가진 객체를 sorce 로 설정 
                        필수 !!!!🤯🤯 네트워크 이미지는 사이즈 지정이 없으면 보이지 않음!!!! */}
                <Image 
                        style={{width:200,height:200}}
                        source={{ uri:'https://cdn.pixabay.com/photo/2022/05/25/09/39/animal-7220153_960_720.jpg'}}>
                </Image>

                        {/* Image의 클릭 이벤트 : Image 컴포넌트는 onPress라는 속성이 없음 ( 원래 RN의 컴포넌트들은 클릭 이벤트 없음 )
                                                그래서
                                                클릭이벤트에 반응하는 컴포넌트들이 별도로 존재.
                                                [ TouchableXXXXXXXXXX  ] 
                                                Opacity : 투명도 */}

                <TouchableOpacity onPress={ this.clickImage }>
                    <Image
                        style={{width:200 , height: 200}}
                        source={require('./Image/siba.png')}>
                    </Image>
                </TouchableOpacity>



            </View>
        )
    }

    // 이미지 클릭에 반응하는 콜백 메소드
    clickImage = ()=>{
        Alert.alert('image click')
    }
}