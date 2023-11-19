import React, { useState, useEffect, useContext } from 'react'
import { View, ScrollView, StatusBar } from 'react-native'
import PropTypes from 'prop-types'
import { CardGalera, TextCard, HeaderGalley } from '../../components'
import { GlobalContext } from '../../GlobalContext/GlobalContext'

import useApi from '../../hooks/useApi/useApi'

const HomeWorkerScreen = ({ navigation }) => {
  const lotes = []
  const {
    refresh, setRefresh, sending, setSending,
  } = useContext(GlobalContext)
  const [activeTab, setActiveTab] = useState(0)
  const [response, , handleRequest] = useApi()
  const [galeras, setGaleras] = useState([])
  const [cantidadP, setCantidadLote] = useState(0)

  const handleObtainCantidadLote = async () => {
    await handleRequest('GET', '/countObtain')
  }

  const handleObtainGaleras = async () => {
    await handleRequest('GET', '/galerasWorker')
  }

  const navigateToGaleras = (idGalera, galera, tiempoEnDias) => {
    navigation.navigate('Creacion', { idGalera, galera, tiempoEnDias })
  }

  const handleSending = async () => {
    if (sending.length > 0) {
      const newGaleras = galeras
      // eslint-disable-next-line no-restricted-syntax
      for (const item1 of newGaleras) {
        const matchingItem2 = sending.find(item2 => item2.idGalera === item1.idGalera)
        if (matchingItem2) {
          item1.loading = true
        } else {
          item1.loading = false
        }
      }
      setGaleras(newGaleras)
      if (sending.length !== 0) {
        const firstToSend = sending[0]
        await handleRequest('POST', '/makeRegister', firstToSend)
        if (sending.length > 0) {
          const newSend = sending
          newSend.splice(0, 1)
          setSending(newSend)
        }
        handleObtainGaleras()
      }
    }
  }

  useEffect(() => {
    if (response?.data !== undefined) {
      const firstData = response.data
      if (typeof firstData === 'number') {
        console.log('Todo', response)
        if (firstData !== undefined) {
          setCantidadLote(firstData)
        }
      }
      if (firstData.length > 0) {
        if (firstData[0].idGalera !== undefined && firstData[0].idGalera !== null) {
          // eslint-disable-next-line no-plusplus
          for (let i = 0; i < firstData.length; i++) {
            firstData[i].loading = false
          }
          console.log(firstData)
          setGaleras(firstData)
        }
      }
      if (response.message === 'Esta vacia') {
        setGaleras([])
      }
    }
  }, [response])

  useEffect(() => {
    if (galeras) {
      handleObtainGaleras()
      handleSending()
    }
  }, [])

  useEffect(() => {
    handleObtainCantidadLote()
  }, [])

  useEffect(() => {
    handleObtainCantidadLote()
  }, [galeras])

  useEffect(() => {
    handleSending()
  }, [galeras])

  useEffect(() => {
    if (refresh) {
      handleObtainGaleras()
      setRefresh(false)
    }
    handleObtainCantidadLote()
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
        <TextCard number={` ${cantidadP}`} />
        {
          galeras.map(galer => {
            if (galer.ca === null) {
              return <CardGalera idGalera={galer.idGalera} key={galer.idGalera} galera={`Lote ${galer.idLote} - Galera ${galer.numeroGalera}`} tiempoEnDias={galer.tiempoEnDias} ca="gray" navigateToGaleras={navigateToGaleras} loading={galer.loading} />
            }
            if (parseFloat(galer.ca) > 4.9) {
              return <CardGalera idGalera={galer.idGalera} key={galer.idGalera} galera={`Lote ${galer.idLote} - Galera ${galer.numeroGalera}`} tiempoEnDias={galer.tiempoEnDias} ca="red" navigateToGaleras={navigateToGaleras} loading={galer.loading} />
            }

            if (parseFloat(galer.ca) < 2.6) {
              return <CardGalera idGalera={galer.idGalera} key={galer.idGalera} galera={`Lote ${galer.idLote} - Galera ${galer.numeroGalera}`} tiempoEnDias={galer.tiempoEnDias} ca="green" navigateToGaleras={navigateToGaleras} loading={galer.loading} />
            }

            if (parseFloat(galer.ca) > 2.6 && galer.ca < 4.9) {
              return <CardGalera idGalera={galer.idGalera} key={galer.idGalera} galera={`Lote ${galer.idLote} - Galera ${galer.numeroGalera}`} tiempoEnDias={galer.tiempoEnDias} ca="orange" navigateToGaleras={navigateToGaleras} loading={galer.loading} />
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
