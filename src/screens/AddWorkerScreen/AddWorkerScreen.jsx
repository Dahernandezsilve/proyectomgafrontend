/* eslint-disable no-console */
import React, { useState, useEffect } from 'react'
import {
  View, Text, ScrollView, TextInput, Button,
} from 'react-native'
// import PropTypes from 'prop-types'
// import { HeaderInformation, BottomTabNavigation, CardPersonal } from '../../components'
import styles from './styles'
import useApi from '../../hooks/useApi/useApi'

// eslint-disable-next-line react/prop-types
const AddWorkerScreen = ({ }) => {
  const [workerData, setWorkerData] = useState({
    nombre: '',
    apellidos: '',
    dpi: '',
    telefono: '',
    direccion: '',
    puesto: '',
    imagen: null,
  })
  const lotes = []
  const {
    refresh, setRefresh, sending, setSending,
  } = useContext(GlobalContext)
  const [activeTab, setActiveTab] = useState(0)

  const [galeras, setGaleras] = useState([])

  const [response, , handleRequest] = useApi()
  const handleObtainWorkers = () => {
    try {
      // eslint-disable-next-line no-shadow
      handleRequest('GET', '/obtainTrabajadores')
      // Haz algo con la respuesta aquí si es necesario
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error al obtener los trabajadores:', error)
    }
  }

  const handleAddWorker = async () => {
    try {
      // Validar los datos del nuevo trabajador aquí

      // Envía los datos al servidor
      await handleRequest('POST', '/addTrabajador', workerData)

      // Actualiza la lista de trabajadores
      handleObtainWorkers()

      // Oculta el formulario
      setWorkerData(false)
    } catch (error) {
      console.error('Error al agregar trabajador:', error)
    }
  }

  useEffect(() => {
    if (response.data !== undefined && response.data !== null) {
      if (response.data.length > 0) {
        setWorkerData(response.data)
      }
    }
  }, [response])

  return (
    <>

      <ScrollView>
        <View style={{ padding: 16 }}>
          <Text style={styles.input}>Añadir Nuevo Trabajador</Text>
          <TextInput
            placeholder="Nombre"
            value={workerData.nombre}
            onChangeText={text => setWorkerData({ ...workerData, nombre: text })}
          />
          <TextInput
            placeholder="Apellidos"
            value={workerData.apellidos}
            onChangeText={text => setWorkerData({ ...workerData, apellidos: text })}
          />
          <TextInput
            placeholder="DPI"
            value={workerData.dpi}
            onChangeText={text => setWorkerData({ ...workerData, dpi: text })}
          />
          <TextInput
            placeholder="Teléfono"
            value={workerData.telefono}
            onChangeText={text => setWorkerData({ ...workerData, telefono: text })}
          />
          <TextInput
            placeholder="Dirección"
            value={workerData.direccion}
            onChangeText={text => setWorkerData({ ...workerData, direccion: text })}
          />
          <TextInput
            placeholder="Puesto"
            value={workerData.puesto}
            onChangeText={text => setWorkerData({ ...workerData, puesto: text })}
          />
          <Text>Añadir Nuevo Trabajador</Text>
          <Button title="Completar" onPress={handleAddWorker} />

        </View>

      </ScrollView>

    </>
  )
}

export default AddWorkerScreen
