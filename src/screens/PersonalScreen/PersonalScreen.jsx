import React, { useState, useEffect } from 'react'
import {
  View, Text, ScrollView,
} from 'react-native'
import PropTypes from 'prop-types'
import { CardGaleraAdmin, HeaderInformation, BottomTabNavigation } from '../../components'
import styles from './styles'
import useApi from '../../hooks/useApi/useApi'

const galera = ['Jose Fernandez', 'Esteban Escalante', 'Raul Vasquez']
const cantidadAlimento = ['4356 7890', '9234 5632', '1208 6684']
const pesado = ['Oratorio', 'Cuilapa', 'Barberena']
const decesos = ['Encargado de Lote', 'Encargado de Lote', 'Encargado de Lote']

const PersonalScreen = ({ navigation }) => {
  const lotes = ['20', '1', '2']
  const [workers, setWorkers] = useState()
  const [activeTab, setActiveTab] = useState(lotes[0])
  const [response, , handleRequest] = useApi()

  const navigateToGaleras = async () => {
    navigation.navigate('Creacion')
  }

  const handleObtainWorkers = () => {
    try {
      // eslint-disable-next-line no-shadow
      handleRequest('GET', '/obtainTrabajadores')
      // Haz algo con la respuesta aquí si es necesario
    } catch (error) {
      console.error('Error al obtener los trabajadores:', error)
    }
  }

  useEffect(() => {
    console.log('response', workers)
  }, [workers])

  useEffect(() => {
    if (response.data !== undefined && response.data !== null) {
      if (response.data.length > 0) {
        setWorkers(response.data)
      }
    }
  }, [response])

  useEffect(() => {
    handleObtainWorkers()
  }, [])

  const tabs = [
    {
      label: 'Informe', route: 'Home', icon: 'ios-home', method: 'Ionicons',
    },
    {
      label: 'Medición', route: 'Administrador', icon: 'new-message', method: 'Entypo',
    },
    {
      label: 'Granja', route: 'NGalley', icon: 'book', method: 'Entypo',
    },
    {
      label: 'Personal', route: 'PersonalScreen', icon: 'people-alt', method: 'MaterialIcons',
    },
  ]

  const [activeTabb] = useState(3)

  return (
    <View style={styles.container}>
      <HeaderInformation
        title="Personal"
        customTitles={['Mi personal', 'Ranking', 'Añadir personal']}
        lotes={lotes}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        showLote={false}
      />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.rectangle}>
            <Text style={styles.workerTitle}>Personal</Text>
          </View>

          {workers !== undefined && workers.length > 0 ? (
            workers.map((worker, index) => (
              <CardGaleraAdmin
      // eslint-disable-next-line react/no-array-index-key
                key={index}
                ca="#FFFFFF"
                msgCA=""
                numberCA={null}
                customValues={{
                  galera: worker.nombre,
                  cantidadAlimento: worker.telefono,
                  pesado: worker.direccion,
                  decesos: worker.puesto,
                  navigateToGaleras,
                }}
                customTitles={['Nombre:', 'Telefono:', 'Direccion:', 'Puesto:']}
              />
            ))
          ) : null}

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

PersonalScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
}

export default PersonalScreen
