import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

// eslint-disable-next-line react/prop-types
const TrafficLight = ({ topValue, middleValue, bottomValue }) => (
  <View style={styles.container}>
    <Text style={styles.boxHeaderText}>C.A.</Text>
    <View style={[styles.box, styles.greenBox]}>
      <Text style={styles.boxText}>{topValue}</Text>

    </View>
    <View style={[styles.box, styles.orangeBox]}>
      <Text style={styles.boxText}>{middleValue}</Text>
    </View>
    <View style={[styles.box, styles.redBox]}>
      <Text style={styles.boxText}>{bottomValue}</Text>
    </View>
  </View>
)
export default TrafficLight
