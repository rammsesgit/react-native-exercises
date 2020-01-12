import React from 'react'
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native'

import { Buttons, Texts } from '../styles'

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={{ ...Texts.title }}>HomeScreen</Text>

      {/* <Button title='Images' onPress={() => navigation.navigate('Images')} /> */}

      <TouchableOpacity onPress={() => navigation.navigate('Component')}>
        <Text style={styles.button}>Go to Components Demo</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('List')}>
        <Text style={styles.button}>Go to List Demo</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Images')}>
        <Text style={styles.button}>Go to Images Demo</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Counter')}>
        <Text style={styles.button}>Go to Counter Demo</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Color')}>
        <Text style={styles.button}>Go to Color Demo</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('ColorReducer')}>
        <Text style={styles.button}>Go to ColorReducer Demo</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Box')}>
        <Text style={styles.button}>Go to Box Demo</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    ...Texts.title
  },
  button: {
    ...Buttons.baseRounded
  }
})

export default HomeScreen
