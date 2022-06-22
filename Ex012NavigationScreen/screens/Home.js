import React,{Component} from 'react'
import { Text, View, StyleSheet , Button} from 'react-native'

export default class Home extends Component{
    render(){
        return(
            <View style={style.root}>
                <Text>Homew screens</Text>
                {/* 화면전환 버튼 */}
                <Button title = 'go to the screen ' onPress={this.gotoSecond}></Button>
            </View>
        )
    }

    gotoSecond = ()=>{
        // react navigation 에서는 a=navigator 에 의해 보여지는 Component들에게 props로 navigation 이라는 객체가 자동으로 전달되어 옴,
        // 즉 ! this,props 객테의 맴버로( 내가 보낸적도 없지만) 네비게이션 객체가 존재 
        // this.props.navigation.navigate('second') // 파라미터 : 스크린 등록시 지정했던 네임 속성값의 별명

        // 만약 현재 회면을 finish 하면서 screen을 전환하고 싶다면/
        // this.props.navigation.replace('second')

        // 화면전환과하면서 데이터를 전달하고 싶다면? - [ name과 age 를 가진 객체르 더ㅏ]
        this.props.navigation.navigate('second',{name:'sam', age:20})

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