import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  };
  // This binding is necessary to make `this` work in the callback
  onButtonPress = this.onButtonPress.bind(this);
  onButtonPress() {
    console.log('lalala');
  }
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="user@email.com"
            value={this.state.text}
            onChangeText={(email) => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Password"
            secureTextEntry
            placeholder="password"
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
          />
      </CardSection>
      <CardSection>
        <Button onPress={this.onButtonPress}>
          Log in
        </Button>
      </CardSection>
    </Card>

    );
  }
}

export default LoginForm;
