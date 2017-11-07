import firebase from 'firebase';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, Spinner } from './src/components/common';
import LoginForm from './src/components/LoginForm';

class App extends Component {

  state = {
    loggedIn: null
  };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBPNpa1dcGP7nusE-6KimDSr-kF68vlqd0',
      authDomain: 'auth-ebbb3.firebaseapp.com',
      databaseURL: 'https://auth-ebbb3.firebaseio.com',
      projectId: 'auth-ebbb3',
      storageBucket: 'auth-ebbb3.appspot.com',
      messagingSenderId: '27375480422'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true: return (
        <Button
          onPress={() => firebase.auth().signOut()}
        >
          Log Out
        </Button>
      );
      case false: return <LoginForm />;
      default: return <Spinner size='large' />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
