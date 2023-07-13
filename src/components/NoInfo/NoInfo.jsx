import React from 'react'
import { View, Text} from 'react-native'
import styles from './styles'


const NoInfo = ({ info }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{info}</Text>
  </View>
)



export default NoInfo