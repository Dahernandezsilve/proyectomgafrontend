/* eslint-disable react/prop-types */
import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  View, Text, TextInput, Keyboard, TouchableOpacity,
} from 'react-native'
import Slider from '@react-native-community/slider'
import styles from './styles'

const SliderContainer = ({
  code,
  title, minimumValue, maximumValue, step, medida, fixed, registro, setRegistro, maxLength,
}) => {
  const [value, setValue] = useState(0.0)
  const [formattedValue, setFormattedValue] = useState('0')
  const textInputRef = useRef(null)
  const [inputError, setInputError] = useState(null)

  const handleTextInputChange = text => {
    // Remove any commas from the input
    const numericText = text.replace(/,/g, '')

    // Parse the numeric value
    const numericValue = parseFloat(numericText)

    // Check if the number of digits exceeds your desired maximum
    if (!Number.isNaN(numericValue) && numericValue.toString().length <= maxLength) {
      // Set the formatted value without commas
      setFormattedValue(numericText)
      setValue(numericValue)
    } else if (text === '' || text === '-') {
      // Handle empty input or "-" sign to set the value to zero
      setFormattedValue('') // Clear the input field
      setValue(0)
    }
  }

  // Add a function to clear the value when the input is focused
  const handleInputFocus = () => {
    setFormattedValue('')
    setValue(0)
  }

  // ...

  useEffect(() => {
  }, [registro])

  const handleDoneEditing = () => {
    const numericValue = parseFloat(formattedValue.replace(/\s/g, ''))
    if (!Number.isNaN(numericValue)) {
      const roundedValue = parseFloat(numericValue.toFixed(fixed))
      if (roundedValue <= maximumValue && roundedValue >= minimumValue) {
        setValue(roundedValue)
        setFormattedValue(roundedValue.toFixed(fixed))
        setInputError(null) // Clear the error message
        switch (code) {
          case 'decesos':
            setRegistro(prevRegistro => ({ ...prevRegistro, decesos: roundedValue }))
            break
          case 'cantidadAlimento':
            setRegistro(prevRegistro => ({ ...prevRegistro, cantidadAlimento: roundedValue }))
            break
          case 'pesado':
            setRegistro(prevRegistro => ({ ...prevRegistro, pesado: roundedValue }))
            break
          default:
            break
        }
      } else {
        setInputError(`El valor debe estar entre ${minimumValue} y ${maximumValue}`)
      }
    } else {
      setInputError('Ingrese un número válido')
    }
    Keyboard.dismiss()
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.valueContainer}
        onPress={() => textInputRef.current.focus()}
      >
        <TextInput
          ref={textInputRef}
          placeholder="0"
          minimumValue={minimumValue}
          maximumValue={maximumValue}
          style={styles.valueText}
          onChangeText={handleTextInputChange}
          keyboardType="numeric"
          value={formattedValue}
          onFocus={handleInputFocus} // Add this line to clear the value when focused
          onBlur={handleDoneEditing}
          onSubmitEditing={handleDoneEditing}
          maxLength={maxLength}
        />
      </TouchableOpacity>
      {inputError && (
        <Text style={{ color: 'red' }}>{inputError}</Text>
      )}

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
          if (!textInputRef.current.isFocused()) {
            setValue(newValue)
            setFormattedValue(newValue.toFixed(fixed))
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
  fixed: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  maxLength: PropTypes.number,
}

export default SliderContainer
