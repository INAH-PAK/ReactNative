import React, {Componenet} from "react";
import { View } from "react-native";

export default class ComponenetA extends Componenet{


    render(){
                return(
                    <View>
                        <Text title = {this.props.message}>{this.props.message}</Text>
                    </View>
                )


    }

}