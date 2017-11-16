import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Follow extends Component {

    render() {
      const { barItem, barSparator, barTop, barBottom, barStyle } = styles;
        return (
          <View style={barStyle}>
            <View style={[barItem, barSparator]}>
              <Text style={barTop}> 12</Text>
              <Text style={barBottom}>Kiriman</Text>
            </View>
            <View style={[barItem, barSparator]}>
              <Text style={barTop}>12 K</Text>
              <Text style={barBottom}>Followers</Text>
            </View>
            <View style={[barItem, barSparator]}>
              <Text style={barTop}> 14 </Text>
              <Text style={barBottom}>Following</Text>
            </View>
          </View>
        );
    }
}

const styles = {
  barStyle: {
    borderTopColor: '#fff',
    borderTopWidth: 4,
    backgroundColor: 'green',
    flexDirection: 'row'
  },
  barItem: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  barSparator: {
    borderLeftWidth: 8,
    borderColor: '#fff'
  },
  barTop: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
  barBottom: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold'
  }
}
