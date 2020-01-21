import React, { useContext } from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Context as BlogContext } from '../context/BlogContext'

import { FontAwesome } from '@expo/vector-icons'

export default ShowScreen = ({ navigation }) => {
  const { state } = useContext(BlogContext)
  const { title, content } = state.find(blogPost => blogPost.id === navigation.getParam('id'))
  return (
    <View>
      <Text>{title}</Text>
      <Text>{content}</Text>
    </View>
  )
}

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Edit', { id: navigation.getParam('id') })
        }}
      >
        <FontAwesome name='edit' size={30} style={{ marginRight: 10 }} />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({})
