import React, { Component } from "react";
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from "react-native";
import BigCatalog from "../components_movie/BigCatalog";

export default class MovieDetail extends Component{

    state = {
        movie:null,
    }

    render(){ 
        
        return this.state.movie?
        (
            <ScrollView style={style.root}>
                <BigCatalog movie={this.state.movie} onPress={()=>{}}></BigCatalog>

                {/* 영화정보 출력 화면 */}
                <View>
                    <Text style={style.title}>영화 정보</Text>
                    <View style={style.infoContainer}>
                        <Text>{this.state.movie.runtime}</Text>
                        <Text>평점   : {this.state.movie.rating}</Text>
                        <Text>좋아요 : {this.state.movie.like_count}</Text>
                    </View>
                </View>   
                {/* 줄거리  출력 영역 */}
                <View style={style.title}>
                    <Text style={style.desc}>줄거리 : {this.state.movie.description_full}</Text>
                </View>
                {/*  배우 캐스팅 정보 -> CastingList. . .  별도 컴포넌트로 만들기 제작 과제 */}
                {/* 스크린샷 이미지들 -> ScreenShotList. . . 별도 컴포넌트로 만들기제작 과제 */}
            </ScrollView>
        )
        :
        (
                <View style={{flex:1, justifyContent:'center', alignItems:'center',}}>
                    <ActivityIndicator  size='large' color='red'></ActivityIndicator>
                </View>
            
        )
        
        // 두번째 항 -> 0,false,undefined
    }

    // 전달받은 id로 영화상세정보를 fetch하는 기능메소드
    loadData = () => {
        //navigation에 의해 스크린이 전환될때 전달되어온 데이터(객체) 받기 this.
        const id = this.props.route.params.id
        alert(id) 
        fetch('https://yts.lt/api/v2/movie_details.json?movie_id='+id+'&with_image=true&with_cast=true')
        .then(res=>res.json()).then(json=>this.setState({movie:json.data.movie}))
        //.then(res=>res.text()).then(text=>alert(text))

    }

    componentDidMount(){
        this.loadData()
    }
}

const style = StyleSheet.create({
    root:{
        flex:1,
    },
    title:{fontSize:16,
        fontWeight:'bold',
        paddingTop:24,
        paddingRight:16,
        paddingLeft:16,
        paddingBottom:8,
    },
    infoContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:16,
        paddingRight:16,

    },
    desc:{
        paddingLeft:16,
        paddingRight:16,
    }

})