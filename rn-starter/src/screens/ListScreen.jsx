import React from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'

const styles = StyleSheet.create({
  rowList: {
    padding: 10
  }
})

export default ListScreen = () => {
  /*   const friends = [
    { name: 'Billie Mullen', key: '1' },
    { name: 'Rickey Sharp', key: '2' },
    { name: 'Reynaldo Rogers', key: '3' },
    { name: 'Louise Slater', key: '4' },
    { name: 'William Mccarty', key: '5' },
    { name: 'Celeste Holmes', key: '6' },
    { name: 'Lucy Moss', key: '7' },
    { name: 'Frances Merritt', key: '8' },
    { name: 'Cherie Barron', key: '9' },
    { name: 'Lara Noble', key: '10' }
  ] */
  const friends = [
    { name: 'Thad Brock', city: 'Detroit', state: 'MI', cp: 48233 },
    { name: 'Patrice Ruiz', city: 'Austin', state: 'TX', cp: 78710 },
    { name: 'Kenneth Patrick', city: 'Detroit', state: 'MI', cp: 48233 },
    { name: 'Lorrie Eaton', city: 'Minneapolis', state: 'MN', cp: 55401 },
    { name: 'Shane Day', city: 'Omaha', state: 'NE', cp: 68108 },
    { name: 'Tasha Carver', city: 'Clearwater', state: 'FL', cp: 33575 },
    { name: 'Angelica Schwartz', city: 'Albany', state: 'NY', cp: 12212 },
    { name: 'Marissa Ramirez', city: 'Dallas', state: 'TX', cp: 75260 },
    { name: 'Graham Mcclure', city: 'Auburn', state: 'NY', cp: 13021 },
    { name: 'Wade Price', city: 'Appleton', state: 'WI', cp: 54911 },
    { name: 'Staci Perez', city: 'Erie', state: 'PA', cp: 16515 },
    { name: 'Myrna Brewer', city: 'Roanoke', state: 'VA', cp: 24022 },
    { name: 'Lucien Short', city: 'Albany', state: 'NY', cp: 12212 },
    { name: 'Dina Shields', city: 'Vancouver', state: 'WA', cp: 98661 },
    { name: 'Guadalupe Mullen', city: 'Raleigh', state: 'NC', cp: 27611 },
    { name: 'Monroe Rosario', city: 'Mentor', state: 'OH', cp: 44060 },
    { name: 'Shana Lynn', city: 'Indianapolis', state: 'IN', cp: 46206 },
    { name: 'Gerald Stewart', city: 'Hampton', state: 'VA', cp: 23670 },
    { name: 'Tina Gates', city: 'Wichita', state: 'KS', cp: 67276 },
    { name: 'Maricela Golden', city: 'Garland', state: 'TX', cp: 75040 }
  ]

  return (
    <FlatList
      /* horizontal
      showsHorizontalScrollIndicator={false} */
      keyExtractor={friend => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.rowList}>
            {item.name} from {item.city}
          </Text>
        )
      }}
    />
  )
}
