import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Devision extends Component {

    render() {
      const { nameWrap, nameStyle, posStyle } = styles;
        return (
          <View style={nameWrap}>
            <Text style={nameStyle}>Jumaedi Ahsan</Text>
            <Text style={posStyle}>React Developer</Text>
          </View>
        );
    }
}

const styles = {
  nameWrap: {
    alignItems: 'flex-start',
    marginTop: 5,
    paddingLeft: 20,
    backgroundColor: 'grey',
  },
  nameStyle: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'monospace',

  },
  posStyle: {
    fontSize: 13,
    color: '#fff',
    fontFamily: 'monospace',
  },

};
