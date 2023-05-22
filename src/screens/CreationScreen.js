import React, { useState } from 'react'
import { View, ScrollView, StatusBar } from 'react-native'
import useApi from "../hooks/useApi/useApi"
import SliderContainer from '../components/SliderContainer'
import CommentsComponent from '../components/commentsComponent'
import { ModalComponent } from '../components/modalComponent'

const CreationScreen = ({ navigation }) => {
    const [response, loading, handleRequest] = useApi()
    const [registro, setRegistro] = useState({
      cantidadAlimento: 200,
      decesos: 2,
      observaciones: "Some observations",
      idGalera: 1,
      pesado: 20.00
    })
    
    const handleRegistrar = () => {
      handleRequest('POST', '/makeRegister', { 
        cantidadAlimento: registro.cantidadAlimento,
        decesos: registro.decesos,
        observaciones: registro.observaciones,
        idGalera: registro.idGalera,
        pesado: registro.pesado })
      console.log(response);
    }
    return (
      <View style={{backgroundColor: '#d3d3d3'}}>
        <StatusBar barStyle="light-content" backgroundColor="#fff" />
        <StatusBar barStyle="dark-content" backgroundColor="#fff" /> 
        <View style={{ height: 2, width: '100%', backgroundColor: '#2B4985'}} />          
          <ScrollView contentContainerStyle={{ alignItems: 'center', marginBottom: 10 }}>     
            <SliderContainer title='Cantidad de pollos pesados: ' minimumValue={20} maximumValue={100} step={1} medida='pollos' fixed='0'  />  
            <SliderContainer title='Cantidad de alimento proporcionado: '  minimumValue={0} maximumValue={20} step={1} medida='qq' fixed='0' registro={registro} setRegistro={setRegistro} info='cantidadAlimento' />
            <SliderContainer title='Peso medido: '  minimumValue={0} maximumValue={200} step={1} medida='lbs' fixed='0' />
            <SliderContainer title='Cantidad de decesos: '  minimumValue={0} maximumValue={3000} step={1} medida='pollos' fixed='0' registro={registro} setRegistro={setRegistro} info='decesos' />
            <CommentsComponent handleRegistrar={handleRegistrar} />
            <ModalComponent />
          </ScrollView>
      </View>
    )
}

export default CreationScreen