//  webView library 적용
//  npm install --save react-native-webview

import React from "react";
import { Button, View } from "react-native";
import WebView from "react-native-webview";

// 함수형 컴포넌트

const Main = ()=>{
    return (
        <View style={{flex:1,}}>
            {/* 1) 기본 webView 배치 : 라이브러리 설치했음므로 그냥 쓰기 -> style 중에서 크기값은 기본 flex로 지정되어 있음. */}
            <WebView source={{uri:'https://github.com/react-native-webview/react-native-webview/blob/master/docs/Getting-Started.md'}}></WebView>

            {/* 다른 뷰가 있다면 다른 뷰의 높이값을 제외한 나머지 영역을 모두 파지하게 됨. */}
            <Button title='button'></Button>

            {/* 권장하진 않음 . 만일 억지로 사이즈를 정하고 싶다면 -> 부모뷰를 만들어서 사이즈를 부모뷰에 지정. */}
            <View style = {{height : 250 , borderWidth:2, margin:4}}>
                <WebView source={{uri:'https://inah-pak.github.io/WebKakaoMapTest/'}}></WebView>
            </View>


        {/*         이렇게 웹 뷰를 이용하면 . . BN에서 구현하기 번거로운 화면은 웹뷰로 만들어서 적용할 수 있음. 
                     예를들어, 지도 화면. 네이티브면 서버 연동작업에다가.. 할거 개많잖아
                     또,     로그인 화면 구현할 때, 구글 카카오 다 복잡했잖아/
                     그럼 진짜로 카카오 지도 구현해보자 -> 예전 웹 수업 시간에 구현했던 카카오지도 웹페이지 보여주기 */}
                {/* 
            <View style = {{height : 250 , borderWidth:2, margin:4}}>
                <WebView source={{uri:' https://inah-pak.github.io/WebKakaoMapTest/'}}></WebView>
            </View> */}
               </View>    
        )
}

export default Main