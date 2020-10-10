import React from 'react';
import { View, Dimensions } from 'react-native';
import NavigationIcon from './navigationIcon';
export default FooterTabs = ({ iconColor,onClickFunction }) => {
    const navItem = [{
        iconName: 'home',
        text: 'Home',
    }, {
        iconName: 'line-chart',
        text: 'Statistic',
        color: 'red'
    }, {
        iconName: 'gear',
        text: 'Setting',
        color: 'black'
    }]


    return (
        <View style={{
            backgroundColor: '#004d4d',
            flex: 0.1,
            flexDirection: "row",
            position: 'absolute',
            bottom: 0,
            width: Dimensions.get('window').width
        }}>
            <NavigationIcon icon={navItem[0]} color={iconColor[0]} onClickFunction={onClickFunction[0]}/>
            <NavigationIcon icon={navItem[1]} color={iconColor[1]} onClickFunction={onClickFunction[1]}/>
            <NavigationIcon icon={navItem[2]} color={iconColor[2]} onClickFunction={onClickFunction[2]}/>
        </View>
    );
}