import React, { useState } from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native'

import ColorAdjuster from '../components/ColorAdjuster'

import { Buttons, Texts } from '../styles'

const COLOR_INCREMENT = 20

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)

  return `rgb(${red},${green},${blue})`
}

export default ColorScreen = () => {
  const [colors, setColors] = useState([])
  const [red, setRed] = useState(125)
  const [green, setGreen] = useState(125)
  const [blue, setBlue] = useState(125)

  const setColor = (color, change) => {
    switch (color) {
      case 'red':
        red + change > 255 || red + change < 0 ? null : setRed(red + change)
        break
      case 'green':
        green + change > 255 || green + change < 0 ? null : setGreen(green + change)
        break
      case 'blue':
        blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change)
        break
    }
  }

  return (
    <View>
      <View>
        <TouchableOpacity
          onPress={() => {
            setColors([...colors, randomRgb()])
          }}
        >
          <Text style={{ ...Buttons.base }}>Add a color</Text>
        </TouchableOpacity>

        <FlatList
          data={colors}
          horizontal
          keyExtractor={item => item}
          renderItem={({ item }) => {
            return <View style={{ height: 50, width: 50, backgroundColor: item }}></View>
          }}
        />
      </View>

      <View>
        <ColorAdjuster
          onIncrease={() => setColor('red', COLOR_INCREMENT)}
          onDecrease={() => setColor('red', -COLOR_INCREMENT)}
          color='Red'
          currentValue={red}
        />
        <ColorAdjuster
          onIncrease={() => setColor('green', COLOR_INCREMENT)}
          onDecrease={() => setColor('green', -COLOR_INCREMENT)}
          color='Green'
          currentValue={green}
        />
        <ColorAdjuster
          onIncrease={() => setColor('blue', COLOR_INCREMENT)}
          onDecrease={() => setColor('blue', -COLOR_INCREMENT)}
          color='Blue'
          currentValue={blue}
        />
        <View
          style={{
            height: 140,
            width: '90%',
            marginHorizontal: '5%',
            backgroundColor: `rgb(${red},${green},${blue})`
          }}
        ></View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})
