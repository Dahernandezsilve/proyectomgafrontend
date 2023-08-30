import React, { useState, useEffect, useContext } from 'react'
import { View, ScrollView, StatusBar } from 'react-native'
import PropTypes from 'prop-types'
import { CardGalera, TextCard, HeaderGalley } from '../../components'
import { GlobalContext } from '../../GlobalContext/GlobalContext'

import useApi from '../../hooks/useApi/useApi'

const HomeWorkerScreen = ({ navigation }) => {
  const lotes = []
  const { refresh, setRefresh } = useContext(GlobalContext)
  const [activeTab, setActiveTab] = useState(0)
  const [response, , handleRequest] = useApi()
  const [galeras, setGaleras] = useState([])
  const [lote, setLote] = useState('')

  const handleObtainLote = async () => {
    await handleRequest('GET', '/loteObtain')
  }

  const handleObtainGaleras = async () => {
    await handleRequest('POST', '/galeras', { numLote: lote })
  }

  const navigateToGaleras = (idGalera, galera) => {
    navigation.navigate('Creacion', { idGalera, galera })
  }

  useEffect(() => {
    if (response?.data?.length > 0) {
      const firstData = response.data[0]

      if (firstData.idLote !== undefined && firstData.idLote !== null) {
        setLote(firstData.idLote)
      }

      if (firstData.idGalera !== undefined && firstData.idGalera !== null) {
        setGaleras(response.data)
      }
    }
  }, [response])

  useEffect(() => {
  }, [galeras])

  useEffect(() => {
    handleObtainLote()
  }, [])

  useEffect(() => {
    if (lote) {
      handleObtainGaleras()
    }
  }, [lote])

  useEffect(() => {
    if (refresh) {
      handleObtainLote()
      setRefresh(false)
    }
  }, [refresh])

  return (
    <View style={{
      flex: 1, margin: 0, padding: 0, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ECECEC',
    }}
    >

      <StatusBar barStyle="light-content" backgroundColor="#fff" />
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <HeaderGalley
        title="Galeras y tareas pendientes"
        lotes={lotes}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <ScrollView contentContainerStyle={{ alignItems: 'center' }} style={{ margin: 0, padding: 0 }}>
        <TextCard number="10000" />
        {
          galeras.map(galer => {
            if (galer.ca === null) {
              return <CardGalera idGalera={galer.idGalera} key={galer.idGalera} galera={`Galera ${galer.numeroGalera}`} ca="gray" navigateToGaleras={navigateToGaleras} />
            }
            if (parseFloat(galer.ca) > 4.9) {
              return <CardGalera idGalera={galer.idGalera} key={galer.idGalera} galera={`Galera ${galer.numeroGalera}`} ca="red" navigateToGaleras={navigateToGaleras} />
            }

            if (parseFloat(galer.ca) < 2.6) {
              return <CardGalera idGalera={galer.idGalera} key={galer.idGalera} galera={`Galera ${galer.numeroGalera}`} ca="green" navigateToGaleras={navigateToGaleras} />
            }

            if (parseFloat(galer.ca) > 2.6 && galer.ca < 4.9) {
              return <CardGalera idGalera={galer.idGalera} key={galer.idGalera} galera={`Galera ${galer.numeroGalera}`} ca="orange" navigateToGaleras={navigateToGaleras} />
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
