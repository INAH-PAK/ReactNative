import React, {Componenet} from "react";
import { Button, View } from "react-native";

export default class ComponenetA extends Componenet{


    render(){
                return(
                    <View>
                        <Button onPress={this.props.onPress}></Button>
                    </View>
                )


    }

}