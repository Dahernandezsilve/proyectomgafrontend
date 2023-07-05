import React, { useState } from 'react'
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native'
import * as Font from 'expo-font'
import SamsungOne from '../fonts/SamsungOne-400.ttf'

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
    width: 230,
    zIndex: 1,
    // Ajuste de zIndex para asegurar que el contenedor esté por encima de otros componentes
  },
  optionButton: {
    marginBottom: 5,
    marginTop: 5,
    padding: 10,
  },
  optionsContainer: {
    position: 'absolute', // Añadido para superponer las opciones
    top: '100%',
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    marginTop: 20,
    paddingHorizontal: 10,
    zIndex: 2,
    backgroundColor: '#ECECEC',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  selectedOptionText: {
    fontSize: 18,
  },
  text: {
    color: '#000',
    fontFamily: 'SamsungOne',
    fontSize: 18,
    textAlign: 'center',
    width: '100%',
  },
})

const SelectOption = ({ selectedOption, options, setSelectedOption }) => {
  const [showOptions, setShowOptions] = useState(false)

  const handleOptionSelect = option => {
    setSelectedOption(option)
    setShowOptions(false)
  }

  const handleToggleOptions = () => {
    setShowOptions(!showOptions)
  }

  const noSeleccionar = {
    nombre: 'No seleccionar',
  }

  return (
    <TouchableOpacity onPress={handleToggleOptions}>
      <View style={styles.container}>
        {selectedOption ? (
          <Text style={styles.text}>{selectedOption.nombre}</Text>
        ) : (
          <Text style={styles.text}>Seleccionar trabajador</Text>
        )}

        {showOptions && (
          <View style={styles.optionsContainer}>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => handleOptionSelect(noSeleccionar)} // Option "No seleccionar"
            >
              <Text style={styles.selectedOptionText}>No seleccionar</Text>
            </TouchableOpacity>
            {options.map(option => (
              <TouchableOpacity
                key={option.idTrabajador}
                style={styles.optionButton}
                onPress={() => handleOptionSelect(option)}
              >
                <Text style={styles.selectedOptionText}>{option.nombre}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    </TouchableOpacity>
  )
}

export default SelectOption
