import React, { useState, useEffect } from 'react'
import {
  View, Text, TextInput, ScrollView,
} from 'react-native'
import PropTypes from 'prop-types'
import { CardNewGalley, HeaderInformation, BottomTabNavigation } from '../../components'
import styles from './styles'
import useApi from '../../hooks/useApi/useApi'

const NewGalleyScreen = ({ navigation }) => {
  const lotes = ['Finalizar galera', 'Crear galera']
  const [activeTab, setActiveTab] = useState(lotes[0])
  const [response, , handleRequest] = useApi()
  const [galleysPerLote, setGalleysPerLote] = useState([])
  const [listIdGalera, setidGalera] = useState([])

  const navigateToGaleras = async () => {
    navigation.navigate('Home')
  }

  const tabs = [
    {
      label: 'Informe', route: 'Home', icon: 'ios-home', method: 'Ionicons',
    },
    {
      label: 'Medición', route: 'Calculator', icon: 'new-message', method: 'Entypo',
    },
    {
      label: 'Granja', route: 'Finalizar galera', icon: 'book', method: 'Entypo',
    },
    {
      label: 'Personal', route: 'PersonalScreen', icon: 'people-alt', method: 'MaterialIcons',
    },
  ]

  // eslint-disable-next-line no-shadow
  const handleObtainGalleysPerLote = async () => {
    const response = await handleRequest('GET', '/galerasWorker')
    console.log('Mensaje:', response)

    if (Array.isArray(response.data) && response.data.length > 0) {
      const galleysData = response.data.map(galley => ({
        id_gale: galley.idGalera,
        // Agrega una nueva propiedad que contenga ambos valores
        galeraYlote: `Galera ${galley.numeroGalera} - Lote ${galley.idLote}`,
      }))

      const newGalleyData = response.data.map(galley => ({
        id_galera: galley.idGalera,
        id_lote: galley.idLote,
        no_galera: galley.numeroGalera,
        existencia: galley.existence,
        tipo_pollo: galley.typeChicken,
      }))

      // Accede a la nueva propiedad que contiene ambos valores
      const galerasYlotes = galleysData.map(galley => galley.galeraYlote)
      const idGalera = galleysData.map(galley => galley.id_gale)
      // console.log(galerasYlotes);
      console.log(idGalera)
      console.log(newGalleyData)
      setGalleysPerLote(galleysData)
      setidGalera(idGalera)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        await handleObtainGalleysPerLote() // Llama a la función con el valor de lote deseado
      } catch (error) {
        console.error('Error al obtener galeras:', error)
      }
    }
    fetchData() // Llama a la función al montar el componente
  }, [])

  const [activeTabb] = useState(2)

  return (
    <View style={styles.container}>
      <HeaderInformation
        title="Granja"
        customTitles={['Finalizar galera', 'Crear galera']}
        lotes={lotes}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        showLote={false}
        navigation={navigation}
        shouldNavigate
      />
      <ScrollView style={styles.scrollView}>

        {galleysPerLote.map((galera, index) => (
          <CardNewGalley key={index} dataList={[galera.galeraYlote]} idGalley={listIdGalera[index]} />
        ))}

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
