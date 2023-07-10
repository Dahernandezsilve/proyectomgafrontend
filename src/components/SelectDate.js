import React from 'react'
import {
  Text, TouchableOpacity, StyleSheet, View,
} from 'react-native'
import SamsungOne from '../fonts/SamsungOne-400.ttf'

const formatDate = date => {
  const day = date.getDate().toString().padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const year = date.getFullYear().toString()
  return `${day}-${month}-${year}`
}

const SelectDate = ({ number, onPress, selectedDate }) => {
  const formattedDate = selectedDate ? formatDate(selectedDate) : null
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.contentContainer}>
        <Text style={styles.text}>
          Seleccionar fecha:
          {formattedDate}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    elevation: 2,
    marginHorizontal: 15,
    marginTop: 20,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    width: '88%',
  },
  contentContainer: {
  },
  selectedDate: {
    color: '#000',
    fontFamily: 'SamsungOne',
    fontSize: 17,
    marginTop: 10,
  },
  text: {
    color: '#000',
    fontFamily: 'SamsungOne',
    fontSize: 17,
  },
})

export default SelectDate
