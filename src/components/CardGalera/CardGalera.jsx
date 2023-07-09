import React, { useState, useEffect } from 'react'
import Proptypes from 'prop-types'
import {
  View, Text, Dimensions, TouchableWithoutFeedback, Animated,
} from 'react-native'
import * as Font from 'expo-font'
import styles from './styles'

const loadCustomFonts = async () => {
  await Font.loadAsync({
    // eslint-disable-next-line global-require
    SamsungOne: require('../../fonts/SamsungOne-400.ttf'),
    // Agrega más fuentes personalizadas si es necesario
  })
}

const windowWidth = Dimensions.get('window').width

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
