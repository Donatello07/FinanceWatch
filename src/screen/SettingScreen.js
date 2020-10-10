import React from 'react';
import { View, Text } from 'react-native';
import FooterTabs from '../component/footer'
import Loading from '../component/LoadingScreen';
import ActionBarImage from '../component/ActionBarLeft';
import ConfirmationModal from '../component/ConfirmationModal';
import * as Font from 'expo-font';

export default class SettingScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            iconsProp: ['black', 'black', '#ff9900'],
            isFontLoaded: false
        }
    }
    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#004d4d',
        },
        headerLeft: <ActionBarImage />

    }
    componentWillMount() {
        Font.loadAsync({ 'Livvic': require('../../assets/Fonts/Livvic-Light.ttf'), 'Livvic-Bold': require('../../assets/Fonts/Livvic-Bold.ttf') })
            .then(() => this.setState({ isFontLoaded: true }))
    }
    gotoHome = () => {
        this.props.navigation.navigate('Home')
    }
    gotoStatistic = () => {
        this.props.navigation.navigate('Statistic')
    }
    gotoSetting = () => {
        this.props.navigation.navigate('Setting')
    }

    render() {
        // const { lastInput } = this.state
        // if (lastInput.length) {
            return (
                this.state.isFontLoaded ?
                    <View style={{ backgroundColor: '#003333', flex: 1, alignItems: 'center', justifyContent: 'center', }}>
    
                        <View style={{ margin: 20, position: 'relative', top: -30 }}>
                            <Text style={{ fontFamily: 'Livvic', color: 'white', alignSelf: 'center' }}> Ini Adalah Halaman Setting</Text>
                            {/* <ConfirmationModal/> */}
                        </View>
                        <FooterTabs iconColor={this.state.iconsProp} onClickFunction={[this.gotoHome, this.gotoStatistic, this.gotoSetting]} />
                    </View>
                    :
                    <Loading />
            );
        // }
        // else {
        //     return (
        //         <Loading/>
        //     )
        // }

    }
}

