Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');
var _common=require('./common');var

LoginForm=function(_Component){babelHelpers.inherits(LoginForm,_Component);function LoginForm(){babelHelpers.classCallCheck(this,LoginForm);return babelHelpers.possibleConstructorReturn(this,(LoginForm.__proto__||Object.getPrototypeOf(LoginForm)).apply(this,arguments));}babelHelpers.createClass(LoginForm,[{key:'render',value:function render()
{
return(
_react2.default.createElement(_common.Card,null,
_react2.default.createElement(_common.CardSection,null,
_react2.default.createElement(_reactNative.TextInput,{style:{height:20,width:100}})),

_react2.default.createElement(_common.CardSection,null),

_react2.default.createElement(_common.CardSection,null,
_react2.default.createElement(_common.Button,null,'Log in'))));






}}]);return LoginForm;}(_react.Component);exports.default=


LoginForm;