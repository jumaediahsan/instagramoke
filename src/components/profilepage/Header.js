import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { profileAction, ValueImage } from '../../actions/profileAction';
import Follow from './Follow';
import Devision from './Devision';


class Header extends Component {
  componentWillMount() {
    this.props.ValueImage();
  }
  showImageLibrary() {
   this.props.profileAction();
  }

    render() {
      const { headerStyle, secondheaderStyle, profileWrap, profileEpic, textStyle } = styles;
        return (
          <View style={headerStyle} >

            <View style={secondheaderStyle}>
              <TouchableOpacity onPress={this.showImageLibrary.bind(this)}>
                <View style={profileWrap}>
                  { this.props.avatarSource === null ? <Text style={textStyle}>Select a Photo</Text> :
                    <Image style={profileEpic} source={{ uri: this.props.avatarSource }} />
                  }
                </View>
              </TouchableOpacity>
                <Follow />
            </View>
                <Devision />
          </View>
        );
    }
}
const styles = {
  headerStyle: {
    flex: 1,
    width: null,
    alignSelf: 'stretch'
  },
  secondheaderStyle: {
    flex: 1,
    paddingLeft: 15,
    backgroundColor: '#fff',
    flexDirection: 'row',
    marginTop: 5,
  },
  profileWrap: {
    width: 160,
    height: 160,
    borderRadius: 100,
    borderColor: 'rgba(0, 0, 0, 0.5)',
    borderWidth: 6,
    alignSelf: 'flex-end'
  },
  textStyle: {
    paddingTop: 40
  },
  profileEpic: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#fff'
  },
};

const mapStateToProps = ({ profile }) => {
  const { avatarSource } = profile;
console.log(avatarSource);
  return { avatarSource };
};
export default connect(mapStateToProps, { profileAction, ValueImage })(Header);
