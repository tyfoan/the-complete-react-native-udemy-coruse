import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyA9kjp4__gnOssfvbfWo-gO3xoeR06qy08',
      authDomain: 'manager-bdf12.firebaseapp.com',
      databaseURL: 'https://manager-bdf12.firebaseio.com',
      projectId: 'manager-bdf12',
      storageBucket: 'manager-bdf12.appspot.com',
      messagingSenderId: '756374698631'
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;

