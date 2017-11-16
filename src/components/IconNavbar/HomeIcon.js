import React from 'react';
import { Image } from 'react-native';
import IconNav from './icon/home.png';

export const HomeIcon = (props) => {
    return (
         <Image
           source={IconNav}
           style={{ tintColor: props.focused ? 'black' : 'grey', width: 25, height: 25 }}
         />
    );
};
