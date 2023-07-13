import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  View, Text, TextInput,
} from 'react-native'
import Slider from '@react-native-community/slider'
import styles from './styles'

const SliderContainer = ({
  title, minimumValue, maximumValue, step, medida, fixed,
}) => {
  const [value, setValue] = useState(0.0)

  const handleTextInputChange = text => {
    const numericValue = parseFloat(text.replace(/\s/g, ''))
    if (!Number.isNaN(numericValue)) {
      setValue(numericValue)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.valueContainer}>
        <TextInput style={styles.valueText} onChangeText={handleTextInputChange} keyboardType="numeric">
          {value.toFixed(fixed)}
          {' '}
        </TextInput>
      </View>
      <Text style={[styles.title, { textAlign: 'left' }]}>{title}</Text>
      <Slider
        style={styles.slider}
        minimumValue={minimumValue}
        maximumValue={maximumValue}
        step={step}
        value={value}
        minimumTrackTintColor="#2e4a85"
        maximumTrackTintColor="#2e4a85"
        thumbTintColor="#2e4a85"
        thumbStyle={styles.sliderThumb}
        trackStyle={[styles.sliderTrack, { width: 10 }]}
        onValueChange={newValue => {
          if (newValue !== undefined) {
            setValue(newValue)
          }
        }}
      />
      <View style={styles.sliderTextContainer}>
        <Text style={styles.sliderText}>{`${minimumValue} ${medida}`}</Text>
        <Text style={[styles.sliderText, { textAlign: 'right' }]}>{`${maximumValue} ${medida}`}</Text>
      </View>
    </View>
  )
}

SliderContainer.propTypes = {
  title: PropTypes.string.isRequired,
  minimumValue: PropTypes.number.isRequired,
  maximumValue: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  medida: PropTypes.string.isRequired,
  fixed: PropTypes.number.isRequired,
}

export default SliderContainer
