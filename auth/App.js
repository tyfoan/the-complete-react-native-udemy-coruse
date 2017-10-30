import firebase from 'firebase';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm';

class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBPNpa1dcGP7nusE-6KimDSr-kF68vlqd0',
      authDomain: 'auth-ebbb3.firebaseapp.com',
      databaseURL: 'https://auth-ebbb3.firebaseio.com',
      projectId: 'auth-ebbb3',
      storageBucket: 'auth-ebbb3.appspot.com',
      messagingSenderId: '27375480422'
    });
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        <LoginForm />
      </View>
    );
  }
}

export default App;
