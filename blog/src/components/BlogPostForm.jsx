import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

import { Buttons, Containers, Texts } from '../styles'

export default BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title)
  const [content, setContent] = useState(initialValues.content)

  return (
    <View>
      <Text style={styles.label}>Title:</Text>
      <TextInput style={styles.input} value={title} onChangeText={text => setTitle(text)} />
      <Text style={styles.label}>Content:</Text>
      <TextInput style={styles.input} value={content} onChangeText={text => setContent(text)} />

      <Button title='Save Post Post' onPress={() => onSubmit(title, content)} />
    </View>
  )
}

BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: ''
  }
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
