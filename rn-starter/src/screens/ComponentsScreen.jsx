import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
    color: 'red'
  },
  name: {
    fontSize: 30,
    color: 'black'
  }
})

export default ComponentsScreen = () => {
  const test = { message: 'Hello Alca' }
  const name = 'Rammses'

  return (
    <View>
      <Text style={styles.textStyle}> This is the components screen </Text>
      <Text style={styles.name}> {name} </Text>
    </View>
  )
}
