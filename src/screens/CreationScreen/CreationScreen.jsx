import React, { useState } from 'react'
import { View, ScrollView, StatusBar } from 'react-native'
import useApi from '../../hooks/useApi/useApi'
import {
  SliderContainer, CommentsComponent, ModalComponent, HeaderCreation,
} from '../../components'

const CreationScreen = () => {
  const [,, handleRequest] = useApi()
  const [registro, setRegistro] = useState({
    cantidadAlimento: 200,
    decesos: 2,
    observaciones: 'Some observations',
    idGalera: 1,
    pesado: 20.00,
  })

  const handleRegistrar = () => {
    handleRequest('POST', '/makeRegister', {
      cantidadAlimento: registro.cantidadAlimento,
      decesos: registro.decesos,
      observaciones: registro.observaciones,
      idGalera: registro.idGalera,
      pesado: registro.pesado,
    })
  }

  const dayOfWeek = new Date().getDay()

  return (
    <View style={{ flex: 1, backgroundColor: '#ECECEC' }}>
      <StatusBar barStyle="light-content" backgroundColor="#fff" />
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <HeaderCreation />
      <View style={{ height: 2, width: '100%', backgroundColor: '#2B4985' }} />
      <ScrollView>
        {dayOfWeek === 6 && (
            <>
              <SliderContainer title="Cantidad de pollos pesados: " minimumValue={20} maximumValue={100} step={1} medida="pollos" fixed="0" />
              <SliderContainer title="Peso medido de aves: " minimumValue={0} maximumValue={200} step={1} medida="lbs" fixed="0" />
            </>
          )}
        <SliderContainer title="Consumo de alimento: " minimumValue={0} maximumValue={100} step={1} medida="qq" fixed="0" registro={registro} setRegistro={setRegistro} info="cantidadAlimento" />
        <SliderContainer title="Cantidad de pollos muertos: " minimumValue={0} maximumValue={10000} step={1} medida="pollos" fixed="0" registro={registro} setRegistro={setRegistro} info="decesos" />
        <CommentsComponent handleRegistrar={handleRegistrar} />
      </ScrollView>
    </View>
  )
}

export default CreationScreen
