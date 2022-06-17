import React , {Component} from "react";
import { View , Text, Button} from "react-native";

export default class Main extends Component{

        // RN의 Component 도 lifeCycle 메소드가 존재함. [ 특정 상황에 자동으로 호출되는 메소드 ]
        // constructor() -> render() -> componentDidMount() -> componentDidUpdate() -> componentWillUnmount()

        // 1. 생성자
        constructor(){
            super() // 반드시 명시적으로 부모 생성자 호출이 필요함.

            // 화면이 아직 없기때문에 면면출력이 불가 하므로,
            // Log 값으로 출력해보자.

            console.log('constructor가 불려졌다. ') // node 콘솔창에 찍힘.
        }

        // 2. 화면에 보여지기 전에 , 이 Component의 class가 화면에 연결되기 전에,    -   mount: 연결되다.
        // componentWillUnmount(){} ->    deprecated
        //UNSAFE_componentWillMount(){} ->    deprecated
        // 아예 2번 deprecated임.

        // 3. 화면에 그려내는 메소드
        render(){
            return(
                <View>
                    <Text>life Cycle</Text>
                    <Button title="button" onPress={()=>{this.setState({data:"Hello"})}}></Button>
                </View>
            )
        }

        // 4. 화면이 그려진 후 ( = render 후 )
        componentDidMount(){
            console.log(' component Did Mount ')
        }

        // 5. 화면이 갱신될 때 마다 호출되는 메소드
        componentDidUpdate(){
            console.log(' component Did Update ')
        }

        // 6. 컴포넌트가 종료될 때
        // android 버전 31 부터, 뒤로가기 버튼 누르면 안꺼지고 아예 발동 안됨.
        componentWillUnmount(){
            console.log(' component Will Unmount ')
        }
                    


}