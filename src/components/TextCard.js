import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import * as Font from 'expo-font'
import SamsungOne from '../fonts/SamsungOne-400.ttf'

const TextCard = ({ number }) => (
  <View style={styles.container}>
    <Text style={styles.text}>
      {' '}
      Total de aves:
      {number}
    </Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    elevation: 2,
    marginHorizontal: 15,
    marginTop: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    width: '40%',
  },
  text: {
    color: '#000',
    fontFamily: 'SamsungOne',
    fontSize: 18,
  },
})

export default TextCard
