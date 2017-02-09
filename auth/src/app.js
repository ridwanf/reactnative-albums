import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    firebase.initializeApp({
       apiKey: 'AIzaSyBeUNdsyrH0MeQO-OFJDQq4QUgAutry_K4',
       authDomain: 'auth-1925c.firebaseapp.com',
       databaseURL: 'https://auth-1925c.firebaseio.com',
       storageBucket: 'auth-1925c.appspot.com',
       messagingSenderId: '831137587989'
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
