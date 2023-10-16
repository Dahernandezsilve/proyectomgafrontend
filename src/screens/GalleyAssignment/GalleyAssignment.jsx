import React from 'react';
import { View, Text } from 'react-native';
import {
    CardAssignment
  } from '../../components'

const GalleyAssignment = () => {
  return (
    <><View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Hola mundo</Text>
      </View>
          <CardAssignment
          customValues={{
                  galera: 'Galera ',
                  cantidadAlimento: ' qq',
                  pesado: ' lbs',
              }}
              customTitles={['No. Galera:', 'Tipo de población:', 'Cantidad de pollos:']} /></>
  );
};

export default GalleyAssignment;
