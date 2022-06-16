import React,{Component} from "react";
import {View, Text, Image, TouchableOpacity, Alert, TouchableHighlight, TouchableNativeFeedback, StyleSheet, ImageBackground, ScrollView} from "react-native";

export default class MainComponent extends Component{

    state={
                    //❗❗ 전체 뷰에 배경이미지 적용하기 -> 스타일로 적용 불가.
                    //❗❗ 배경 이미지용 뷰가 따로 있음.
                    // 스크롤 방향을 가로로 하기 : horizontal 설정 .
         
        imgNum:0,   // 보여줄 이미지를 가진 배열의 index 번호
        imgArr :[
            require('./Image/moana01.jpg'),
            require('./Image/moana02.jpg'),
            require('./Image/moana03.jpg'),
            require('./Image/moana04.jpg'),
            require('./Image/moana05.jpg'),
            // 네트워크 상에 잇는 이미지느 
            {uri:'https://cdn.pixabay.com/photo/2022/05/25/09/39/animal-7220153_960_720.jpg'}
        ]
    }
    render(){
        return(
            <ScrollView style={{flex:1,} } horizontal={true} >   
                <ImageBackground
                style={{width:'100%',height:'100%',flexDirection:"row"}}
                resizeMode="stretch" // 기본이 cover
                source={{uri:'https://cdn.pixabay.com/photo/2015/08/26/20/31/man-909049_960_720.jpg'}}>


                        {/*[ 1. 오프라인 예시] 
                        그림 이미지는 require() 라는 함수 이용 🤯🤯별도의 스타일이 없다면, 원본 사이즈 !! */}

                <Image
                    style={{ width:100, height:100}}
                    source={require('./Image/siba.png')}>
                </Image>

                        {/* [ 2. 온라인 예시 ] 
                        네트워크상에 있는 이미지를 보여주기 : uri라는 이름의 맴버를 가진 객체를 sorce 로 설정 
                        필수 !!!!🤯🤯 네트워크 이미지는 사이즈 지정이 없으면 보이지 않음!!!! */}
                <Image 
                        style={{width:100,height:100}}
                        source={{ uri:'https://cdn.pixabay.com/photo/2022/05/25/09/39/animal-7220153_960_720.jpg'}}>
                </Image>

                        {/* Image의 클릭 이벤트 : Image 컴포넌트는 onPress라는 속성이 없음 ( 원래 RN의 컴포넌트들은 클릭 이벤트 없음 )
                                                그래서
                                                클릭이벤트에 반응하는 컴포넌트들이 별도로 존재.
                                                [ TouchableXXXXXXXXXX  ] 
                                                Opacity : 투명도 */}

                <TouchableOpacity onPress={ this.clickImage }>
                    <Image
                        style={{width:100 , height: 100}}
                        source={require('./Image/siba.png')}>
                    </Image>
                </TouchableOpacity>
                <TouchableHighlight onPress={ this.clickImage2 } style={{padding:4, width:108}}>
                    <Image
                        style={{width:100 , height: 100}}
                        source={require('./Image/siba.png')}>
                    </Image>
                </TouchableHighlight>
                {/* 안드로이드의 클릭 피드백 효과 ( == 물결효과 ) */}
                <TouchableNativeFeedback onPress={ this.clickImage2 } >
                    <View style={{padding:4, width:200 , borderWidth:2 , borderRadius:4, marginLeft:16}}>
                        <Text>TouchableNativeFeedback 효과 예제</Text>
                        <Image
                            style={{width:100 , height: 100}}
                            source={require('./Image/siba.png')}>
                        </Image>
                    </View>
                </TouchableNativeFeedback>

                {/* 터치했을 때 이미지 바꾸기 */}
                <TouchableOpacity onPress={this.changImage2}>
                    <Image 
                        style={{width:100 , height:50}}
                        source={this.state.imgArr[this.state.imgNum]}>
                    </Image>
                </TouchableOpacity>


                </ImageBackground>

            </ScrollView>
        )
    }

    // 이미지 클릭에 반응하는 콜백 메소드
    clickImage = ()=>{
        Alert.alert('image click')
    }

    clickImage2 = () => {

    }
    changImage2 = () => {
        var indexNum = this.state.imgNum+1

        // RN의 배열 길이 구하는 방법
        // 👉👉 https://infinitbility.com/how-to-get-array-length-in-react-native
        if(indexNum >  (this.state.imgArr.length-1) ) indexNum = 0
        this.setState({imgNum:indexNum})
    }

}

const style = StyleSheet.create(


)