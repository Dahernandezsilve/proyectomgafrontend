import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  View, Text, TextInput, Keyboard, TouchableOpacity, Button,
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

  useEffect(() => {
  }, [registro])

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
        switch (code) {
          case 'decesos':
            setRegistro(prevRegistro => ({ ...prevRegistro, decesos: numericValue }))
            break
          case 'cantidadAlimento':
            setRegistro(prevRegistro => ({ ...prevRegistro, cantidadAlimento: numericValue }))
            break
          case 'pesado':
            setRegistro(prevRegistro => ({ ...prevRegistro, pesado: numericValue }))
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
        switch (code) {
          case 'decesos':
            setRegistro(prevRegistro => ({ ...prevRegistro, decesos: numericValue }))
            break
          case 'cantidadAlimento':
            setRegistro(prevRegistro => ({ ...prevRegistro, cantidadAlimento: numericValue }))
            break
          case 'pesado':
            setRegistro(prevRegistro => ({ ...prevRegistro, pesado: numericValue }))
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
          onFocus={handleInputFocus}
          onBlur={handleDoneEditingInput}
          onSubmitEditing={handleDoneEditingInput}
          maxLength={maxLength}
        />
      </TouchableOpacity>
      {inputError && (
        <Text style={styles.errorText}>{inputError}</Text>
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

const registroPropType = PropTypes.shape({
  decesos: PropTypes.number.isRequired,
  cantidadAlimento: PropTypes.number.isRequired,
  pesado: PropTypes.number.isRequired,
  // Agrega más propiedades si es necesario
})

SliderContainer.propTypes = {
  code: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  minimumValue: PropTypes.number.isRequired,
  maximumValue: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  medida: PropTypes.string.isRequired,
  fixed: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  maxLength: PropTypes.number,
  registro: registroPropType.isRequired,
  setRegistro: PropTypes.func.isRequired, // Agregada la validación para la prop 'setRegistro'
}

export default SliderContainer
