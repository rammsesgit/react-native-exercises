import React, { useState, useContext } from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native'
import BlogContext from '../context/BlogContext'

import { Buttons, Containers, Texts } from '../styles'

export default IndexScreen = () => {
  const { data, addBlogPost } = useContext(BlogContext)

  return (
    <View>
      <Text>IndexScreen</Text>
      <Button title='Add Post' onPress={addBlogPost} />
      <FlatList
        data={data}
        keyExtractor={({ title }) => title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})
