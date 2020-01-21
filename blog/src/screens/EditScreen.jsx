import React, { useState } from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { Buttons, Containers, Texts } from '../styles'

export default EditScreen = ({ navigation }) => {
  const id = navigation.getParam('id')
  return (
    <View>
      <Text>EditScreen {id}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
