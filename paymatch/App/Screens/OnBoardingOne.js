import React, { Component } from 'react'
import { Dimensions, Image, Text, View } from 'react-native'
import Colors from '../../assets/shared/Colors'
import { StyleSheet } from 'react-native'
import Logo from '../../assets/images/logo.png'


const {width, height} = Dimensions.get('window');

const slides = [
  {
    id: '1',
    image: require('../../assets/images/onboarding/logo.png'),
    title: 'PayMatch',
    description: "",
  },

  {
    id: '2',
    image: require('../../assets/images/onboarding/send_money.png'),
    title: 'Send Money',
    description: "Send money easily and with one click everything will be sent every time you make a transaction",
  },

  {
    id: '3',
    image: require('../../assets/images/onboarding/Hand.png'),
    title: 'Easy To Use',
    description: "Very easy to use and easy to understand for those of you who are beginners",
  },
]

export default class OnBoardingOne extends Component {
  render() {
    return (
      <View style = {styles.constainer}>
        <Image source={Logo} style = {styles.logo}/>
        <Text style = {styles.appName}>PayMatch</Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  constainer: {
    backgroundColor: Colors.primary,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }, 

  logo: {
    height: 150,
    width: 200,
    objectFit: 'contain',
  },

  appName: {
    color: Colors.white,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 0,
  }
})
