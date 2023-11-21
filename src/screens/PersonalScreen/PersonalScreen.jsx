import React, { useState, useEffect } from 'react'
import {
  View, Text, ScrollView,
} from 'react-native'
import PropTypes from 'prop-types'
import {
  HeaderInformation, BottomTabNavigation, CardPersonal, CardPersonalRanking,
} from '../../components'
import styles from './styles'
import useApi from '../../hooks/useApi/useApi'

const PersonalScreen = ({ navigation }) => {
  const partition = ['Mi personal', 'Ranking']
  const [workers, setWorkers] = useState()
  const [ranking, setRanking] = useState()
  const [activeTab, setActiveTab] = useState(partition[0])
  const [response, , handleRequest] = useApi()
  const [activeTabb] = useState(3)

  const handleObtainWorkers = () => {
    try {
      // eslint-disable-next-line no-shadow
      handleRequest('GET', '/obtainTrabajadores')
      // Haz algo con la respuesta aquí si es necesario
    } catch (error) {
      console.error('Error al obtener los trabajadores:', error)
    }
  }

  const handleObtainRanking = () => {
    try {
      // eslint-disable-next-line no-shadow
      handleRequest('GET', '/obtainRanking')
      // Haz algo con la respuesta aquí si es necesario
    } catch (error) {
      console.error('Error al obtener el ranking:', error)
    }
  }

  useEffect(() => {
    console.log('workers', workers)
  }, [workers])

  useEffect(() => {
    console.log('ranking', ranking)
  }, [ranking])

  useEffect(() => {
    if (response.data !== undefined && response.data !== null) {
      if (response.data.length > 0) {
        if (response.data[0].avgCA || response.data[0].avgCA == null) {
          setRanking(response.data)
        }
        if (response.data[0].direccion) {
          setWorkers(response.data)
        }
      }
    }
  }, [response])

  useEffect(() => {
    handleObtainWorkers()
    handleObtainRanking()
  }, [])

  const tabs = [
    {
      label: 'Informe', route: 'Home', icon: 'ios-home', method: 'Ionicons',
    },
    {
      label: 'Medición', route: 'Calculator', icon: 'new-message', method: 'Entypo',
    },
    {
      label: 'Granja', route: 'Crear galera', icon: 'book', method: 'Entypo',
    },
    {
      label: 'Personal', route: 'PersonalScreen', icon: 'people-alt', method: 'MaterialIcons',
    },
  ]

  return (
    <View style={styles.container}>
      <HeaderInformation
        title="Personal"
        customTitles={['Mi personal', 'Ranking']}
        lotes={partition}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        showLote={false}
        navigation={navigation}
        shouldNavigate={true}
      />
      {activeTab === 'Mi personal' ? (
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
                  isTouchable={false}
                />
              ))
            ) : null}

          </View>
        </ScrollView>
      ) : (
        <ScrollView style={styles.scrollabe}>
          <View style={styles.container2}>
            <View style={styles.rectangle}>
              <Text style={styles.workerTitle}>Ranking</Text>
            </View>
            {ranking !== undefined && ranking.length > 0 ? (
              ranking.map((rank, index) => (
                <CardPersonalRanking
                  key={rank.nombre}
                  customValues={{
                    nombre: rank.nombre,
                    promedioCA: rank.avgCA,
                  }}
                  img={rank.urlImage}
                  customTitles={['Nombre:', 'Promedio CA:']}
                  isTouchable={false}
                  position={index + 1}
                />
              ))
            ) : null}
          </View>
        </ScrollView>
      )}
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
