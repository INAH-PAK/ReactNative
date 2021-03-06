import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// 사용할 스크린 컴포넌트들 import
import MovieDetail from '../screens_movie/MovieDetail'
import MovieList from '../screens_movie/MovieList'


const Stack = createStackNavigator()


// 단순 Navigation 이기에 함수형 컴포넌트
const MovieStackNav = ()=>{
        return(
            <Stack.Navigator>
                <Stack.Screen name='MovieList' component={MovieList}/>
                <Stack.Screen name ='MovieDetail' component ={MovieDetail}/>
            </Stack.Navigator>
        )
    
}

export default MovieStackNav