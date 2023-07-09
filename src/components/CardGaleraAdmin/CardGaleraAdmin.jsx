import React, { useState } from 'react'
import {
  View, Text, Dimensions, TouchableWithoutFeedback, Animated,
} from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'

const windowWidth = Dimensions.get('window').width

const CardGaleraAdmin = ({
  galera, ca, numberCA, cantidadAlimento, pesado, decesos, observaciones, edad,
}) => {
  const [opacityValue] = useState(new Animated.Value(1))

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
