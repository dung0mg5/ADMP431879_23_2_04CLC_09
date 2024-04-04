
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const SplashScreen = () => {
  return (
    <View>
      <LinearGradient colors={['#00FF94', '#2D6ADC']} style={styles.container}>
      <View className="h-full w-ful">
        <View className="flex-1 justify-center items-center">
          <Image className="h-50 w-50" source={require('../assets/Group.png')} />
          </View>
      </View>
    </LinearGradient>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})