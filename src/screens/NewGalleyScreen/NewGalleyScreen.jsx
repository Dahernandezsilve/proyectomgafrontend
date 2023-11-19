import React, { useState, useEffect } from 'react'
import {
  View, Text, TextInput, ScrollView,
} from 'react-native'
import PropTypes from 'prop-types'
import { CardGaleraAdmin, HeaderInformation, BottomTabNavigation } from '../../components'
import styles from './styles'
import useApi from '../../hooks/useApi/useApi'


const NewGalleyScreen = ({ navigation }) => {
  const lotes = ['Mi granja', 'Asignacion', 'Crear galera']
  const [activeTab, setActiveTab] = useState(lotes[2])
  const [response, , handleRequest] = useApi()
  const cant_lotes = ['1', '2', '3', '4']
  const [verLotes, setLotes] = useState(cant_lotes[0])

  const navigateToGaleras = async () => {
    navigation.navigate('Creacion')
  }

  const tabs = [
    {
      label: 'Informe', route: 'Home', icon: 'ios-home', method: 'Ionicons',
    },
    {
      label: 'Medición', route: 'Administrador', icon: 'new-message', method: 'Entypo',
    },
    {
      label: 'Granja', route: 'Crear galera', icon: 'book', method: 'Entypo',
    },
    {
      label: 'Personal', route: 'PersonalScreen', icon: 'people-alt', method: 'MaterialIcons',
    },
  ]

  // eslint-disable-next-line no-shadow
  const handleObtainGalleysPerLote = async verLotes => {
    const body = {
      numLote: parseInt(verLotes, 10),
    }

    console.log('body', body)

    // Realiza una solicitud POST a la ruta de Flask
    const response = await handleRequest('POST', '/galerasAdmin', body)
    console.log('Mensaje:', response)
    if (Array.isArray(response.data) && response.data.length > 0) {
      const galleysData = response.data.map(galley => ({
        numeroGalera: galley.numeroGalera,
        typeChicken: galley.typeChicken,
        existence: galley.existence
      }));
      console.log('Datos de las galeras:');
      console.log(galleysData);

      // Accede solo al número de galera
      const numerosGalera = galleysData.map(galley => galley.numeroGalera);

      setGalleysPerLote(galleysData); // Asegúrate de tener una función setWorkersPerLote para establecer los datos en tu estado
    } 
    //console.log("Datos:", galleysPerLote)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        await handleObtainGalleysPerLote('1'); // Llama a la función con el valor de lote deseado
      } catch (error) {
        console.error('Error al obtener galeras:', error);
      }
    };
    fetchData(); // Llama a la función al montar el componente
  }, []); 
  

  const [activeTabb] = useState(2)

  return (
    <View style={styles.container}>
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
      <ScrollView>
        <View style={styles.container}>

          <View style={styles.rectangle}>
            <Text style={styles.workerTitle}>Asignar trabajador</Text>
          </View>


        </View>
      </ScrollView>
      <View style={styles.bottomTabNavigator}>
        <BottomTabNavigation
          activeTab={activeTabb}
          tabs={tabs}
          navigation={navigation}
        />
      </View>
    </View>

  )
}

NewGalleyScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
}

export default NewGalleyScreen