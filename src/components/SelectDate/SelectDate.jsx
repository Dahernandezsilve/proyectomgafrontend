import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'

const formatDate = date => {
  const day = date.getDate().toString().padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const year = date.getFullYear().toString()
  return `${day}-${month}-${year}`
}

const SelectDate = ({ onPress, selectedDate }) => {
  const formattedDate = selectedDate ? formatDate(selectedDate) : null
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.contentContainer}>
        <Text style={styles.text}>
          Seleccionar fecha:
        </Text>
        <Text style={styles.date}>
          {formattedDate}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

SelectDate.propTypes = {
  onPress: PropTypes.func.isRequired,
  selectedDate: PropTypes.instanceOf(Date),
}

SelectDate.defaultProps = {
  selectedDate: null,
}

export default SelectDate
