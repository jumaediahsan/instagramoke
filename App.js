import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './src/Router';
import reducers from './src/reducers';

export default class App extends Component{
  componentWillMount() {
    const config = {
       apiKey: 'AIzaSyBPkDWBB1uRULcS7QTobjSRsCwgORtH7pw',
       authDomain: 'instagramclone-a5acc.firebaseapp.com',
       databaseURL: 'https://instagramclone-a5acc.firebaseio.com',
       projectId: 'instagramclone-a5acc',
       storageBucket: 'instagramclone-a5acc.appspot.com',
       messagingSenderId: '498612729297'
 };
  firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
          <Router />
      </Provider>
    );
  }
}
