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
    <View style={styles.container}>
      <TouchableOpacity onPress={handleToggleOptions}>
      {
        selectedOption ? (
          <Text style={styles.text}>{selectedOption}</Text>
        ) : (
          <Text style={styles.text}>Seleccionar trabajador</Text>
      )}
      </TouchableOpacity>
      {showOptions && (
        <View style={styles.optionsContainer}>
          {options.map((option) => (
            <TouchableOpacity
              key={option}
              style={styles.optionButton}
              onPress={() => handleOptionSelect(option)}
            >
              <Text>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative', // Añadido para contener las opciones
    width: '45%',
    alignSelf: 'flex-start',
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
    zIndex: 1, // Ajuste de zIndex para asegurar que el contenedor esté por encima de otros componentes
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'Roboto',
  },
  selectedOptionText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  optionsContainer: {
    position: 'absolute', // Añadido para superponer las opciones
    top: '100%',
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    marginTop: 10,
    paddingHorizontal: 10,
    zIndex: 2,
    backgroundColor: '#c4c5c6'
  },
  optionButton: {
    padding: 10,
    marginBottom: 10,
  },
});

export default SelectOption;
