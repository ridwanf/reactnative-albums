Object.defineProperty(exports,"__esModule",{value:true});exports.Input=undefined;var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');

var Input=function Input(_ref){var label=_ref.label,value=_ref.value,onChangeText=_ref.onChangeText,placeholder=_ref.placeholder,secureTextEntry=_ref.secureTextEntry;var
inputStyle=styles.inputStyle,labelStyle=styles.labelStyle,containerStyle=styles.containerStyle;
return(
_react2.default.createElement(_reactNative.View,{style:containerStyle},
_react2.default.createElement(_reactNative.Text,{style:labelStyle},
label),

_react2.default.createElement(_reactNative.TextInput,{
secureTextEntry:secureTextEntry,
placeholder:placeholder,
autoCorrect:false,
value:value,
style:inputStyle,
onChangeText:onChangeText})));



};

var styles={
inputStyle:{
color:'#000',
paddingRight:5,
paddingLeft:5,
fontSize:18,
lineHeight:23,
flex:2},

labelStyle:{
fontSize:18,
paddingLeft:20,
flex:1},

containerStyle:{
height:40,
flex:1,
flexDirection:'row',
alignItems:'center'}};exports.


Input=Input;