import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

// eslint-disable-next-line react/prop-types
const TextCard = ({ number }) => (
  <View style={styles.container}>
    <Text testID="text" style={styles.text}>
      {' '}
      Total de aves:
      {number}
    </Text>
  </View>
)

export default TextCard
