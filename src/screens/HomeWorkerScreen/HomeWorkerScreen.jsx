import React, { useState, useEffect } from 'react'
import { View, ScrollView, StatusBar } from 'react-native'
import PropTypes from 'prop-types'
import { CardGalera, TextCard, HeaderGalley } from '../../components'
import useApi from '../../hooks/useApi/useApi'

const HomeWorkerScreen = ({ navigation }) => {
  const lotes = []
  const [activeTab, setActiveTab] = useState(lotes[0])
  const [response, , handleRequest] = useApi()
  const [galeras, setGaleras] = useState([])
  const [lote, setLote] = useState('')

  const handleObtainLote = () => {
    handleRequest('GET', '/loteObtain')
  }

  const handleObtainGaleras = () => {
    handleRequest('POST', '/galeras', { numLote: lote })
  }

  const navigateToGaleras = (idGalera, galera) => {
    navigation.navigate('Creacion', { idGalera, galera })
  }

  useEffect(() => {
    if (response !== undefined && response.data !== undefined && response.data.length > 0) {
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
    const obtainData = async () => {
      try {
        await handleObtainLote()
      } catch (error) {
        console.error('Error obteniendo lote:', error)
      }
    }

    obtainData()
  }, [])

  useEffect(() => {
    if (lote !== '' && lote !== undefined && lote !== null) {
      const handleObtainGaleras2 = async () => {
        try {
          await handleObtainGaleras()
        } catch (error) {
          console.error('Error obteniendo galeras:', error)
        }
      }

      handleObtainGaleras2()
    }
  }, [lote])

  return (
    <View style={{
      margin: 0, padding: 0, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ECECEC',
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
