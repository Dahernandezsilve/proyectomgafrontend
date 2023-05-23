import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SamsungOne from '../fonts/SamsungOne-400.ttf'
import * as Font from 'expo-font';

const NoInfo = ({ info }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{info}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '60%',
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 15,
    marginTop: '50%',
    marginBottom: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,   
  },
  text: {
    fontSize: 18,
    color: '#000',
    fontFamily: 'SamsungOne'
  },
});

export default NoInfo;
