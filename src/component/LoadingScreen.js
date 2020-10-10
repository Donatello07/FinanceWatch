import React from 'react';
import {
    Image,
    View,
    Text,
    ActivityIndicator
} from 'react-native'

export default Loading = () => {
    const logo = require("../../assets/logo-small.png");
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            opacity: 50,
            justifyContent: 'center',
            backgroundColor: '#003333'
        }}>

            <View style={{ position: 'absolute', top: 70 }}>
                <Image source={logo} style={{ width: 100, height: 100, alignSelf: 'center' }} />
            </View>
            <ActivityIndicator size="large" color="#0000ff" />

        </View>
    )

}