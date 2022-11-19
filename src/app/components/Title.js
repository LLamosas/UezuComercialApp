import React, { Component } from 'react'
import { View, Text } from 'react-native'

import { headerStyles, generalStyles, titleStyles } from '../../modules/resources/styles';


class Title extends Component {

    render() {
        return (
            <View style={titleStyles.container}>
                <Text style={titleStyles.text}>{this.props.title}</Text>
            </View>
        );
    }

}

export default Title
