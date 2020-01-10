import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const ComponentsScreen = () => {
  const test = { message: 'Hello Alca' }

  return (
    <View>
      <Text style={styles.textStyle}> This is the components screen </Text>
      <Text> {test.message} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: 'red'
  }
})

export default ComponentsScreen
