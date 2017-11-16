import React from 'react';
import { Image } from 'react-native';
import UploadNav from './icon/upload.png';

export const UploadIcon = (props) => {
    return (
         <Image
           source={UploadNav}
           style={{ tintColor: props.focused ? 'black' : 'grey', width: 25, height: 25 }}
         />
    );
};
