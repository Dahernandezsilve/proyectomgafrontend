import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import * as Font from 'expo-font'
import SamsungOne from '../fonts/SamsungOne-400.ttf'

const NoInfo = ({ info }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{info}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    elevation: 2,
    justifyContent: 'center',
    marginBottom: 500,
    marginHorizontal: 15,
    marginTop: '50%',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    width: '60%',
  },
  text: {
    color: '#000',
    fontFamily: 'SamsungOne',
    fontSize: 18,
  },
})

export default NoInfo
