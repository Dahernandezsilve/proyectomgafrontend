import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import * as Font from 'expo-font'
import SamsungOne from '../fonts/SamsungOne-400.ttf'

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

const styles = StyleSheet.create({
  box: {
    alignItems: 'center',
    borderRadius: 5,
    elevation: 2,
    height: 30,
    justifyContent: 'center',
    marginBottom: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    width: 125,
  },
  boxHeaderText: {
    color: 'black',
    fontFamily: 'SamsungOne',
    fontSize: 14,
    marginBottom: 5,
  },
  boxText: {
    color: 'white',
    fontFamily: 'SamsungOne',
    fontSize: 18,
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    elevation: 4,
    marginRight: 15,
    marginTop: 15,
    padding: 5,
    paddingBottom: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  greenBox: {
    backgroundColor: 'green',
  },
  orangeBox: {
    backgroundColor: 'orange',
  },
  redBox: {
    backgroundColor: 'red',
  },
})

export default TrafficLight
