import React, { useState } from 'react'; // Import useState from 'react'
import { View, Text, TouchableWithoutFeedback, Animated, useWindowDimensions } from 'react-native';
import PropTypes from 'prop-types'; // Import PropTypes here
import styles from './styles';

const CardGalera = ({ galera, ca, navigateToGaleras }) => {
  const [opacityValue] = useState(new Animated.Value(1)); // Use useState from 'react'
  const windowWidth = useWindowDimensions().width;


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
      onPress={() => navigateToGaleras()}
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
  galera: PropTypes.string,
  ca: PropTypes.string,
  navigateToGaleras: PropTypes.func.isRequired,
};

CardGalera.defaultProps = {
  galera: 'Default',
  ca: 'red',
};

export default CardGalera;
