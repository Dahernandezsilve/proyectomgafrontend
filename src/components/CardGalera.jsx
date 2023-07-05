import React, { useState, useEffect } from 'react'
import Proptypes from 'prop-types'
import {
  View, Text, StyleSheet, Dimensions, TouchableWithoutFeedback, Animated,
} from 'react-native'
import * as Font from 'expo-font'

const loadCustomFonts = async () => {
  await Font.loadAsync({
    // eslint-disable-next-line global-require
    SamsungOne: require('../fonts/SamsungOne-400.ttf'),
    // Agrega más fuentes personalizadas si es necesario
  })
}

const windowWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  caContainer: {
    alignItems: 'center',
    flex: -1,
    flexDirection: 'column',
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    elevation: 2,
    flexDirection: 'row',
    marginBottom: 10,
    marginHorizontal: 15,
    marginTop: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  galeraContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
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
  text: {
    fontFamily: 'SamsungOne',
    fontSize: 50,
    textAlign: 'center',
  },
})

const CardGalera = ({ galera, ca, navigateToGaleras }) => {
  const [opacityValue] = useState(new Animated.Value(1))

  useEffect(() => {
    loadCustomFonts()
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

  return (
    <TouchableWithoutFeedback
      onPress={() => navigateToGaleras()}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
    >
      <Animated.View style={[styles.container, { width: windowWidth - 30, opacity: opacityValue }]}>
        <View style={styles.caContainer}>
          <Text style={styles.smallText}>C.A</Text>
          <View style={[styles.square, { backgroundColor: ca }]} />
        </View>
        <View style={styles.galeraContainer}>
          <Text style={styles.text}>{galera}</Text>
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  )
}

CardGalera.propTypes = {
  galera: Proptypes.string,
  ca: Proptypes.string,
  navigateToGaleras: Proptypes.func.isRequired,
}

CardGalera.defaultProps = {
  galera: 'Default',
  ca: 'red',
}

export default CardGalera
