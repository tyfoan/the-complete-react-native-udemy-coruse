import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

const style = {
  errorTextStyle: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

class LoginForm extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: '#fff' }}>
          <Text style={style.errorTextStyle}>
            { this.props.error }
          </Text>
        </View>
      );
    }
    return null;
  }

  renderButton() {
    if(this.props.loading) {
      return <Spinner size='large' />;
    }
    else {
      return (
        <Button
          onPress={this.onButtonPress.bind(this)}
        >
          LogIn
        </Button>
      );
    }
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label='Email'
            placehilder='email@example.com'
            onChange={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            label='password'
            placehilder='password'
            onChange={this.onPasswordChange.bind(this)}
            value={this.props.passwrod}
            secureTextEntry={true}
          />
        </CardSection>

        {this.renderError()}

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading
  };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
