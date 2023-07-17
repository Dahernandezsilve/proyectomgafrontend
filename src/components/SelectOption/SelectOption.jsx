import React, { useState } from 'react'
import {
  View, Text, TouchableOpacity,
} from 'react-native'
import styles from './styles'

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