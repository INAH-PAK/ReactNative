// Material Top Tab 다루는 실습
import React from 'react'
import NavigationContainer from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Home from './screes_toptab/Home'
import Tab2 from './screes_toptab/Tab2'
import Tab3 from './screes_toptab/Tab3'

const Tab = createMaterialTopTabNavigator();

// 함수형 컴포넌트로 만들어볼 수 만들어보기
const MainMaterialTopTab = ()=>{
    return (
        <NavigationContainer>
            <Tab.Navigator>
                {/*  탭에 의해 전활될 screen들 */}
                <Tab.Screen name='TAB1' component={Home}/>
                <Tab.Screen name='TAB2' component={Tab2}/>
                <Tab.Screen name='TAB3' component={Tab3}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default MainMaterialTopTab