import React , {Component} from "react";
import {View , Text, StyleSheet, FlatList } from 'react-native'

import BigCatalog from './BigCatalog'

export default class BigCatalogList extends Component{

    state = {
        data:[], // 갯수 0인 배열 준비
    }

    componentDidMount(){ // 라이프사이클 대체 메소드 : 이 컴포넌트가 화면에 보여진 후 자동으로 발동하는 라이프사이클 메소드
        //인기순 URL을 통해 데이터 받아오기
        // 네트워크 작업 !
        // retrofit 같은 라이브러리 -> [ fetch library ]
        // JS 에 fetch 라이브러리가 내장되어 있음.
        //   fetch(this.props.url)
        // 그리고 당연히 네트워크는 비동기 작업이기 때문에 -> promiss 문법 ( 1. then() 2.waike awit?)


        // 응답 객체의 결과를 Text 로 받아와 테스트해보기
        // fetch(this.props.url)
        // .then((response)=>{
        //     return response.text() // 응답 객체의 결과를 단순 스트링으로 변환함.== 안드로이드의 스칼라스 컨버터랑 같음 (변환하는데 시간걸림 -> 그래서 또 덴 씀 )
        // }).then((responseText)=>{
        //     alert(responseText)
        // })

        // 결과 잘 뜨면, 이제 결과를 json으로 받기
        fetch(this.props.url)
        .then((response)=>{
            return response.json()
        }).then((responseJson)=>{
            //  alert(responseJson.status) -> 제대로 왔는지 확인
            // alert(responseJson.data.movies.length) 
            this.setState({data:responseJson.data.movies})
        })


    }

    render(){
        return(
            <View style = {style.container}>
                <FlatList
                    horizontal={true}
                    pagingEnabled={true}
                    data={this.state.data}
                    renderItem={(obj)=>{ // 배열요소값(item), 인덱스 번호(index)를 가진 객체 하나가 파라미터로 전달됨. -> 
                        return <BigCatalog onPress={this.props.onPress} movie={obj.item}></BigCatalog>
                    }}>
                </FlatList>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container:{
        height:300,
        marginBottom:8,

    }
})