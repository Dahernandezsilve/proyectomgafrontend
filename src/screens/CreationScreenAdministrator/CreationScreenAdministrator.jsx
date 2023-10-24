import React, { useState, useContext, useEffect } from 'react'
import {
  View, ScrollView, StatusBar, Alert,
} from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import {
  SliderContainer, CommentsComponent, HeaderComponent,
} from '../../components'

import { GlobalContext } from '../../GlobalContext/GlobalContext'

const CreationScreenAdministrator = () => {
  const { setRefresh, setSending, sending } = useContext(GlobalContext)
  const route = useRoute()
  const customTitles = ['Mis mediciones', 'Nueva medición']
  const [activeTab, setActiveTab] = useState(0)
  const idGalera = route.params?.idGalera || null
  // const galera = route.params?.galera || null
  const navigation = useNavigation()
  // eslint-disable-next-line no-unused-vars
  const [isFormValid, setIsFormValid] = useState(true)

  const [registro, setRegistro] = useState({
    cantidadAlimento: 0,
    decesos: 0,
    observaciones: 'Nada',
    idGalera,
    pesado: 0,
  })

  const handleRegistrar = () => {
    const newSending = sending
    newSending.push({
      cantidadAlimento: registro.cantidadAlimento,
      decesos: registro.decesos,
      observaciones: registro.observaciones,
      idGalera,
      pesado: registro.pesado,
    })
    setSending(newSending)
    setRefresh(true)
  }

  useEffect(() => {
    console.log('registro', registro)
  }, [registro])

  const handleSend = () => {
    // Check the validity of each value
    const isCantidadAlimentoValid = registro.cantidadAlimento > 0
      && registro.cantidadAlimento <= 100
    const isDecesosValid = registro.decesos > 0 && registro.decesos <= 5000

    const hasData = isCantidadAlimentoValid && isDecesosValid

    if (hasData) {
      navigation.navigate('HomeWorker')
      handleRegistrar()
      setRefresh(true)
    } else {
      Alert.alert(
        'Algunos campos tienen valores incorrectos o están vacíos',
        '¿Deseas continuar de todas formas?',
        [
          {
            text: 'Cancelar',
            style: 'cancel',
          },
          {
            text: 'Continuar',
            onPress: () => {
              navigation.navigate('HomeWorker') // Navegar aquí si el usuario elige continuar
              handleRegistrar()
              setRefresh(true)
            },
          },
        ],
        { cancelable: true },
      )
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#ECECEC' }}>
      <StatusBar barStyle="light-content" backgroundColor="#fff" />
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <HeaderComponent
        title="Mediciones"
        customTitles={customTitles}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <ScrollView>

        <SliderContainer
          title="Cantidad de pollos pesados: "
          minimumValue={20}
          maximumValue={100}
          step={1}
          medida="pollos"
          fixed="0"
          registro={registro}
          setRegistro={setRegistro}
          maxLength={3}
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
          maxLength={3}
        />
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
          maxLength={3}
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
          maxLength={4}
          setRegistro={setRegistro}
        />
        <CommentsComponent code="observaciones" registro={registro} setRegistro={setRegistro} handleRegistrar={handleSend} />
      </ScrollView>
    </View>
  )
}

export default CreationScreenAdministrator
