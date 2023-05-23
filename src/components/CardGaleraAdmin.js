import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableWithoutFeedback, Animated } from 'react-native'
import SamsungOne from '../fonts/SamsungOne-400.ttf'

const windowWidth = Dimensions.get('window').width;

const CardGaleraAdmin = ({ galera = 'Default', ca = 'red', navigateToGaleras, numberCA = 1.01, cantidadAlimento = 0, pesado = 0, decesos = 0, observaciones = 'n.a.' }) => {
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

  const filteredNumberCA = numberCA.toFixed(2);

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
              <Text style={styles.title}>Alimento:</Text>
              <Text style={styles.title}>Peso medido:</Text>
              <Text style={styles.title}>Decesos:</Text>
              {observaciones !== 'n.a.' && <Text style={styles.title}>Observaciones:</Text>}
            </View>
            <View style={styles.column}>
              <Text style={[styles.info, styles.rightAlignedText]}>{galera}</Text>
              <Text style={[styles.info, styles.rightAlignedText]}>{cantidadAlimento}</Text>
              <Text style={[styles.info, styles.rightAlignedText]}>{pesado}</Text>
              <Text style={[styles.info, styles.rightAlignedText]}>{decesos}</Text>
              {observaciones !== 'n.a.' && <Text style={[styles.info, styles.rightAlignedText]}>{observaciones}</Text>}
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
    fontFamily: 'SamsungOne',
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
    fontFamily: 'SamsungOne',
  },
  info: {
    fontSize: 18,
    fontFamily: 'SamsungOne',
  },
  rightAlignedText: {
    textAlign: 'right',
  },
});

export default CardGaleraAdmin;
