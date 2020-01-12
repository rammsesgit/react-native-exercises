import React from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import ImageDetail from '../components/ImageDetal'

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: 'center'
  }
})

export default ImagesScreen = () => {
  return (
    <View>
      <Text style={styles.title}>Image Screen</Text>
      <ImageDetail title='Forest' img={require('../assets/mountain.jpg')} />
      <ImageDetail title='Beach' img={require('../assets/beach.jpg')} />
      <ImageDetail title='Mountain' img={require('../assets/forest.jpg')} />
    </View>
  )
}
