import React from 'react';
import { Image } from 'react-native';
import IncomeBar from './icon/search.png';

export const SearchIcon = (props) => {
    return (
            <Image
                source={IncomeBar}
                style={{ tintColor: props.focused ? 'black' : 'grey', width: 30, height: 30 }}
            />
    );
};
