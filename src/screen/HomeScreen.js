import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import BodyContent from '../component/HomeBodyContent';
import FooterTabs from '../component/footer'
import Loading from '../component/LoadingScreen';
import ButtonSubmit from '../component/buttonSubmit';
import ActionBarImage from '../component/ActionBarLeft';
import * as Font from 'expo-font'
import TodayExpense from '../component/TodayExpense';

export default class HomeScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            lastInput: [],
            iconsProp: ['#ff9900', 'black', 'black'],
            isFontLoaded: false
        }
    }

    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#004d4d',
        },
        headerLeft: <ActionBarImage />
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

    componentWillMount() {

        fetch('http://192.168.1.5:852/expense?q=last')
            .then(respon => respon.json())
            .then(data => { this.setState({ lastInput: data }); })

        Font.loadAsync({ 'Livvic': require('../../assets/Fonts/Livvic-Light.ttf'), 'Livvic-Bold': require('../../assets/Fonts/Livvic-Bold.ttf') })
            .then(() => this.setState({ isFontLoaded: true }))


    }
    render() {
        const { lastInput, isFontLoaded } = this.state
        if (lastInput.length && isFontLoaded) {
            return (

                <View style={{ backgroundColor: "#003333", flex: 1, alignItems: 'center', }}>
                    <View style={{ height: 50 }}>
                        <TodayExpense data={lastInput} />
                    </View>
                    <View style={{ height: 350 }}>
                        <ScrollView contentContainerStyle={{ paddingVertical: 20 }} showsVerticalScrollIndicator={false} >
                            {
                                lastInput.map((item, i) => {
                                    return (
                                        <BodyContent onpress={() => this.props.navigation.navigate('Input')} data={lastInput[i]} key={i} />
                                    )
                                })
                            }
                        </ScrollView>
                    </View>

                    <View style={{ width: 80, height: 60, margin: 20 }}>
                        <ButtonSubmit title="Refresh" onpress={() => this.props.navigation.navigate('Landing')} />
                    </View>
                    <FooterTabs iconColor={this.state.iconsProp} onClickFunction={[this.gotoHome, this.gotoStatistic, this.gotoSetting]} />
                </View>
            );
        }
        else {
            return isFontLoaded ? (
                <View style={{ backgroundColor: "#003333", flex: 1, alignItems: 'center', }}>
                    <View style={{ height: 50 }}>

                    </View>
                    <View style={{ height: 350 }}>
                        <ScrollView contentContainerStyle={{ paddingVertical: 20 }} showsVerticalScrollIndicator={false} >
                            <Text>
                                <Text style={{
                                    fontFamily: 'Livvic-Bold', color: '#ff9900', textTransform: 'uppercase', fontSize: 20, textShadowColor: 'rgba(0, 0, 0, 0.75)',
                                    textShadowOffset: { width: -1, height: 1 },
                                    textShadowRadius: 10
                                }}>Data Not Found </Text>
                            </Text>
                        </ScrollView>
                    </View>

                    <View style={{ width: 80, height: 60, margin: 20 }}>
                        <ButtonSubmit title="Input" onpress={() => this.props.navigation.navigate('Input')} />
                    </View>
                    <FooterTabs iconColor={this.state.iconsProp} onClickFunction={[this.gotoHome, this.gotoStatistic, this.gotoSetting]} />
                </View>
            ) : (

                    <Loading />
                )
        }

    }
}

