import React from 'react';
import { Image } from 'react-native';
import Profilebar from './icon/profile.png';

export const ProfileIcon = (props) => {
    return (
            <Image
                source={Profilebar}
                style={{ tintColor: props.focused ? 'black' : 'grey', width: 30, height: 30 }}
            />
    );
};
