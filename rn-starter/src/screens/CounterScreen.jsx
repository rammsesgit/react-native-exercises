import React, { useState } from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const styles = StyleSheet.create({})

export default CounterScreen = () => {
  const [counter, setCounter] = useState(0)

  return (
    <View>
      <Button title='Increase' onPress={() => setCounter(counter + 1)} />
      <Text> </Text>
      <Button title='Decrease' onPress={() => setCounter(counter - 1)} />
      <Text>Current cout: {counter}</Text>
    </View>
  )
}
