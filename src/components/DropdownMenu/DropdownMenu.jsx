import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
  View, Text, TouchableOpacity, ScrollView,
} from 'react-native'
import styles from './styles'

const DropdownMenu = ({ options, onSelect, selectedOption, setSelectedOption}) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    console.log('options', selectedOption)
  }, [selectedOption])

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleSelect = option => {
    console.log('hola', option)
    setSelectedOption([option])
    setIsOpen(false)
    onSelect([option])
  }

  return (
    <View style={styles.containerBig}>
      <View styles={isOpen ? styles.container : styles.containerOpen}>
        <TouchableOpacity onPress={handleToggle} style={isOpen ? styles.headerOpen : styles.header}>
          <Text style={styles.textDrop}>{selectedOption[0].label}</Text>
        </TouchableOpacity>
      </View>
      {isOpen && (
        <ScrollView style={styles.dropdown}>
          {options.map(option => (
            <TouchableOpacity
              key={option.idGalera}
              style={styles.containerTextDrop}
              onPress={() => handleSelect(option)}
            >
              <Text style={styles.textDropdown}>{option.label}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  )
}

DropdownMenu.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      // Agrega otras propiedades según sea necesario
    }),
  ).isRequired,
  onSelect: PropTypes.func.isRequired,
}

export default DropdownMenu
