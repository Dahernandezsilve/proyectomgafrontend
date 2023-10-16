import React,{useState} from 'react';
import { View, Text, Dimensions} from 'react-native';
import {
    CardAssignment, HeaderInformation
  } from '../../components'

import styles from './styles';

const windowWidth = Dimensions.get('window').width

const GalleyAssignment = ({navigation}) => {

  const lotes = ['20', '1', '2']
  const [activeTab, setActiveTab] = useState(lotes[0])

  return (
    <>
      <HeaderInformation
        title="Granja"
        customTitles={['Mi granja', 'Asignacion', 'Crear galera']}
        lotes={lotes}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        showLote={false}
        navigation={navigation}
        shouldNavigate={true}
      />
      
        <View style={styles.rectangle}>
          <Text style={[styles.info, { fontSize: windowWidth * 0.055 }]}>Pendientes por asignar</Text>
        </View>
      
          <CardAssignment
          customValues={{
                  galera: 'Parametrizar ',
                  cantidadAlimento: 'esto',
                  pesado: 'xd',
              }}
              customTitles={['No. Galera:', 'Tipo de población:', 'Cantidad de pollos:']} /></>
  );
};

export default GalleyAssignment;
