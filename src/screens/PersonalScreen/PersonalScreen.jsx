import React, { useState, useEffect } from 'react'
import {
  View, Text, ScrollView,
} from 'react-native'
import PropTypes from 'prop-types'
import { HeaderInformation, BottomTabNavigation, CardPersonal } from '../../components'
import styles from './styles'
import useApi from '../../hooks/useApi/useApi'

const PersonalScreen = ({ navigation }) => {
  const lotes = ['20', '1', '2']
  const [workers, setWorkers] = useState()
  const [activeTab, setActiveTab] = useState(lotes[0])
  const [response, , handleRequest] = useApi()

  const handleObtainWorkers = () => {
    try {
      // eslint-disable-next-line no-shadow
      handleRequest('GET', '/obtainTrabajadores')
      // Haz algo con la respuesta aquí si es necesario
    } catch (error) {
      console.error('Error al obtener los trabajadores:', error)
    }
  }

  // const handleAddWorker = async () => {
  //   try {
  //     const response = await handleRequest('POST', '/trabajadores', newWorkerData)

  //     if (response.success) {
  //       // Trabajador agregado con éxito, puedes mostrar un mensaje de éxito
  //       console.log('Trabajador agregado con éxito')

  //       // Actualiza la lista de trabajadores
  //       setWorkers([...workers, newWorkerData])

  //       // Limpia los datos del nuevo trabajador
  //       setNewWorkerData({ name: '', otherInfo: '' })
  //     } else {
  //       // Maneja cualquier error que pueda ocurrir en la respuesta
  //       console.error('Error al agregar trabajador')
  //     }
  //   } catch (error) {
  //     console.error('Error en la solicitud: ', error)
  //   }
  // }

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
      <ScrollView style={styles.scrollabe}>
        <View style={styles.container2}>
          <View style={styles.rectangle}>
            <Text style={styles.workerTitle}>Personal</Text>
          </View>

          {workers !== undefined && workers.length > 0 ? (
            workers.map(worker => (
              <CardPersonal
                key={worker.id_trabajador}
                customValues={{
                  nombre: worker.nombre,
                  telefono: worker.telefono,
                  direccion: worker.direccion,
                  puesto: worker.puesto,
                }}
                img={worker.img}
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
