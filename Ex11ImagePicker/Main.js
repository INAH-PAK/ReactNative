


//  ### react-native-image-picker 
//  https://github.com/react-native-image-picker/react-native-image-picker

// react-native은 자기네들이 카메라, 갤러리 등등 기능 안만들어줌
// 라이브러리로 자기네들이 만들라고 하고
// 어차피 리액트 네이티브는 그때그때 


// 라이브러리들은 package.json 문서의 dependencies에 추가어있음. [ android - dependences 랑 같음]

// 1. install ( 앱 , node 끄고 해야 함. )
// 프로젝트 폴더> npm install yarn add react-native-image-picker

import React, { Component} from "react";
import { Button, View, Text, Image } from "react-native";
// 외부 라이브러리 기능 사용
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export default class Main extends Component{

    state={
        img:{uri:"https://cdn.pixabay.com/photo/2022/06/11/21/38/puffin-7257000__340.jpg"},
    }

    render(){
        return(
            <View style={{flex:1, padding:16}}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}} >
                    <Button title="show camera app" onPress={this.showCamera}></Button>
                    <Button title="show photo app" onPress={this.showPhoto} color={'green'}></Button>
                </View>
                    <Text style={{margin:8}}>{this.state.img.uri}</Text>
                    <Image source={this.state.img} style={{marginTop:1, flex:1}}></Image>
            </View>
        )
    }

    // 1.  카메라 앱을 실행시키는 기능을 가지는 콜백 함수
    showCamera = ()=>{
        // 옵션객체 - 옵션이 여러개일 수 있으니 객체로 줘야 함.
        // git 리드미에 써있음
        const options = {
            mediaType:'photo',
            cameraType:'back',
            saveToPhoto: true , // 찍은(캡쳐한) 사진을 디바이스에 저장 할 것인가
            quality: 1.0,          // 사진 화질
            videoQuality:'high', // 비디오 화질
        }

        // 카메라 앱 실행함수 ( 옵션과 콜백을 파라미터로 줌.)
        launchCamera(options , (response)=>{ //파라미터로 전달된 응답객체로부터 사진 캡쳐 결과 받기
            if(response.didCancel){
                alert('사용자가 사진 촬영을 취소하였습니다.')

            }else if(response.errorMessage){

            }else{
                // 에러, 사용자 취소 다 아니면 여기 = 사진촬영이 잘 됨
                // 선택된 이미지 uri 만들기   :  assets인 이유는 원래여기는 사진 하나이지만, 갤러리에선 여러개 선택할 수 있기 때문에 이름 걍 똑같이 썼음 라이브러리 주인이
                const source = {uri: response.assets[0].uri}

                // 선택됨 사진의 경로를 가진 객체 source를 이미지 컴포넌트가 보여주는 source값에 설정
                this.setState({img:source})

            }
        })

    }


    // 2. 사진 앱을 실행시키는 기능을 가지는 콜백 함수

    showPhoto = ()=> {

        // 옵션객체
        const options={
            mediaType:'photo',
            selectionLimit:5,

        }

        launchImageLibrary(options,(response)=>{

            if(response.didCancel){
                alert('사용자가 갤러리 사진 선택 취소')
            }else if(response.errorMessage){
                alert(response.errorMessage)
            }else{
                // 선택된 사진 이미지의 경로를 기반으로 이미지 객체 만들기
                const source = {uri:response.assets[0].uri}
                
                //이미지 컴포넌트가 보여주는 state값에 설정
                this.setState({img:source})
                
            }
        })

    }


}