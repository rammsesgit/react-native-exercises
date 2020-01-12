import React, { useReducer } from 'react'
import { StyleSheet, View } from 'react-native'

import ColorAdjuster from '../components/ColorAdjuster'

const COLOR_INCREMENT = 20

const reducer = (state, action) => {
  // action ===  { type: 'change_red', payload: 20 }
  switch (action.colorToChange) {
    case 'red':
      if (state.red + action.amount > 255 || state.red + action.amount < 0) {
        return state
      } else {
        return { ...state, red: state.red + action.amount }
      }

    case 'green':
      if (state.green + action.amount > 255 || state.green + action.amount < 0) {
        return state
      } else {
        return { ...state, green: state.green + action.amount }
      }

    case 'blue':
      if (state.blue + action.amount > 255 || state.blue + action.amount < 0) {
        return state
      } else {
        return { ...state, blue: state.blue + action.amount }
      }

    default:
      return state
  }
}

export default ColorScreen = () => {
  const [state, dispath] = useReducer(reducer, { red: 120, green: 120, blue: 120 })
  const { red, green, blue } = state
  console.log(state)

  return (
    <View>
      <ColorAdjuster
        onIncrease={() => dispath({ colorToChange: 'red', amount: COLOR_INCREMENT })}
        onDecrease={() => dispath({ colorToChange: 'red', amount: -COLOR_INCREMENT })}
        color='Red'
        currentValue={red}
      />
      <ColorAdjuster
        onIncrease={() => dispath({ colorToChange: 'green', amount: COLOR_INCREMENT })}
        onDecrease={() => dispath({ colorToChange: 'green', amount: -COLOR_INCREMENT })}
        color='Green'
        currentValue={green}
      />
      <ColorAdjuster
        onIncrease={() => dispath({ colorToChange: 'blue', amount: COLOR_INCREMENT })}
        onDecrease={() => dispath({ colorToChange: 'blue', amount: -COLOR_INCREMENT })}
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
  )
}

const styles = StyleSheet.create({})
