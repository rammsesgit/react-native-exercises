import React, { useState } from 'react'
import { TextInput, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { Buttons, Containers, Texts } from '../styles'

import { Feather } from '@expo/vector-icons'

export default SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.background}>
      <Feather name='search' style={styles.icon} />
      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        style={styles.input}
        placeholder='Search'
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 6,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginBottom: 10
  },
  icon: {
    fontSize: 30,
    alignSelf: 'center',
    marginHorizontal: 15
  },
  input: {
    flex: 1,
    fontSize: 20
  }
})
