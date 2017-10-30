import firebase from 'firebase';
import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input } from './common';

const style = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: ''
  };

  onButtonPress() {
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch(() => {
            this.setState({ error: 'Authentication faild' });
          });
      });
  }

  render() {
    const { errorTextStyle } = style;
    return (
      <Card>
        <CardSection>
          <Input
            placeholder='user@example.com'
            label='Email'
            value={this.state.email}
            onChange={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry={true}
            placeholder='password'
            label='Password'
            value={this.state.password}
            onChange={password => this.setState({ password })}
          />
        </CardSection>

        <Text style={errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          <Button
            onPress={this.onButtonPress.bind(this)}
          >
            Log in
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
