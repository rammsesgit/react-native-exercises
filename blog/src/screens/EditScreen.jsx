import React, { useContext } from 'react'
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

import { Context as BlogContext } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

export default EditScreen = ({ navigation }) => {
  const id = navigation.getParam('id')
  const { state, updateBlogPost } = useContext(BlogContext)
  const blogpost = state.find(blogpost => blogpost.id === id)

  return (
    <BlogPostForm
      initialValues={{ title: blogpost.title, content: blogpost.content }}
      onSubmit={(title, content) => {
        updateBlogPost(id, title, content)
      }}
    />
  )
}

const styles = StyleSheet.create({})
