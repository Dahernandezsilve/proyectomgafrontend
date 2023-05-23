import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import SamsungOne from '../fonts/SamsungOne-400.ttf'
import * as Font from 'expo-font';

const TrafficLight = ({ topValue, middleValue, bottomValue }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.boxHeaderText}>C.A.</Text>
      <View style={[styles.box, styles.greenBox]}>
        <Text style={styles.boxText}>{topValue}</Text>

      </View>
      <View style={[styles.box, styles.orangeBox]}>
        <Text style={styles.boxText}>{middleValue}</Text>
      </View>
      <View style={[styles.box, styles.redBox]}>
        <Text style={styles.boxText}>{bottomValue}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    marginTop: 15,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 4,   
    padding: 5,
    marginRight: 15,
    paddingBottom: 2
  },
  box: {
    width: 125,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 3,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,   
  },
  greenBox: {
    backgroundColor: 'green',
  },
  orangeBox: {
    backgroundColor: 'orange',
  },
  redBox: {
    backgroundColor: 'red',
  },
  boxText: {
    fontSize: 18,
    fontFamily: 'SamsungOne',
    color: 'white',
  },
  boxHeaderText: {
    fontSize: 14,
    fontFamily: 'SamsungOne',
    color: 'black',
    marginBottom: 5,
  },
});

export default TrafficLight
