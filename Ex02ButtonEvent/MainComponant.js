import React,{Component} from 'react'
import{View, Text, Button,StyleSheet, Alert}  from 'react-native'

class MainComponent extends Component{
    
    // 맴버변수 ( == property ) 
    // Text Componant 가 보여줄 글씨를 가지고 있는 변수
    // Class 안에서 변수 선언시 키워드 안씀 !!!!!!!1  -> 메소드 안에서 이 변수를 부를 땐 this. 
    aa = "Hello"

    render(){
        return (
            <View style={style.root}>
                <Text style = {style.plainText}>{this.aa}</Text> 
                {/* 이 컴포넌트의 글씨가 만약 변경되어야 한다면,  */}
                {/* 이 텍스트 컴포넌트는 글씨를 직접 쓰지 않고, 변수를 만들어 값을 보여주도록 해야만 함. */}

                {/*  버튼의 onPress 에는 꼭! 콜백 함수만 등록하는 거임 !!!  */}
                <Button onPress={ clickBtnFuntion3 } title='Button'></Button>
                {/* 클래스 외부에 함수를 버튼 클릭 콜백 함수로 사용해도 권장 */}
                {/* 하지만, 기본적으로 클래스의 컴포넌트를 외부에서 제어하는 방식을 그리 좋아하지 않음. */}
                {/* 그래서 가급적, 클래스의 콜백 함수는 <- 맴버 함수 ( 메소드 ) 로 만들 것을 권장,. */}
                {/*  JS 에서는 맴버를 지칭할 때, 반 !! 드 !! 시 !! [this.] 키워드가 필요 !!! */}
                <Button onPress={ this.clickBtn } title='Button2'></Button>
                <Button onPress={ this.changeTextByArrow } title='changeTextByArrow'></Button>
            </View>
        )
    }

    // !!!! 앞으로 무조건 콜백함수는 맴버로 만들 것을 권장 !!!
    clickBtn(){
        Alert.alert('맴버 변수로 만든 클릭 메소드')
    }

    // 버튼 클릭시, Text Component의 글씨 변경경 ㄱㄱ
    changeText(){
        // 텍스트 컴포넌트가 보여주는 값을 가진 aa 변수값을 변경
        this.aa = "Nice To Meet You" // error 
        // why ? 함수도 클래스의 특징을 가지기에 this. 키워드가 이 메소드가 되어버림.
        // 하지만, 우리가 원하는 것은 MainComponent 클래스의 맴버 aa를 원함.

    }
        // 함수는 함수이지만 생성자 함수의 성질을 가지지 않는 화살표함수를 클래스 안에서
        // 맴버 메소드로 사용 할 것을 강하게 권장함.
        changeTextByArrow = ()=>{
            // 이 화살표 함수의 this == Main Componant class 
            this.aa = "Nice To Meet You"
        }


}// Main

// 버큰 클릭시 발동하도록 지정한 함수
function clickBtnFuntion(){
    // 경고창 보이기
    alert(' Press button ')
}

// 익명 함수로 콜백함수 만들어보기
let clickBtnFuntion2 = function(){
    Alert.alert('익명 함수로 만든 press button')
}


// 익명 함수로 콜백함수 만들어보기
let clickBtnFuntion3 = ()=>{
    Alert.alert('화살표 함수로 만든 press button')
}

//스타일 객체
const style = StyleSheet.create({
    root:{
        flex: 1,
        padding : 16,
    },
    plainText : {
        marginBottom: 16,
        color : 'black' , 
        fontWeight : 'bold',
    }

})


export default MainComponent