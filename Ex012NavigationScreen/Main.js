import React, {Component} from 'react'
import {View, Text, Image} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

// stack navogator가  보여줄 스ㅡ린(컴포넌트) 임포ㅡ/
import{Home} from './screens/Home.js'
import{Second} from './screens/Second.js'

//  2.2 ) stack 네비게이터 객체 생성해주는 함수 호출
const Stack = createStackNavigator(); 

export default class Main extends Component{

        // ### RN은 기본적으로 화면전환기술이 존재하지 않음. 그래서 별도 라이브러르를 활용해야 함.
        // Ract-Navigation library [https://reactnavigation.org/docs/getting-started/] 

        // : 우리는 그 동안 한 화면에서 작업했으니 페이지 정보를 의미하는 액션바나 그런걸 안만들어 왔음.
        // : 이걸 우리는 네비게이터를 활용ㄱㄱ
        // 두 화면을 전환하고 싶다면 ? 한 컨테이너 하나를 두고, 걔가 두 개의 화면을 가지고 있구 그걸 알아서 전환해줌.  
        // 주의 !! 라이브러리 다운받을 때,반드시 앱 끄고 하기 !

        // 1. 루트 라이브러리 설치 :  npm install @react-navigation/native

        // 2. 하위 라이브러리 다운 : expo install react-native-screens react-native-safe-area-context

       // 1) 가장 먼저 Navigetor ㄷㄹ을 감싸는 최상위 NavigationContainer 컴포넌트를 배치해야 함.


       // navigator-option : 전체에 적용 
       // options : 개별 옵션

    render(){
        return(
            <NavigationContainer>
                {/* 원하는 화면 전환 방식(배치 전환 효과)을 결정하는 Navigator를 배치 함 ) */}
                {/* 전환 방식에 따라 여러 종류의 Navigator가 있음. */}
                {/* Stack: 기존 안드로이드 페이저같음. Native Stack : 프레그먼트간의 화면전환 */}

                {/* 2) stack Navigator 부터 실습 [ 제목줄(액션바)이 생기는 navigator ]  */}
                {/* 2.1 ) stack navigator 라이브러리 적용 */}
                {/* 2.3 ) stack navigator 와 스크린들 등록하기 */}
                <Stack.Navigator screenOptions={{
                    title:'aaa',
                    headerStyle:{backgroundColor:'indigo'},
                    headerTintColor:'white',
                    headerTitleStyle:{fontWeight:'bold'},
                    headerTitleAlign:'center',
                    //headerRight:()=>{return <Button title='menu'></Button>
                    headerRight:()=> <Button title='menu'></Button>
                }}>
                    {/* 네비게이터가 보여줄 스크린들 */}
                    <Stack.Screen options={{title:'홈', headerShown:true}} name='home' component={Home} />
                    <Stack.Screen name='second' component={Second}/>
                </Stack.Navigator>
                
            </NavigationContainer>
        )
    }

}









// https://reactnavigation.org/