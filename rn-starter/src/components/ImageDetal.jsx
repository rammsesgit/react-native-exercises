import React from 'react'
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const styles = StyleSheet.create({})

export default ImageDetail = ({ title, img }) => {
  return (
    <View>
      <Image source={img} />
      <Text>{title}</Text>
    </View>
  )
}
