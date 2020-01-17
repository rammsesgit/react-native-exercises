import React, { useState } from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'

import { Buttons, Containers, Texts } from '../styles'

export default ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url || '../../assets/icon.png' }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 3
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16
  }
})
