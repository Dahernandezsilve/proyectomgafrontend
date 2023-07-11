import React, { useState, useEffect } from 'react'
import { View, ScrollView, StatusBar } from 'react-native'
import PropTypes from 'prop-types'
import { CardGalera } from '../../components'
import TextCard from '../../components/TextCard/TextCard'
import useApi from '../../hooks/useApi/useApi'

const HomeWorkerScreen = ({ navigation }) => {
  const [response,, handleRequest] = useApi()
  const [galeras, setGaleras] = useState([])

  const handleObtainGaleras = () => {
    handleRequest('POST', '/galeras', { numLote: 20 })
  }

  const navigateToGaleras = async () => {
    navigation.navigate('Creacion')
  }

  useEffect(() => {
    if (response.data !== undefined && response.data !== null) {
      setGaleras(response.data)
    }
  }, [response])

  useEffect(() => {
    handleObtainGaleras()
  }, [])

  return (
    <View style={{
      margin: 0, padding: 0, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ECECEC',
    }}
    >
      <StatusBar barStyle="light-content" backgroundColor="#fff" />
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView contentContainerStyle={{ alignItems: 'center' }} style={{ margin: 0, padding: 0 }}>
        <TextCard number="10000" />
        {
          galeras.map(galer => {
            if (parseFloat(galer.ca) > 4.9) {
              return <CardGalera key={galer.idGalera} galera={`Galera ${galer.numeroGalera}`} ca="red" navigateToGaleras={navigateToGaleras} />
            }

            if (parseFloat(galer.ca) < 2.6) {
              return <CardGalera key={galer.idGalera} galera={`Galera ${galer.numeroGalera}`} ca="green" navigateToGaleras={navigateToGaleras} />
            }

            if (parseFloat(galer.ca) > 2.6 && galer.ca < 4.9) {
              return <CardGalera key={galer.idGalera} galera={`Galera ${galer.numeroGalera}`} ca="orange" navigateToGaleras={navigateToGaleras} />
            }
            return null
          })
        }
      </ScrollView>
    </View>
  )
}

HomeWorkerScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
}

export default HomeWorkerScreen
