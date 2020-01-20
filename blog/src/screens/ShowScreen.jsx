import React, { useContext } from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Context as BlogContext } from '../context/BlogContext'

import { Buttons, Containers, Texts } from '../styles'

export default ShowScreen = ({ navigation }) => {
  const { state } = useContext(BlogContext)
  const { title, id } = state.find(blogPost => blogPost.id === navigation.getParam('id'))
  return (
    <View>
      <Text>{title}</Text>
      <Text>{id}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
