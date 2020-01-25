import React, { useContext } from 'react'
import { Button, StyleSheet, TextInput, Text, TouchableOpacity, View } from 'react-native'
import { Context as BlogContext } from '../context/BlogContext'

import BlogPostForm from '../components/BlogPostForm'

export default CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(BlogContext)

  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        addBlogPost(title, content, () => navigation.navigate('Index'))
      }}
    />
  )
}

const styles = StyleSheet.create({})
