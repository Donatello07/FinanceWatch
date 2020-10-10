import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Image,
  Text,
  Dimensions,
  KeyboardAvoidingView
} from 'react-native';
import ButtonSubmit from '../component/buttonSubmit'
import * as Font from 'expo-font'
import Loading from '../component/LoadingScreen';

export default class LandingScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      KeyWords: "",
      isFontLoaded: false
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Livvic': require('../../assets/Fonts/Livvic-Light.ttf')
    });
    this.setState({ isFontLoaded: true });
  }

  static navigationOptions = {
    header: null,
  }

  onLoginClick = () => {
    if (this.state.KeyWords == "12345") {
      this.props.navigation.navigate('Home')
    }
    else {
      alert("input 12345")
    }
  }

  onTextInputChange = (text) => {
    this.setState({ KeyWords: text })
  }

  render() {
    const logo = require("../../assets/logo-small.png");

    if (this.state.isFontLoaded) {
      return (
        <View style={LandingStyle.container}>
          <View style={{ position: 'absolute', top: 40 }}>
            <Image source={logo} style={{ width: 100, height: 100, alignSelf: 'center' }} />
            <Text style={{ color: '#ffff', fontFamily: 'Livvic', fontSize: 20 }}>Watch! Financial </Text>
          </View>

          <View style={LandingStyle.view}>

            <TextInput secureTextEntry={true}
              style={LandingStyle.inputText}
              keyboardType={'numeric'}
              onChangeText={this.onTextInputChange} />

          </View>

          <KeyboardAvoidingView behavior="padding" enabled>

            <View style={{ width: 80, height: 60 }}>
              <ButtonSubmit title="LOG IN" onpress={this.onLoginClick} />

            </View>

          </KeyboardAvoidingView>

        </View>
      );
    }
    else {
      return (
        <Loading />
      )
    }


  }
}

const LandingStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#003333'
  },
  view: {
    height: 60,
    flex: 0.1,
    flexDirection: "row",
  },
  inputText: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width - 50,
    backgroundColor: '#004d4d',
    borderColor: '#000',
    borderRadius: 5,
    borderWidth: 2,
    letterSpacing: 20,
    textAlign: 'center'
  },
})

