import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TextCard = ({ number }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Total de aves: {number}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '40%',
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
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'Roboto'
  },
});

export default TextCard;
