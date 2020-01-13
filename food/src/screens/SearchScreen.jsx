import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import SearchBar from '../components/SearchBar'
import ResultsList from '../components/ResultsList'

import { Texts } from '../styles'
import useResults from '../hooks/useResults'

export default SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [searchApi, results, errorMessage] = useResults()

  const filterResultsByPrice = price => {
    return results.filter(result => {
      return result.price === price
    })
  }

  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searchApi(term)} />
      {errorMessage ? <Text style={{ ...Texts.errorMessage }}>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>

      <ResultsList results={filterResultsByPrice('$')} title='Cost Effective' />
      <ResultsList results={filterResultsByPrice('$$')} title='Bit Pricier' />
      <ResultsList results={filterResultsByPrice('$$$')} title='Big Spender' />
    </View>
  )
}

const styles = StyleSheet.create({})
