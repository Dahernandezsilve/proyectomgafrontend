import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  View, Text, TextInput, Keyboard, TouchableOpacity,
} from 'react-native'
import Slider from '@react-native-community/slider'
import styles from './styles'

const SliderContainer = ({ code,
  title, minimumValue, maximumValue, step, medida, fixed, registro, setRegistro
}) => {
  const [value, setValue] = useState(0.0)
  const [formattedValue, setFormattedValue] = useState('0')
  const textInputRef = useRef(null)

  const handleTextInputChange = text => {
    setFormattedValue(text);
    if (text === '') {
      setValue(0);
    }
  }

  useEffect(() => {
    console.log("registro", registro)
  }, [registro])
  
  const handleDoneEditing = () => {
    const numericValue = parseFloat(formattedValue.replace(/\s/g, ''));
    if (!Number.isNaN(numericValue)) {
      const roundedValue = parseFloat(numericValue.toFixed(fixed));
      setValue(roundedValue);
      setFormattedValue(roundedValue.toFixed(fixed));
        switch (code) {
          case "decesos":
            setRegistro(prevRegistro => ({ ...prevRegistro, decesos: roundedValue }));
            break
          case "cantidadAlimento":
            setRegistro(prevRegistro => ({ ...prevRegistro, cantidadAlimento: roundedValue }));
            break
          case "pesado":
            setRegistro(prevRegistro => ({ ...prevRegistro, pesado: roundedValue }));
            break
        }
    } else {
      setValue(0);
      setFormattedValue('0');
      console.log("Not fixed", code)
      switch (code) {
        case "decesos":
          setRegistro(prevRegistro => ({ ...prevRegistro, decesos: 0 }));
          break
        case "cantidadAlimento":
          setRegistro(prevRegistro => ({ ...prevRegistro, cantidadAlimento: 0 }));
          break
        case "pesado":
          setRegistro(prevRegistro => ({ ...prevRegistro, pesado: 0 }));
          break
      }
    }
    Keyboard.dismiss();
  }
  

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.valueContainer}
        onPress={() => textInputRef.current.focus()}
      >
        <TextInput
          ref={textInputRef}
          style={styles.valueText}
          onChangeText={handleTextInputChange}
          keyboardType="numeric"
          value={formattedValue}
          onBlur={handleDoneEditing}
          onSubmitEditing={handleDoneEditing}
        />
      </TouchableOpacity>
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
}

export default SliderContainer
