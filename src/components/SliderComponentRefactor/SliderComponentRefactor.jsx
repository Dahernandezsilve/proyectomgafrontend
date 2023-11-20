import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import {
  View, Text, TextInput, Keyboard, TouchableOpacity,
} from 'react-native'
import Slider from '@react-native-community/slider'
import styles from './styles'

const SliderComponentRefactor = ({
  title, minimumValue, maximumValue, step, medida, fixed, value, setValue,
}) => {
  const [formattedValue, setFormattedValue] = useState('0')
  const textInputRef = useRef(null)
  const [inputError, setInputError] = useState(null)
  const maxLength = maximumValue.toString().length

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

  const handleDoneEditing = formatted => {
    const numericValue = parseFloat(formatted.replace(/\s/g, ''))
    if (!Number.isNaN(numericValue)) {
      let formattedV
      if (Number.isInteger(numericValue)) {
        // Si es un número entero, formatearlo sin decimales
        formattedV = numericValue.toString()
      } else {
        // Si no es un número entero, formatearlo con la cantidad de decimales especificada
        formattedV = numericValue.toFixed(fixed)
      }

      if (numericValue <= maximumValue && numericValue >= minimumValue) {
        setValue(numericValue)
        setFormattedValue(formattedV)
        setInputError(null) // Clear the error message
      } else {
        setInputError(`El valor debe estar entre ${minimumValue} y ${maximumValue}`)
      }
    } else {
      setInputError('Ingrese un número válido')
    }
    Keyboard.dismiss()
  }

  const handleDoneEditingInput = () => {
    const numericValue = parseFloat(formattedValue.replace(/\s/g, ''))
    if (!Number.isNaN(numericValue)) {
      let p
      if (Number.isInteger(numericValue)) {
        // Si es un número entero, formatearlo sin decimales
        p = numericValue.toString()
      } else {
        // Si no es un número entero, formatearlo con la cantidad de decimales especificada
        p = numericValue.toFixed(fixed)
      }

      if (numericValue <= maximumValue && numericValue >= minimumValue) {
        setValue(numericValue)
        setFormattedValue(p)
        setInputError(null) // Clear the error message
      } else {
        setInputError(`El valor debe estar entre ${minimumValue} y ${maximumValue}`)
      }
    } else {
      setInputError('Ingrese un número válido')
    }
    Keyboard.dismiss()
  }

  return (
    <View testID="input-test" style={styles.container}>
      <TouchableOpacity
        testID="input-test"
        style={styles.valueContainer}
        onPress={() => textInputRef.current.focus()}
      >
        <TextInput
          testID="input-test"
          ref={textInputRef}
          placeholder="0"
          minimumValue={minimumValue}
          maximumValue={maximumValue}
          style={styles.valueText}
          onChangeText={handleTextInputChange}
          keyboardType="numeric"
          value={formattedValue}
          onFocus={handleInputFocus}
          onBlur={handleDoneEditingInput}
          onSubmitEditing={handleDoneEditingInput}
          maxLength={maxLength}
        />
      </TouchableOpacity>
      {inputError && (
        <Text testID="input-test" style={styles.errorText}>{inputError}</Text>
      )}

      <Text style={[styles.title, { textAlign: 'left' }]}>{title}</Text>
      <Slider
        testID="slider-test"
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
            const formatted = newValue.toFixed(fixed)
            setFormattedValue(formatted)
            handleDoneEditing(formatted)
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

SliderComponentRefactor.propTypes = {
  title: PropTypes.string.isRequired,
  minimumValue: PropTypes.number.isRequired,
  maximumValue: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  medida: PropTypes.string.isRequired,
  fixed: PropTypes.number,
  value: PropTypes.number.isRequired,
  setValue: PropTypes.func.isRequired, // Agregada la validación para la prop 'setRegistro'
}

SliderComponentRefactor.defaultProps = {
  fixed: 2,
}
export default SliderComponentRefactor
