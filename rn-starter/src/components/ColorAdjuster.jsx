import React, { useState } from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { Buttons, Containers, Texts } from '../styles'

export default ColorAdjuster = ({ color, currentValue, onIncrease, onDecrease }) => {
  return (
    <View style={{ ...Containers.base, flexDirection: 'row' }}>
      <TouchableOpacity onPress={() => onIncrease()}>
        <Text
          style={{
            ...Buttons.smallRounded,
            ...styles.button,
            backgroundColor: color.toLowerCase()
          }}
        >
          +
        </Text>
      </TouchableOpacity>

      <Text style={{ ...Texts.subTitle }}>
        {color}: {currentValue}
      </Text>

      <TouchableOpacity onPress={() => onDecrease()}>
        <Text
          style={{
            ...Buttons.smallRounded,
            ...styles.button,
            backgroundColor: color.toLowerCase()
          }}
        >
          -
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    fontWeight: 'bold',
    fontSize: 30,
    paddingHorizontal: 0,
    paddingVertical: 10
  }
})
