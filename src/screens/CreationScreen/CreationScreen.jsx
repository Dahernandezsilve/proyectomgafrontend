import React, { useState, useContext } from 'react'
import {
  View, ScrollView, StatusBar, Alert,
} from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import useApi from '../../hooks/useApi/useApi'
import {
  SliderContainer, CommentsComponent, HeaderCreation,
} from '../../components'

import { GlobalContext } from '../../GlobalContext/GlobalContext'

const CreationScreen = () => {
  const { setRefresh } = useContext(GlobalContext)
  const route = useRoute()
  const idGalera = route.params?.idGalera || null
  const galera = route.params?.galera || null
  const [, , handleRequest] = useApi()
  const navigation = useNavigation()

  const [registro, setRegistro] = useState({
    cantidadAlimento: 0,
    decesos: 0,
    observaciones: 'Nada',
    idGalera,
    pesado: 0,
  })

  const handleRegistrar = () => {
    handleRequest('POST', '/makeRegister', {
      cantidadAlimento: registro.cantidadAlimento,
      decesos: registro.decesos,
      observaciones: registro.observaciones,
      idGalera,
      pesado: registro.pesado,
    })
    setRefresh(true)
  }

  const handleSend = () => {
    const hasData = registro.cantidadAlimento > 0 && registro.decesos > 0

    if (hasData) {
      handleRegistrar()
      navigation.navigate('HomeWorker') // Navegar aquí si hay datos
      setRefresh(true)
    } else {
      Alert.alert(
        'Algunos campos tienen "0"',
        '¿Deseas continuar de todas formas?',
        [
          {
            text: 'Cancelar',
            style: 'cancel',
          },
          {
            text: 'Continuar',
            onPress: () => {
              handleRegistrar()
              navigation.navigate('HomeWorker') // Navegar aquí si el usuario elige continuar
              setRefresh(true)
            },
          },
        ],
        { cancelable: true },
      )
    }
  }

  const dayOfWeek = new Date().getDay()

  return (
    <View style={{ flex: 1, backgroundColor: '#ECECEC' }}>
      <StatusBar barStyle="light-content" backgroundColor="#fff" />
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <HeaderCreation galera={galera} />
      <View style={{ height: 2, width: '100%', backgroundColor: '#2B4985' }} />
      <ScrollView>
        {dayOfWeek === 1 && (
          <>
            <SliderContainer
              title="Cantidad de pollos pesados: "
              minimumValue={20}
              maximumValue={100}
              step={1}
              medida="pollos"
              fixed="0"
              registro={registro}
              setRegistro={setRegistro}
            />
            <SliderContainer
              title="Peso total de pollos: "
              minimumValue={0}
              maximumValue={200}
              step={1}
              medida="lbs"
              fixed="2"
              registro={registro}
              setRegistro={setRegistro}
              code="pesado"
            />
          </>
        )}
        <SliderContainer
          code="cantidadAlimento"
          title="Consumo de alimento: "
          minimumValue={0}
          maximumValue={100}
          step={1}
          medida="qq"
          fixed="2"
          registro={registro}
          setRegistro={setRegistro}
        />
        <SliderContainer
          code="decesos"
          title="Cantidad de pollos muertos: "
          minimumValue={0}
          maximumValue={5000}
          step={1}
          medida="pollos"
          fixed="0"
          registro={registro}
          setRegistro={setRegistro}
        />
        <CommentsComponent code="observaciones" registro={registro} setRegistro={setRegistro} handleRegistrar={handleSend} />
      </ScrollView>
    </View>
  )
}

export default CreationScreen
