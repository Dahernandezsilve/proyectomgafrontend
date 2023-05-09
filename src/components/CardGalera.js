import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableWithoutFeedback, Animated } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const CardGalera = ({galera='Default', ca='red', navigateToGaleras}) => {
  const [opacityValue, setOpacityValue] = useState(new Animated.Value(1));

  const onPressIn = () => {
    Animated.timing(opacityValue, {
      toValue: 0.5,
      duration: 100,
      useNativeDriver: true
    }).start();
  };

  const onPressOut = () => {
    Animated.timing(opacityValue, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true
    }).start();
  };

  return (
    <TouchableWithoutFeedback onPress={() => navigateToGaleras()} onPressIn={onPressIn} onPressOut={onPressOut}>
      <Animated.View style={[styles.container, { width: windowWidth - 30, opacity: opacityValue }]}>
        
        <View style={styles.caContainer}>
          <Text style={styles.smallText}>C.A</Text>
          <View style={[styles.square, {backgroundColor:ca}]}></View>
        </View>
        <View style={styles.galeraContainer}>
          <Text style={styles.text}>{galera}</Text>
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 15,
    marginTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,   
  },
  galeraContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  caContainer: {
    flex: -1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  square: {
    width: 80,
    height: 50,
    backgroundColor: 'red',
    borderRadius: 5,
    marginBottom: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,   
  },
  smallText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    fontFamily: 'Roboto'
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Roboto'
  },
});

export default CardGalera;
