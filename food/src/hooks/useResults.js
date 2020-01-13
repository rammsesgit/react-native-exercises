import { useEffect, useState } from 'react'

import yelp from '../api/yelp'

export default () => {
  const [results, setResults] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    searchApi('pasta')
  }, [])

  const searchApi = async searchTerm => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          latitude: 25.211,
          longitude: -101.0563
        }
      })
      setResults(response.data.businesses)
    } catch (error) {
      setErrorMessage('Something went wrong')
    }
  }

  return [searchApi, results, errorMessage]
}
