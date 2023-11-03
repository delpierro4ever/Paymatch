import React, { Component } from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'


//Navigation 
import { NativeStackScreenProps } from '@react-navigation/native-stack'


const  HomeScreen = ({navigation}) => {

    return (
      <SafeAreaView style = {styles.continer }>
        <Text> textInComponent </Text>
        <TouchableOpacity onPress = { () => navigation.navigate('OnBoardingOne')}>Next</TouchableOpacity>
      </SafeAreaView>
    )
}

export default HomeScreen
