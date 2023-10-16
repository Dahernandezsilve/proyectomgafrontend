/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import {
  View, Text, TouchableWithoutFeedback, Animated, useWindowDimensions,
} from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'

const CardAssignment = ({
   customValues, customTitles,
}) => {
  const [opacityValue] = useState(new Animated.Value(1))
  const windowWidth = useWindowDimensions().width

  const onPressIn = () => {
    Animated.timing(opacityValue, {
      toValue: 0.5,
      duration: 100,
      useNativeDriver: true,
    }).start()
  }

  const onPressOut = () => {
    Animated.timing(opacityValue, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start()
  }


  return (
    <TouchableWithoutFeedback onPressIn={onPressIn} onPressOut={onPressOut} testID="card-galera">
      <Animated.View
        style={
          [styles.container, { width: windowWidth - windowWidth * 0.1, opacity: opacityValue }]
        }
      >
        <View style={styles.caContainer}>
        </View>
        <View style={[styles.galeraContainer, styles.row]}>
          <View style={styles.column}>
            {customTitles.map((title, index) => (
              <Text key={index} style={styles.title}>
                {title}
              </Text>
            ))}
          </View>
          <View style={[styles.column, styles.valuesContainer]}>
            {Object.entries(customValues).map(([key, value]) => (
              <Text key={key} style={[styles.info, styles.rightAlignedText]}>
                {value}
              </Text>
            ))}
          </View>
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  )
}

CardAssignment.propTypes = {
  customValues: PropTypes.objectOf(PropTypes.any),
  customTitles: PropTypes.arrayOf(PropTypes.string),
  // eslint-disable-next-line react/require-default-props
  navigateToGaleras: PropTypes.func,
}

CardAssignment.defaultProps = {
  customValues: {},
  customTitles: [],
}

export default CardAssignment
