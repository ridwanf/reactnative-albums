Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _common=require('./common');var

LoginForm=function(_Component){babelHelpers.inherits(LoginForm,_Component);function LoginForm(){var _ref;var _temp,_this,_ret;babelHelpers.classCallCheck(this,LoginForm);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=babelHelpers.possibleConstructorReturn(this,(_ref=LoginForm.__proto__||Object.getPrototypeOf(LoginForm)).call.apply(_ref,[this].concat(args))),_this),_this.
state={
email:'',
password:''},_temp),babelHelpers.possibleConstructorReturn(_this,_ret);}babelHelpers.createClass(LoginForm,[{key:'render',value:function render()


{var _this2=this;
return(
_react2.default.createElement(_common.Card,null,
_react2.default.createElement(_common.CardSection,null,
_react2.default.createElement(_common.Input,{
label:'Email',
placeholder:'user@email.com',
value:this.state.text,
onChangeText:function onChangeText(email){return _this2.setState({email:email});}})),


_react2.default.createElement(_common.CardSection,null,
_react2.default.createElement(_common.Input,{
label:'Password',
secureTextEntry:true,
placeholder:'password',
value:this.state.password,
onChangeText:function onChangeText(password){return _this2.setState({password:password});}})),


_react2.default.createElement(_common.CardSection,null,
_react2.default.createElement(_common.Button,null,'Log in'))));






}}]);return LoginForm;}(_react.Component);exports.default=


LoginForm;