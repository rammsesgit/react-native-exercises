import React, { useContext } from 'react'
import { Button, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'

import { Context as BlogContext } from '../context/BlogContext'

import { Entypo } from '@expo/vector-icons'

export default IndexScreen = () => {
  const { state, addBlogPost, deleteBlogPost } = useContext(BlogContext)

  return (
    <View style={{ flex: 1 }}>
      <Button title='Add Post' onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <Text style={styles.title}>{item.title}</Text>
              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <Entypo style={styles.icon} name='trash' />
              </TouchableOpacity>
            </View>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderColor: 'gray'
  },
  title: {
    fontSize: 20
  },
  icon: {
    fontSize: 30
  }
})
