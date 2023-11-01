import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'
import Colors from '../../assets/shared/Colors'
import { StyleSheet } from 'react-native'
import Logo from '../../assets/shared/logo.png'

export default class OnBoardingOne extends Component {
  render() {
    return (
      <View style = {styles.constainer}>
        <Image source={Logo} style = {styles.logo}/>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  constainer: {
    backgroundColor: Colors.primary,
    height: '100%',
    width: '100%',
  }, 

  logo: {
    height: 100,
    width: 100,
  },
})
