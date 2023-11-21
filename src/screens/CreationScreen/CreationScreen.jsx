import React, { useState, useContext } from 'react'
import {
  View, ScrollView, StatusBar, Alert, Button, Text,
} from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'

import {
  CommentsComponent, HeaderCreation,
} from '../../components'
import styles from './styles'
import { GlobalContext } from '../../GlobalContext/GlobalContext'
import SliderComponentRefactor from '../../components/SliderComponentRefactor/SliderComponentRefactor'

const CreationScreen = () => {
  const { setRefresh, setSending, sending } = useContext(GlobalContext)

  const route = useRoute()
  const idGalera = route.params?.idGalera || null
  const galera = route.params?.galera || null
  const tiempoEnDias = route.params?.tiempoEnDias || null
  const tiempoEnDiasRegex = /\b(\d+)\s+days\b/
  const tiempoEnDiasMatch = tiempoEnDiasRegex.exec(tiempoEnDias)
  console.log("t",tiempoEnDias)
  const tiempoEnDiasValue = tiempoEnDiasMatch ? parseInt(tiempoEnDiasMatch[1]) : null
  const isMultipleOf7 = tiempoEnDiasValue % 7 === 0
  console.log("mul",isMultipleOf7)
  const navigation = useNavigation()
  const [pollos, setPollos] = useState(0)
  const [pesado, setPesado] = useState(0)
  const [alimento, setAlimento] = useState(0)
  const [decesos, setDecesos] = useState(0)
  const [arraySliderPesado, setArraySliderPesado] = useState([])
  const [comentario, setComentario] = useState('Nada')

  const setValueArrayPesado = index => valor => {
    setArraySliderPesado(current => current.map((array, i) => {
      if (i === index) {
        return valor
      }
      return array
    }))
  }
  const promedioPesado = arraySliderPesado
    .reduce((acc, value) => value + acc, 0) + pesado
    / 1 + (arraySliderPesado.filter(valor => valor !== 0).length)
  console.log('promedio pesado:', promedioPesado)
  const handleRegistrar = () => {
    const newSending = sending
    newSending.push({
      cantidadAlimento: alimento,
      decesos,
      observaciones: comentario,
      idGalera,
      pesado: pesado + arraySliderPesado.reduce((acc, value) => value + acc, 0),
    })
    setSending(newSending)
    setRefresh(true)
  }

  const handleAñadir = () => {
    setArraySliderPesado([...arraySliderPesado, 0])
  }
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

  function handleSend() {
    // Check the validity of each value
    const isCantidadAlimentoValid = alimento > 0
      && alimento <= 100
    const isDecesosValid = decesos > 0 && decesos <= 5000

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
      <HeaderCreation galera={galera} />
      <View style={{ height: 2, width: '100%', backgroundColor: '#2B4985' }} />
      <ScrollView>
        {isMultipleOf7 && (
          <>
            <SliderComponentRefactor
              title="Peso total de pollos: "
              minimumValue={0}
              maximumValue={200}
              step={1}
              medida="lbs"
              value={pesado}
              setValue={setPesado}
            />
            {arraySliderPesado.map((reg, index) => (
              <SliderComponentRefactor
            // eslint-disable-next-line react/no-array-index-key
                key={index}
                title="Peso total de pollos: "
                minimumValue={0}
                maximumValue={200}
                step={1}
                medida="lbs"
                value={reg}
                setValue={setValueArrayPesado(index)}
                maxLength={3}
              />
            ))}
            <Text
              style={styles.text}
            >
              Promedio de Peso:
              {' '}
              {promedioPesado}
            </Text>
            <View style={styles.container}>
              <Button title="Añadir más registros" color="#2e4a85" style={styles.buttonT} onPress={showAlert} />
            </View>
          </>
        )}
        <SliderComponentRefactor
          title="Consumo de alimento: "
          minimumValue={0}
          maximumValue={100}
          step={1}
          medida="qq"
          value={alimento}
          setValue={setAlimento}
        />
        <SliderComponentRefactor
          title="Cantidad de pollos muertos: "
          minimumValue={0}
          maximumValue={5000}
          step={1}
          medida="pollos"
          value={decesos}
          setValue={setDecesos}
        />
        <CommentsComponent code="observaciones" value={comentario} setValue={setComentario} />
        <View style={styles.buttonContainer}>
          <Button
            title="Completar"
            style={{ borderRadius: 5 }}
            color="#2e4a85"
            // eslint-disable-next-line react/jsx-no-bind
            onPress={handleSend}
          />
        </View>
      </ScrollView>
    </View>
  )
}

export default CreationScreen
