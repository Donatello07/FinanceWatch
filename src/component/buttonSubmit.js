import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

export default ButtonSubmit = ({ title, onpress }) => {
    return (
        <View style={{ borderColor: 'black', borderWidth: 2, padding: 5, backgroundColor: '#ff9900' }}>
            <TouchableOpacity onPress={onpress}>
                <Text style={{
                    color: 'black', textTransform: 'uppercase',
                    alignItems: 'center', textAlign: 'center', fontFamily: 'Livvic',
                    justifyContent: 'center', fontSize: 15
                }}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}