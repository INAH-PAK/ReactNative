/**
 * @format
 

  안드로이드 에선 , Activity -> Fragment, view 의 구조이지만,
  react-native 에선 모두 다 Componant!!
 */
import {AppRegistry} from 'react-native'; // react-native.js 로부터 AppRegistry 클래스를 가져왔다 !
import App from './App';
import {name as appName} from './app.json';
import MyApp from './MyApp';

// 처음 실행되는 컴포넌트를 지정하는 메소드 실행 
// 첫 번 째 파라미터 : App 이름
// 두 번째 파라미터 : 첫 번째 컴포넌트를 지정해주는 콜백 함수 지정
//   AppRegistry.registerComponent(appName, () => App);

// 새로 만든 MyApp.js 문서의 컴포넌트를 첫 시작 컴포넌트로 지정
AppRegistry.registerComponent(appName, ()=> MyApp )
