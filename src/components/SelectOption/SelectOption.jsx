import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'

const SelectOption = ({
  selectedOption, options, setSelectedOption,
}) => {
  const [showOptions, setShowOptions] = useState(false)

  const handleOptionSelect = option => {
    setSelectedOption(option)
    setShowOptions(false)
  }
  console.log('Trabajador en SelectOption: ', options)

  const handleToggleOptions = () => {
    setShowOptions(!showOptions)
  }

  const noSeleccionar = {
    nombre: 'No seleccionar',
  }

  // Mapea el array de nombres en el formato esperado
  const trabajadores = options.map((nombre, index) => ({
    idTrabajador: `id_${index}`, // Puedes utilizar un índice como identificador único
    nombre,
  }))

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
            {trabajadores.map(option => (
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

SelectOption.propTypes = {
  selectedOption: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
  }),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      idTrabajador: PropTypes.string.isRequired,
      nombre: PropTypes.string.isRequired,
    }),
  ).isRequired,
  setSelectedOption: PropTypes.func.isRequired,
}

SelectOption.defaultProps = {
  selectedOption: null,
}

export default SelectOption
