import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { UploadActions, DinamisImage } from '../actions/UploadActions';

class UploadScreen extends Component {
  componentWillMount() {
    this.props.DinamisImage();
  }
  pickImage() {
   this.props.UploadActions();
  }
    render() {
        return (
          <View style={styles.container}>
            <View>
              <Image
                source={{ uri: this.props.avatarSource }}
                style={styles.image}
              />
              <Text>{ this.props.avatarSource }</Text>
            </View>
          <TouchableOpacity onPress={this.pickImage.bind(this)}>
            <Text style={styles.upload}>
              Upload
            </Text>
          </TouchableOpacity>
        </View>
        );
    }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  image: {
    height: 200,
    resizeMode: 'contain',
  },
  upload: {
    textAlign: 'center',
    color: '#333333',
    padding: 10,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: 'gray'
  },
};

const mapStateToProps = ({ uploadimg }) => {
  const { avatarSource } = uploadimg;

  return { avatarSource };
};

export default connect(mapStateToProps, { UploadActions, DinamisImage })(UploadScreen);
