/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import {
  View, Text, TouchableWithoutFeedback, Animated, useWindowDimensions, Image, TouchableOpacity,
} from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'
import usuarioImage from './usuario.png'

const CardPersonalRanking = ({
  customValues, customTitles, img, isTouchable, workerSelected, onWorkerSelect, position,
}) => {
  const [opacityValue] = useState(new Animated.Value(1))
  const [isChecked, setIsChecked] = useState(false) // Nuevo estado para la marca de verificación
  const windowWidth = useWindowDimensions().width

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

  const handleCheck = () => {
    setIsChecked(!isChecked)
    // console.log("Esta es el trabajador: ", workerSelected);
    onWorkerSelect(workerSelected)
  }

  return (
    isTouchable ? (
      <TouchableOpacity
        onPress={handleCheck}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        testID="card-galera"
        activeOpacity={1}
      >
        <Animated.View
          style={
          [styles.container, { width: windowWidth - windowWidth * 0.1, opacity: opacityValue }]
        }
        >
          {isChecked && (
          <View style={styles.checkBoxChecked} />
          )}
          <View style={styles.positionContainer}>
            <View style={styles.circle}>
              <Text style={styles.circleText}>{position}</Text>
            </View>
          </View>

          <View style={styles.caContainer}>
            <View style={styles.square}>
              {img && img !== 'N.A' ? ( // Comprobar si customValues.img existe
                <Image
                  source={{ uri: img }}
                  style={{
                    width: '100%',
                    height: '100%',
                    resizeMode: 'cover',
                    alignSelf: 'center',
                  }}
                />
              ) : (
                <Image
                  source={usuarioImage}
                  style={{
                    width: '50%',
                    height: '80%',
                    resizeMode: 'cover',
                    alignSelf: 'center',
                  }}
                />
              )}
            </View>
          </View>
          <View style={[styles.galeraContainer, styles.row]}>
            <View style={styles.column}>
              {customTitles.map((title, index) => (
                <Text key={index} style={styles.title}>
                  {title}
                </Text>
              ))}
            </View>
            <View style={[styles.column2, styles.valuesContainer]}>
              {Object.entries(customValues).map(([key, value]) => (
                <Text key={key} style={[styles.info, styles.rightAlignedText]}>
                  {value !== null && value !== undefined ? (value.length > 15 ? `${value.substring(0, 12)}...` : value) : 'Sin registros'}
                </Text>
              ))}
            </View>
          </View>
        </Animated.View>
      </TouchableOpacity>
    ) : (
      <TouchableWithoutFeedback
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        testID="card-galera"
      >

        <Animated.View
          style={
          [styles.container, { width: windowWidth - windowWidth * 0.1, opacity: opacityValue }]
        }
        >
          {isChecked && (
            <View style={styles.checkBoxChecked} />
          )}
          <View style={styles.positionContainer}>
            <View style={styles.circle}>
              <Text style={styles.circleText}>{position}</Text>
            </View>
          </View>

          <View style={styles.caContainer}>
            <View style={styles.square}>
              {img && img !== 'N.A' ? ( // Comprobar si customValues.img existe
                <Image
                  source={{ uri: img }}
                  style={{
                    width: '100%',
                    height: '100%',
                    resizeMode: 'cover',
                    alignSelf: 'center',
                  }}
                />
              ) : (
                <Image
                  source={usuarioImage}
                  style={{
                    width: '50%',
                    height: '80%',
                    resizeMode: 'cover',
                    alignSelf: 'center',
                  }}
                />
              )}
            </View>
          </View>
          <View style={[styles.galeraContainer, styles.row]}>
            <View style={styles.column}>
              {customTitles.map((title, index) => (
                <Text key={index} style={styles.title}>
                  {title}
                </Text>
              ))}
            </View>
            <View style={[styles.column2, styles.valuesContainer]}>
              {Object.entries(customValues).map(([key, value]) => (
                <Text key={key} style={[styles.info, styles.rightAlignedText]}>
                  {value !== null && value !== undefined ? (value.length > 15 ? `${value.substring(0, 12)}...` : value) : 'Sin registros'}
                </Text>
              ))}
            </View>
          </View>
        </Animated.View>
        {/* Resto del contenido del componente */}
      </TouchableWithoutFeedback>
    )
  )
}

CardPersonalRanking.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  customValues: PropTypes.objectOf(PropTypes.any),
  customTitles: PropTypes.arrayOf(PropTypes.string),
  isTouchable: PropTypes.bool,
}

CardPersonalRanking.defaultProps = {
  customValues: {},
  customTitles: [],
}

export default CardPersonalRanking
