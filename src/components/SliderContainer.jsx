import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  View, Text, StyleSheet, TextInput,
} from 'react-native'
import Slider from '@react-native-community/slider'
import * as Font from 'expo-font'
import SamsungOne from '../fonts/SamsungOne-400.ttf'

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center', // Alinea horizontalmente el componente
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 2,
    marginTop: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    width: '90%',
  },
  slider: {
    borderRadius: 5, // radio de las esquinas
    height: 25, // altura del slider
    overflow: 'hidden', // para recortar el borde del slider si se excede su tamaño
    width: '100%',
  },
  sliderText: {
    color: '#444444',
    fontSize: 16,
  },
  sliderTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
    width: '100%',
  },
  sliderThumb: {
    backgroundColor: '#007AFF', // color del botón
    borderRadius: 10, // radio del botón
    height: 20, // altura del botón
    width: 20, // ancho del botón que se arrastra para cambiar el valor del slider
  },
  sliderTrack: {
    height: 100,
    width: '90%',
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    marginLeft: 10,
    marginTop: 10,
    textAlign: 'left',
  },
  valueContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#EFEFEF', // Color gris claro
    borderRadius: 5,
    elevation: 2,
    marginTop: 10,
    padding: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    width: '95%',
  },
  valueText: {
    fontSize: 20,
  },
})

const SliderContainer = ({
  title, minimumValue, maximumValue, step, medida, fixed,
}) => {
  const [value, setValue] = useState(0.0)

  const loadFonts = async () => {
    await Font.loadAsync({
      SamsungOne,
    })
  }
  useEffect(() => {
    loadFonts()
  }, [])

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
