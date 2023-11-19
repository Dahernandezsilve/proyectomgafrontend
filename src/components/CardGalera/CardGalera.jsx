import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  View, Text, TouchableWithoutFeedback, Animated, ActivityIndicator, useWindowDimensions,
} from 'react-native'
import styles from './styles'

const CardGalera = ({
  idGalera, galera, ca, tiempoEnDias, navigateToGaleras, loading,
}) => {
  const [opacityValue] = useState(new Animated.Value(1))
  const [scaleValue] = useState(new Animated.Value(1)) // Nuevo valor de escala
  const windowWidth = useWindowDimensions().width

  const onPressIn = () => {
    Animated.timing(opacityValue, {
      toValue: 0.5,
      useNativeDriver: true,
    }).start()
  }

  const onPressOut = () => {
    Animated.timing(opacityValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start()
  }

  useEffect(() => {
    if (loading) {
      Animated.sequence([
        Animated.timing(scaleValue, {
          toValue: 0.95,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(scaleValue, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start()

      Animated.timing(opacityValue, {
        toValue: 0.5,
        useNativeDriver: true,
      }).start()
    } else {
      Animated.timing(scaleValue, {
        toValue: 1,
        useNativeDriver: true,
      }).start()
      Animated.timing(opacityValue, {
        toValue: 1,
        useNativeDriver: true,
      }).start()
    }
  }, [loading, opacityValue, scaleValue])

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        if (!loading) {
          navigateToGaleras(idGalera, galera, tiempoEnDias)
        }
      }}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
    >
      <Animated.View
        testID="animated-view"
        style={[
          styles.container,
          {
            width: windowWidth - windowWidth * 0.1,
            opacity: opacityValue,
            transform: [{ scale: scaleValue }], // Aplicar la animación de escala
          },
        ]}
      >
        <View style={styles.caContainer}>
          <Text style={styles.smallText}>C.A</Text>
          <View style={[styles.square, { backgroundColor: ca }]} />
        </View>
        <View style={styles.galeraContainer}>
          {loading ? (
            <ActivityIndicator size="large" color="#2B4985" /> // Agregar el spinner si loading es true
          ) : (
            <Text style={styles.text}>{galera}</Text>
          )}
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  )
}

CardGalera.propTypes = {
  idGalera: PropTypes.string,
  galera: PropTypes.string,
  ca: PropTypes.string,
  tiempoEnDias: PropTypes.string,
  navigateToGaleras: PropTypes.func.isRequired,
  loading: PropTypes.bool,
}

CardGalera.defaultProps = {
  galera: 'Default',
  ca: 'red',
  idGalera: null,
  loading: false,
  tiempoEnDias: '78',
}

export default CardGalera
