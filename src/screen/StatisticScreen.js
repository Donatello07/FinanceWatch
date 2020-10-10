import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FooterTabs from '../component/footer'
import Loading from '../component/LoadingScreen';
import ActionBarImage from '../component/ActionBarLeft';
import * as Font from 'expo-font';
import MyLineChart from '../component/chart/LineChart';
import MyPieChart from '../component/chart/PieChart';

export default class StatisticScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            iconsProp: ['black', '#ff9900', 'black'],
            isFontLoaded: false,
            data: [],
            date: new Date(),
        }
    }
    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#004d4d',
        },
        headerLeft: <ActionBarImage />

    }




    componentWillMount() {
        fetch('192.168.1.5:852/expense?q=all')
            .then(respon => respon.json())
            .then(result => { this.setState({ data: result }); })

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
        const { data } = this.state

        return (
            this.state.isFontLoaded && data.length ?
                <View style={{ backgroundColor: '#003333', flex: 1, alignItems: 'center', justifyContent: 'center', }}>

                    <View style={{ margin: 20, position: 'relative', top: -30 }}>
                        <Text style={{ fontFamily: 'Livvic', color: 'white', alignSelf: 'center' }}> Ini Adalah Halaman Statistic</Text>

                        <TouchableOpacity onPress={() => this.setState({ refreshTime: new Date() })}>
                            <MyLineChart data={data} />
                        </TouchableOpacity>
                        <MyPieChart />
                    </View>
                    <FooterTabs iconColor={this.state.iconsProp} onClickFunction={[this.gotoHome, this.gotoStatistic, this.gotoSetting]} />
                </View>
                :
                <Loading />
        );


    }
}

