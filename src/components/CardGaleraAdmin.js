import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableWithoutFeedback, Animated } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const CardGaleraAdmin = ({ galera = 'Default', ca = 'red', navigateToGaleras, numberCA=1.01, existence=0, typeChicken='default' }) => {
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

  const filteredNumberCA = numberCA.toFixed(2)

  return (
    <TouchableWithoutFeedback onPress={() => navigateToGaleras()} onPressIn={onPressIn} onPressOut={onPressOut}>
      <Animated.View style={[styles.container, { width: windowWidth - 30, opacity: opacityValue }]}>
        <View style={styles.caContainer}>
          <Text style={styles.smallText}>C.A: {filteredNumberCA}</Text>
          <View style={[styles.square, { backgroundColor: ca }]}></View>
        </View>
        <View style={styles.galeraContainer}>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.title}>Identificador:</Text>
              <Text style={styles.title}>Cantidad:</Text>
              <Text style={styles.title}>Tipo de población:</Text>
              <Text style={styles.title}>Edad:</Text>
            </View>
            <View style={styles.column}>
              <Text style={[styles.info, styles.rightAlignedText]}>{galera}</Text>
              <Text style={[styles.info, styles.rightAlignedText]}>{existence}</Text>
              <Text style={[styles.info, styles.rightAlignedText]}>{typeChicken}</Text>
              <Text style={[styles.info, styles.rightAlignedText]}>6 días</Text>
            </View>
          </View>
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
    marginTop: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  galeraContainer: {
    flex: 1,
    marginLeft: 20,
  },
  caContainer: {
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
    fontFamily: 'Roboto',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  column: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '900',
    fontFamily: 'Roboto',
  },
  info: {
    fontSize: 18,
    fontFamily: 'Roboto',
  },
  rightAlignedText: {
    textAlign: 'right',
  },
});

export default CardGaleraAdmin;
