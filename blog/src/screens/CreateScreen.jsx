import React, { useState, useContext } from 'react'
import { Button, StyleSheet, TextInput, Text, TouchableOpacity, View } from 'react-native'
import { Context as BlogContext } from '../context/BlogContext'

import { Buttons, Containers, Texts } from '../styles'

export default CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const { addBlogPost } = useContext(BlogContext)

  return (
    <View>
      <Text style={styles.label}>Title:</Text>
      <TextInput style={styles.input} value={title} onChangeText={text => setTitle(text)} />
      <Text style={styles.label}>Content:</Text>
      <TextInput style={styles.input} value={content} onChangeText={text => setContent(text)} />

      <Button
        title='Add Post'
        onPress={() => {
          addBlogPost(title, content, () => {
            navigation.navigate('Index')
          })
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    margin: 5,
    marginBottom: 15,
    padding: 5,
    borderRadius: 5
  },
  label: {
    fontSize: 20,
    marginLeft: 5
  }
})
