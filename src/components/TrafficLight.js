import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

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
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,   
    padding: 5,
    marginRight: 15
  },
  box: {
    width: 125,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 2,
    borderRadius: 10,
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
    fontWeight: 'bold',
    color: 'white',
  },
  boxHeaderText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },
});

export default TrafficLight
