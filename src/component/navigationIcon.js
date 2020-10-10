import React from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { Icon } from 'react-native-elements'

export default NavigationIcon = ({ icon, color, onClickFunction }) => {
    return (
        <TouchableOpacity onPress={onClickFunction}>
            <View style={{ marginLeft: 40, marginRight: 40, marginBottom: 10, marginTop: 10 }}>
                <Icon
                    name={icon.iconName}
                    type='font-awesome'
                    color={color} />
                <Text>
                    {icon.text}
                </Text>
            </View>
        </TouchableOpacity>
    )
};