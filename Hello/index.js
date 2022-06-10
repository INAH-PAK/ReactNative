/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// AppRegistry :  내 App ,  registerComponent : intent 필터가 있는 application , 
// appName : 안스의 value -> string ,
// App : 안스의 모듈같은.. . .
//  () => App : 함수를 실행하고, 리턴 파라미터가 App.  <- App.js 가보면 55line 에 xml 코드가 화면에 보이는거임 !
AppRegistry.registerComponent(appName, () => App);
