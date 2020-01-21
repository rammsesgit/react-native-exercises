import React, { useContext } from 'react'
import { Button, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'

import { Context as BlogContext } from '../context/BlogContext'

import { FontAwesome, Feather } from '@expo/vector-icons'

export default IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost } = useContext(BlogContext)

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={state}
        keyExtractor={({ id }) => id}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Show', { id: item.id })
              }}
            >
              <View style={styles.row}>
                <Text style={styles.title}>
                  {index + 1} - {item.title}
                </Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <FontAwesome style={styles.icon} name='trash-o' />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Create')
        }}
      >
        <Feather name='file-plus' size={30} style={{ marginRight: 10 }} />
      </TouchableOpacity>
    )
  }
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
