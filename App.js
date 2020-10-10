import React from 'react';

import { createStackNavigator, createAppContainer } from 'react-navigation';
import LandingScreen from './src/screen/LandingScreen';
import HomeScreen from './src/screen/HomeScreen';
import InputScreen from './src/screen/InputScreen';
import SettingScreen from './src/screen/SettingScreen';
import StatisticScreen from './src/screen/StatisticScreen';
import { fadeIn } from 'react-navigation-transitions';

const MainNavigator = createStackNavigator({
  Landing: LandingScreen,
  Home: HomeScreen,
  Input: InputScreen,
  Setting: SettingScreen,
  Statistic: StatisticScreen
}, {
    initialRouteName: 'Landing',
    transitionConfig: () => fadeIn(),
  });

const AppNavigator = createAppContainer(MainNavigator);

export default class App extends React.Component {

  render() {
    return (
      <AppNavigator />
    )
  }
}