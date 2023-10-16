import React, { useState, useContext, useEffect } from 'react'
import {
  View, ScrollView, StatusBar, Alert, Button, TouchableOpacity, Text,
} from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'

import {
  SliderContainer, CommentsComponent, HeaderCreation,
} from '../../components'
import styles from './styles'

import { GlobalContext } from '../../GlobalContext/GlobalContext'

const CreationScreen = () => {
  const { setRefresh, setSending, sending } = useContext(GlobalContext)

  const route = useRoute()
  const idGalera = route.params?.idGalera || null
  const galera = route.params?.galera || null
  const navigation = useNavigation()
  // eslint-disable-next-line no-unused-vars
  const [isFormValid, setIsFormValid] = useState(true)

  const [arraySliderPesado, setArraySliderPesado] = useState([])
  const [registro, setRegistro] = useState({
    cantidadAlimento: 0,
    decesos: 0,
    observaciones: 'Nada',
    idGalera,
    pesado: 0,
  })
  const setRegistroPesado = index => fn => {
    const valor = fn({})
    console.log('valor', valor)
    setArraySliderPesado(current => current.map((array, i) => {
      if (i === index) {
        return { ...valor }
      }
      return array
    }))
  }
  const promedioPesado = arraySliderPesado
    .reduce((acc, obj) => obj.pesado + acc, 0) / arraySliderPesado.length
  console.log('promedio pesado:', promedioPesado)
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

  const showAlert = () => {
    Alert.alert(
      'Confirmación',
      '¿Quieres añadir más pesos?',
      [
        {
          text: 'Cancelar',
          onPress: () => console.log('Cancel pressed'),
          style: 'cancel',
        },
        {
          text: 'Si',
          onPress: handleAñadir,
        },
      ],
      { cancelable: false },
    )
  }
  function handleAñadir() {
    setArraySliderPesado([...arraySliderPesado, { pesado: 0 }])
  }

  function handleSend() {
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

  const dayOfWeek = new Date().getDay()
  console.log(arraySliderPesado)
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
        <View style={styles.buttonContainer}>
          <Button title="Añadir más registros" style={styles.button} onPress={showAlert} />
        </View>
        {arraySliderPesado.map((reg, index) => (
          <SliderContainer
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            title="Peso total de pollos: "
            minimumValue={0}
            maximumValue={200}
            step={1}
            medida="lbs"
            fixed="2"
            registro={registro}
            setRegistro={setRegistroPesado(index)}
            code="pesado"
            maxLength={3}
          />
        ))}
        <Text
          style={styles.text}
        >
          Promedio de Peso:
          {' '}
          { promedioPesado}
        </Text>
        <CommentsComponent code="observaciones" registro={registro} setRegistro={setRegistro} handleRegistrar={handleSend} />
      </ScrollView>
    </View>
  )
}

export default CreationScreen
