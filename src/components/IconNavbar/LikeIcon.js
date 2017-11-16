import React from 'react';
import { Image } from 'react-native';
import Lovebar from './icon/love.png';

export const LikeIcon = (props) => {
    return (
            <Image
                source={Lovebar}
                style={{ tintColor: props.focused ? 'black' : 'grey', width: 30, height: 30 }}
            />
    );
};
