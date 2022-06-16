import React,{Component} from "react";
import {View, Text, Button} from "react-native"

export default class MyCumponent5 extends Component{

    render(){
        return(
            <View>
                {/* 버튼에 설정 할 전달받은 속성값들(Props)가 여러개일 때 한에에 적용 */}
                {/*  객체의 맴버변수 이름 :  속성 명 , 객체의 맴버 변수 속성 => 속성 값 */}
                {/*  그니까 */}
                {/*  보낸 사람이  [ 보낸 속성={ 속성 값} ]  이 자체가 자동으로 들어가짐. */}
                <Button {...this.props}></Button>
            </View>
            )
    }
}