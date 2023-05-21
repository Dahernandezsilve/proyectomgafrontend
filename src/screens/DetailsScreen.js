import React from 'react'
import { View, Text, Button } from 'react-native'


const DetailsScreen = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Ir a creacion de Galeras"
          onPress={() => navigation.navigate('Creacion')}
        />
      </View>
    );
}

export default DetailsScreen
  