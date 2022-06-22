import React , {Component} from 'react'
import {View, StyleSheet,Text, TouchableOpacity, Image, ScrollView} from 'react-native'
import { Header } from 'react-native/Libraries/NewAppScreen'

import AsyncStorage from '@react-native-async-storage/async-storage'

import BigCatalogList from '../components_movie/BigCatalogList'


export default class MovieList extends Component{ 

    // 전체 화면을 보면 , 크게 큰 타이틀 , 작은 리스트들로 나눠서 볼 수 있는데, 
    // 여기에 다 쓰면 코드 극혐
    // 이 타이틀 부분을 -> BigCatalogList.js , 이 타이틀의 아이템 부분을 BigCatalog.js 로 하고 이걸 Components_movie 폴더에 넣자
    // 기존의 컴포넌트 폴더들은 재요요 목적이 강했지만
    // 이 폴더는 기능 분할 목적이 큼.


    render(){

        //인기 영화 정보 불러오는 url [get방식]
        const bigUrl="https://yts.lt/api/v2/list_movies.json?sort_by=like_count&order_by=desc&limit=5";

        // 최신등록순 영화 정보 불러오는 url 
        const recentUrl="https://yts.lt/api/v2/list_movies.json?sort_by=date_added&order_by=desc&limit=10";

        // 평점순 영화 정보 불러오는 url 
        const ratingtUrl="https://yts.lt/api/v2/list_movies.json?sort_by=rating&order_by=desc&limit=10";

        // 다운로드순 영화 정보 불러오는 url 
        const downloadUrl="https://yts.lt/api/v2/list_movies.json?sort_by=download_count&order_by=desc&limit=10";


        return(
            <ScrollView style={style.root}>
                {/* 큰 타이틀 이미지를 보여주는 곳에 정보를 가져오는 fetch(: 내려받다.) 작업의 코드가  */}
                {/* 복잡할 수 있으니까, 별도의 Componrnt를 만들어서 작업을 분리 !  */}
                {/* 결국 난 여기서 BigCatalog 하나만 쓰면 얘가 알아서 작업 다 하는 것 처럼 ! */}
                <BigCatalogList url={bigUrl}></BigCatalogList>
                
                {/* 총 3개의 최신 등록순 , 평점순, 다운로드 순 영화 목록을 보여주는 작은 사이즈의 가로 스크롤 리스트 */}
                {/* 이 세 종류의 리스트가 모두 같은 디자인임. */}
                {/* 그래서 별도의 Component를 만들어서 재사용 하자. */}
                <SmallCatalogList></SmallCatalogList>
            </ScrollView>
        )
    }

// render() 실행 후 컴포넌트가 장착되면 자동으로 발동하는 라이프사이클메소드
    componentDidMount(){
        // 제목에에 [ 햄버거 메뉴 아이콘 ], [로그아웃] 메뉴 버튼 배치 + 타이틀 중앙정렬
        // 컴포넌트가 자동으로 마운트 될 때 오는 애 navigation
        this.props.navigation.setOptions({
            // 1. 가운데 정렬
            headerTitleAlign:'center',
            // 2. 오른쪽에 리스트 아이콘 배치
           
            headerLeft:()=>{
                return(
                    <TouchableOpacity onPress={()=>this.props.navigation.toggleDrawer()} style={{marginRight:16}}>
                        <Image source={require('../images/ic_menu.png')}></Image>
                    </TouchableOpacity>
                )},
            headerRight: ()=> (
                <TouchableOpacity
                    style={{flexDirection:'row', marginRight:16,}}
                    onPress={async()=>{
                        //로그아웃이므로 AsynsStorage에 저장된 로그인정보 'email' 제거
                        // AsyncStorage.setItem('email',"") // 내가 로그인 조건은 ""으로 물어봤었응께
                        // AsyncStorage.setItem('email',"").then(()=>{})
                        // promiss 문법의 .then() 메소드 호출 했었지만, 문법이 다소 지저분해서 다소 
                        //ES6(에코마스트 식스 코드) 말구
                        //ES7 에서 등장한 async-await 문법 등장 !(안드로이드의 Syncronize랑 같음 ! 비동기를 동기로 바꿔버리거거)
                        await AsyncStorage.removeItem('email') // 반드시 !!! async() 라고 위에 써야 함 !!!!!!

                        // 그리고, 로그아웃되면 자동으로 인트로 화면으로 화면 화환
                         this.props.navigation.replace('Intro')
                    }}>
                        <Image source={require('../images/tabs/ic_profile.png')}></Image>
                        <Text>로그아웃</Text>
                </TouchableOpacity>
            )


            

        })
    }
}

const style = StyleSheet.create({
    root:{flex:1, backgroundColor:'#FEFFFFFF', },
})