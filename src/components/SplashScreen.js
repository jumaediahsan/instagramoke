import React,{ Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

class SplashScreen extends Component {

  onTextSignUp(){
    Actions.signupform()
  }
  onTextSignIn(){
    Actions.auth()
  }

    render() {
      const { viewStyle, instagramStyle, signStyle } = styles;
        return (
            <View style={viewStyle}>
              <Text style={instagramStyle}>Instagram</Text>

              <Text
                onPress={this.onTextSignUp.bind(this)}
                style={signStyle}
              >
                Buat Akun dengan Email
              </Text>

              <Text>Sudah Punya Akun?</Text>
              <Text
                onPress={this.onTextSignIn.bind(this)}
                style={signStyle}
              >
                Masuk
              </Text>
            </View>
        );
    }
}
const styles= {
  viewStyle: {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  instagramStyle: {
    fontSize:35,
    fontFamily: 'monospace'
  },
  signStyle:{
    backgroundColor:'blue',
    color:'#fff',
    fontSize:15
  }
};

export default SplashScreen;
