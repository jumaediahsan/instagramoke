import React,{ Component } from 'react';
import { View, Image, ScrollView, Dimensions } from 'react-native';

class PhotoGrid extends Component {

    render() {
      const { photoGridStyle, photoWrap, photoStyle } = styles;
        return (
            <ScrollView>

              <View style={photoGridStyle}>

                <View style={photoWrap}>
                  <Image style={photoStyle} source={require('./img/img1.jpg')}/>
                </View>
                <View style={photoWrap}>
                  <Image style={photoStyle} source={require('./img/img2.jpg')}/>
                </View>
                <View style={photoWrap}>
                  <Image style={photoStyle} source={require('./img/img3.jpg')}/>
                </View>
                <View style={photoWrap}>
                  <Image style={photoStyle} source={require('./img/img7.jpg')}/>
                </View>
                <View style={photoWrap}>
                  <Image style={photoStyle} source={require('./img/img8.jpg')}/>
                </View>
                <View style={photoWrap}>
                  <Image style={photoStyle} source={require('./img/img9.jpg')}/>
                </View>
                <View style={photoWrap}>
                  <Image style={photoStyle} source={require('./img/img4.jpg')}/>
                </View>
                <View style={photoWrap}>
                  <Image style={photoStyle} source={require('./img/img5.jpg')}/>
                </View>
                <View style={photoWrap}>
                  <Image style={photoStyle} source={require('./img/img10.jpg')}/>
                </View>
                <View style={photoWrap}>
                  <Image style={photoStyle} source={require('./img/img11.jpg')}/>
                </View>
                <View style={photoWrap}>
                  <Image style={photoStyle} source={require('./img/img12.jpg')}/>
                </View>
                <View style={photoWrap}>
                  <Image style={photoStyle} source={require('./img/img6.jpg')}/>
                </View>
              </View>

            </ScrollView>
        );
    }
}
const styles = {
  photoGridStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  photoWrap: {
    margin: 2,
    height: 120,
    width: (Dimensions.get('window').width / 3 ) - 6,

  },
  photoStyle: {
    flex: 1,
    width: null,
    alignSelf: 'stretch'
  }
}
export default PhotoGrid;
