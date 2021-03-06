import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'

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
    <>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searchApi(term)} />
      {errorMessage ? <Text style={{ ...Texts.errorMessage }}>{errorMessage}</Text> : null}

      <ScrollView>
        <ResultsList results={filterResultsByPrice('$')} title='Cost Effective' />
        <ResultsList results={filterResultsByPrice('$$')} title='Bit Pricier' />
        <ResultsList results={filterResultsByPrice('$$$')} title='Big Spender' />
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({})
