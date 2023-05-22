import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SelectOption = ({ selectedOption, options, setSelectedOption }) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowOptions(false);
  };

  const handleToggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <TouchableOpacity onPress={handleToggleOptions}>
    <View style={styles.container}>
      {
        selectedOption ? (
          <Text style={styles.text}>{selectedOption}</Text>
        ) : (
          <Text style={styles.text}>Seleccionar trabajador</Text>
      )}

      {showOptions && (
        <View style={styles.optionsContainer}>
          {options.map((option) => (
            <TouchableOpacity
              key={option}
              style={styles.optionButton}
              onPress={() => handleOptionSelect(option)}
            >
              <Text style={styles.selectedOptionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 230,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 15,
    marginTop: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    zIndex: 1 // Ajuste de zIndex para asegurar que el contenedor esté por encima de otros componentes
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    width: '100%',
    textAlign: 'center',
    fontFamily: 'Roboto',
  },
  selectedOptionText: {
    fontSize: 18,
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
    backgroundColor: '#c4c5c6',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  optionButton: {
    padding: 10,
    marginTop: 5,
    marginBottom: 5
  },
});

export default SelectOption;