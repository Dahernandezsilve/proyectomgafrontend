import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import SamsungOne from '../fonts/SamsungOne-400.ttf'

const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    return `${day}-${month}-${year}`;
  };

const SelectDate = ({ number, onPress, selectedDate }) => {
    const formattedDate = selectedDate ? formatDate(selectedDate) : null;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.contentContainer}>
        <Text style={styles.text}>Seleccionar fecha:  {formattedDate}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '88%',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 15,
    marginTop: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,   
  },
  contentContainer: {
  },
  text: {
    fontSize: 18,
    color: '#000',
    fontFamily: 'SamsungOne'
  },
  selectedDate: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'SamsungOne',
    marginTop: 10
  }
});

export default SelectDate;
