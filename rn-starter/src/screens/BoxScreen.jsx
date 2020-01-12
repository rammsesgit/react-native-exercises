import React, { useState } from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { Buttons, Containers, Texts } from '../styles'

export default BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text
        style={{
          ...Texts.title,
          ...styles.textSyle,
          ...StyleSheet.absoluteFill,
          color: 'gray',
          borderColor: 'gray'
        }}
      >
        Box Screen
      </Text>

      <View style={{ borderWidth: 1, borderColor: '#f00', margin: 10 }}>
        <Text style={styles.child}>Child 1...</Text>
        <Text style={{ ...styles.child, alignSelf: 'flex-end' }}>Child 2</Text>
        <Text style={styles.child}>Child 3</Text>
      </View>

      <View style={styles.view2}>
        <Text style={styles.child2}>Child 1</Text>
        <Text style={{ ...styles.child2, flex: 1, bottom: 5 }}>Child 2...</Text>
        <Text style={{ ...styles.child2, flex: 1 }}>Child 3</Text>
      </View>

      <View style={styles.view2}>
        <Text style={{ backgroundColor: 'gray', margin: 5 }}>Child 1</Text>
        <Text style={{ backgroundColor: 'gray', margin: 5, position: 'absolute', top: 10 }}>
          Child 2...
        </Text>
        <Text style={{ backgroundColor: 'gray', margin: 5 }}>Child 3</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center'
  },
  textSyle: {
    borderWidth: 1,
    borderColor: '#f00',
    margin: 10
  },
  child: {
    borderWidth: 1,
    borderColor: '#f00',
    margin: 10
  },
  view2: {
    borderWidth: 1,
    borderColor: '#000',
    flexDirection: 'row',
    margin: 10
  },
  child2: {
    borderWidth: 1,
    borderColor: '#0f0',
    margin: 10
  }
})
