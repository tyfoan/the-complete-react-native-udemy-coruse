import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene
        key='login'
        componen={LoginForm}
        title='Please login'
      />
    </Router>
  );
};

export default RouterComponent;
