import React, { useState, useEffect } from 'react'
import {
  View, Text, StyleSheet, Dimensions, TouchableWithoutFeedback, Animated,
} from 'react-native'
import PropTypes from 'prop-types'
import * as Font from 'expo-font'
import SamsungOne from '../fonts/SamsungOne-400.ttf'

const windowWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  caContainer: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  column: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    elevation: 2,
    flexDirection: 'row',
    marginBottom: 5,
    marginHorizontal: 15,
    marginTop: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  galeraContainer: {
    flex: 1,
    marginLeft: 20,
  },
  info: {
    fontFamily: 'SamsungOne',
    fontSize: 18,
  },
  rightAlignedText: {
    textAlign: 'right',
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 5,
  },
  smallText: {
    fontFamily: 'SamsungOne',
    fontSize: 20,
    marginBottom: 5,
  },
  square: {
    backgroundColor: 'red',
    borderRadius: 5,
    elevation: 2,
    height: 50,
    marginBottom: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    width: 80,
  },
  title: {
    fontFamily: 'SamsungOne',
    fontSize: 18,
  },
})

const CardGaleraAdmin = ({
  galera, ca, numberCA, cantidadAlimento, pesado, decesos, observaciones, edad,
}) => {
  const [opacityValue] = useState(new Animated.Value(1))
  const loadFonts = async () => {
    await Font.loadAsync({
      SamsungOne,
    })
  }
  useEffect(() => {
    loadFonts()
  }, [])

  const onPressIn = () => {
    Animated.timing(opacityValue, {
      toValue: 0.5,
      duration: 100,
      useNativeDriver: true,
    }).start()
  }

  const onPressOut = () => {
    Animated.timing(opacityValue, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start()
  }

  const filteredNumberCA = numCA => {
    if (numCA !== null) {
      return numCA.toFixed(2)
    }
    return 'N.A.'
  }
  return (
    <TouchableWithoutFeedback onPressIn={onPressIn} onPressOut={onPressOut}>
      <Animated.View style={[styles.container, { width: windowWidth - 30, opacity: opacityValue }]}>
        <View style={styles.caContainer}>
          <Text style={styles.smallText}>
            C.A:
            {filteredNumberCA(numberCA)}
          </Text>
          <View style={[styles.square, { backgroundColor: ca }]} />
        </View>
        <View style={styles.galeraContainer}>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.title}>Identificador:</Text>
              <Text style={styles.title}>Alimento:</Text>
              <Text style={styles.title}>Peso (Pollos)</Text>
              <Text style={styles.title}>Muertes:</Text>
              <Text style={styles.title}>Edad:</Text>
              {observaciones !== 'n.a.' && <Text style={styles.title}>Observaciones:</Text>}
            </View>
            <View style={styles.column}>
              <Text style={[styles.info, styles.rightAlignedText]}>{galera}</Text>
              <Text style={[styles.info, styles.rightAlignedText]}>{cantidadAlimento}</Text>
              <Text style={[styles.info, styles.rightAlignedText]}>{pesado}</Text>
              <Text style={[styles.info, styles.rightAlignedText]}>{decesos}</Text>
              <Text style={[styles.info, styles.rightAlignedText]}>{edad}</Text>
              {observaciones !== 'n.a.' && <Text style={[styles.info, styles.rightAlignedText]}>{observaciones}</Text>}
            </View>
          </View>
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  )
}

CardGaleraAdmin.propTypes = {
  galera: PropTypes.string,
  ca: PropTypes.string,
  numberCA: PropTypes.number,
  cantidadAlimento: PropTypes.number,
  pesado: PropTypes.number,
  decesos: PropTypes.number,
  observaciones: PropTypes.string,
  edad: PropTypes.number,
}

CardGaleraAdmin.defaultProps = {
  galera: 'Default',
  ca: 'red',
  numberCA: 1.01,
  cantidadAlimento: 0,
  pesado: 0,
  decesos: 0,
  observaciones: 'n.a.',
  edad: 0,
}

export default CardGaleraAdmin
