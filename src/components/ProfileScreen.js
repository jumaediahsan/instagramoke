import React,{ Component } from 'react';
import { View } from 'react-native';
import Header from './profilepage/Header';
import PhotoGrid from './profilepage/PhotoGrid'

export default class ProfileScreen extends Component {

    render() {
        return (
        <View style={{ flex: 1 }}>
          <Header />
          <PhotoGrid />
        </View>
        );
    }
}
