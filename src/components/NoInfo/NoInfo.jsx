import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'

const NoInfo = ({ info }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{info}</Text>
  </View>
)

NoInfo.propTypes = {
  info: PropTypes.string.isRequired,
}

export default NoInfo
