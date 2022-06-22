import React from "react";

import { View, Text, TouchableOpacity , StyleSheet, Image, Dimensions} from 'react-native' 


//  딱 상단 타이틀 이미지 한 개의 모양
const BigCatalog = (props)=>{
    return(
        <TouchableOpacity
            // activeOpacity : 클릭시 눌러지는 효과 정도 ~1.0
            activeOpacity={0.9}>
                {/* 1. 커버 이미지 */}
            <Image
                source={{uri: props.movie.large_cover_image}}
                // 이미지의 가로 너비를 디바이스의 가로 너비에 맞추기
                style={{width:Dimensions.get('window').width, height:300}}>
                {/* 2. 개봉일 , 제목, 장르 정보가 이미지와 겹치므로 , absolute 포지션 사용 */}
            </Image>

            <View style={style.infoComtainer}>
                <Text style={style.labelYear}> {props.movie.year}년 개봉 </Text>
                <View style={style.labelContainer}>
                    <Text style={style.labelTitle}>{props.movie.title}</Text>
                    <Text style={style.labelGenres}>{props.movie.genres.join(', ')}</Text>
                </View>
            </View>

        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    infoComtainer:{
        position:'absolute',
        bottom:0,
        width:'100%',
        alignItems:'flex-start',
        marginLeft:4,
    },
    labelYear:{
        color:'white',
        padding:8,
        fontWeight:'bold',
        backgroundColor:'#E70915',
    },
    labelContainer:{
        backgroundColor:'#141414',
        width:'100%',
        padding:8,
        opacity:0.8,

    },
    labelTitle:{
        fontSize:18,
        fontWeight:'bold',
        color:'white',
        padding:8,

    },
    labelGenres:{
        fontSize:12,
        color:'white',
        padding:8,
    }
})


export default BigCatalog 