import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, Button } from 'react-native'

const DetailsScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Details Screen</Text>
    <Button
      title="Ir a creacion de Galeras"
      onPress={() => navigation.navigate('Creacion')}
    />
  </View>
)

DetailsScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
}

export default DetailsScreen
