import React, { Component } from 'react';
import firebase from 'firebase';
import { View, Button } from 'react-native';
import { Header, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = {loggedIn : null};
  componentWillMount() {
    // Initialize Firebase
    firebase.initializeApp({
       apiKey: 'AIzaSyBeUNdsyrH0MeQO-OFJDQq4QUgAutry_K4',
       authDomain: 'auth-1925c.firebaseapp.com',
       databaseURL: 'https://auth-1925c.firebaseio.com',
       storageBucket: 'auth-1925c.appspot.com',
       messagingSenderId: '831137587989'
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
      case true:
      return <Button
                title="Log Out"
                onPress={() => firebase.auth().signOut()} />
      case false:
      return <LoginForm />;
      default:
      return <Spinner size='large' style={styles.spinnerStyle}/>;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    )
  }
}

const styles = {
  spinnerStyle : {
    paddingTop: 50
  }
}

export default App;
