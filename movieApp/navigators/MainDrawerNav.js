import React from 'react'
import { createDrawerNavigator} from '@react-navigation/drawer'

import MovieStackNav from './MovieSrackNav'

const Drawer = createDrawerNavigator()

const MainDrawerNav = ()=>{
    // 기존 액션바 제거 : screenOptions={{headerShown:false}
    return(
        <Drawer.Navigator screenOptions={{headerShown:false}}>
            <Drawer.Screen name='MovieStackNav' component={ MovieStackNav }></Drawer.Screen>
        </Drawer.Navigator>
    )
}

export default MainDrawerNav