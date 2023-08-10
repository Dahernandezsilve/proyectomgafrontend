
import React, { useEffect, useState } from 'react'
import Proptypes from 'prop-types'
import {
  View, Text, TouchableWithoutFeedback, Animated, useWindowDimensions,
} from 'react-native'
import styles from './styles'

const CardGalera = ({ idGalera, galera, ca, navigateToGaleras }) => {
  const [opacityValue] = useState(new Animated.Value(1))
  const windowWidth = useWindowDimensions().width

  const onPressIn = () => {
    Animated.timing(opacityValue, {
      toValue: 0.5,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.timing(opacityValue, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => navigateToGaleras(idGalera, galera)}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
    >
      <Animated.View
        testID="animated-view" // Add testID prop here
        style={[styles.container, { width: windowWidth - windowWidth * 0.1, opacity: opacityValue }]}
      >
        <View style={styles.caContainer}>
          <Text style={styles.smallText}>C.A</Text>
          <View style={[styles.square, { backgroundColor: ca }]} />
        </View>
        <View style={styles.galeraContainer}>
          <Text style={styles.text}>{galera}</Text>
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

CardGalera.propTypes = {
  idGalera: Proptypes.string,
  galera: Proptypes.string,
  ca: Proptypes.string,
  navigateToGaleras: Proptypes.func.isRequired,
}

CardGalera.defaultProps = {
  galera: 'Default',
  ca: 'red',
  idGalera: null,
}

export default CardGalera;
