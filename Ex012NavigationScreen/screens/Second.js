import React,{Component} from 'react'
import { Text, View, StyleSheet ,Button} from 'react-native'

export default class Second extends Component{



    render(){

    // 전달된 데이처를 받는 객체의 맴버를 쉽게 쓰기 위해 [구조분해할당]
    const {name, age , go} = this.props.route.prams
        return(
            <View style={style.root}>
                <Text>Second screens</Text>

                {/*  이전화면에서 전달된 데이터객체는 자동으로 props route.params 라는 변수에 저장 됨. */}
                <Text>{this.props.route.prams.name} : {this.props.route.prams.age}</Text>
                {/* 파라미터 명이 너무 길어서 사용할 때 마다 불평하득 하여 [구조분해할당] */}
                <Text>{name} : {age}</Text>

                {/*  뒤로가기용 버튼  */}
                <Button title-='go Back'color='orange' onPress={()=>{this.props.route.prams.go}}></Button>

                {/* 제목줄 옵션 제어하는 버튼  */}
                <Button title='제목 글씨 변경' onPress={this.props.navigation.setOptions({title:'SECOND'})}></Button>
            </View>
        )
    }

    //Second 컴포넌트가 그려진 후(render) 자동으로 발동하는 라이프사이클메소드
    componentDidMount(){
        this.props.navigation.setOptions({title:'Good'})
    }



}

const style = StyleSheet.create({
    root:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }

        
    
    }
)