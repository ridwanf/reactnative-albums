Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _firebase=require('firebase');var _firebase2=babelHelpers.interopRequireDefault(_firebase);
var _reactNative=require('react-native');
var _common=require('./components/common');
var _LoginForm=require('./components/LoginForm');var _LoginForm2=babelHelpers.interopRequireDefault(_LoginForm);var

App=function(_Component){babelHelpers.inherits(App,_Component);function App(){babelHelpers.classCallCheck(this,App);return babelHelpers.possibleConstructorReturn(this,(App.__proto__||Object.getPrototypeOf(App)).apply(this,arguments));}babelHelpers.createClass(App,[{key:'componentWillMount',value:function componentWillMount()
{

_firebase2.default.initializeApp({
apiKey:'AIzaSyBeUNdsyrH0MeQO-OFJDQq4QUgAutry_K4',
authDomain:'auth-1925c.firebaseapp.com',
databaseURL:'https://auth-1925c.firebaseio.com',
storageBucket:'auth-1925c.appspot.com',
messagingSenderId:'831137587989'});

}},{key:'render',value:function render()

{
return(
_react2.default.createElement(_reactNative.View,null,
_react2.default.createElement(_common.Header,{headerText:'Authentication'}),
_react2.default.createElement(_LoginForm2.default,null)));


}}]);return App;}(_react.Component);exports.default=


App;